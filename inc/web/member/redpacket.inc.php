<?php
/*淘 宝 柠 檬 鱼 科 技 https://shop486845690.taobao.com*/
defined('IN_IA') or exit('Access Denied');
global $_W, $_GPC;
$op = trim($_GPC['op']) ? trim($_GPC['op']): 'list';
mload()->model('redPacket');

if($op == 'list') {
	$_W['page']['title'] = '会员红包';
	$condition = ' where a.uniacid = :uniacid';
	$params = array(':uniacid' => $_W['uniacid']);
	$channel = trim($_GPC['channel']);
	if(!empty($channel)) {
		$condition .= ' and a.channel = :channel';
		$params[':channel'] = $channel;
	}

	$status = isset($_GPC['status']) ?intval($_GPC['status']) : 0;
	if($status > 0) {
		$condition .= ' and a.status = :status';
		$params[':status'] = $status;
	}

	if (empty($grant_starttime) || empty($grant_endtime)) {
		$grant_starttime = strtotime('-1 month');
		$grant_endtime = time();
	}

	if (empty($use_starttime) || empty($use_endtime)) {
		$use_starttime = strtotime('-1 month');
		$use_endtime = time();
	}

	if (!empty($_GPC['granttime']['start']) && !empty($_GPC['granttime']['end'])) {
		$grant_starttime = strtotime($_GPC['granttime']['start']);
		$grant_endtime = strtotime($_GPC['granttime']['end']);
		$condition .= ' and a.granttime >= :grant_starttime and a.granttime <= :grant_endtime';
		$params[':grant_starttime'] = $grant_starttime;
		$params[':grant_endtime'] = $grant_endtime;
	}

	if (!empty($_GPC['usetime']['start']) && !empty($_GPC['usetime']['end'])) {
		$use_starttime = strtotime($_GPC['usetime']['start']);
		$use_endtime = strtotime($_GPC['usetime']['end']);
		$condition .= ' and a.usetime >= :use_starttime and a.usetime <= :use_endtime';
		$params[':use_starttime'] = $use_starttime;
		$params[':use_endtime'] = $use_endtime;
	}

	$keyword = trim($_GPC['keyword']);
	if(!empty($keyword)) {
		$condition .= ' and (a.uid = :uid or b.realname like :keyword or b.mobile like :keyword or b.nickname like :keyword)';
		$params[':uid'] = $keyword;
		$params[':keyword'] = "%{$keyword}%";
	}

	$pindex = max(1, intval($_GPC['page']));
	$psize = 15;
	$total = pdo_fetchcolumn('select count(*) from ' . tablename('tiny_wmall_activity_redpacket_record') . ' as a left join ' . tablename('tiny_wmall_members') . ' as b on a.uid = b.uid' . $condition, $params);
	$redpackets = pdo_fetchall('select a.*,b.avatar,b.realname,b.mobile,b.nickname from ' . tablename('tiny_wmall_activity_redpacket_record') . ' as a left join ' . tablename('tiny_wmall_members') . ' as b on a.uid = b.uid'. $condition . ' order by a.id desc limit '.($pindex - 1) * $psize . ',' . $psize, $params);
	if(!empty($redpackets)) {
		foreach($redpackets as &$rvalue) {
			if(!empty($rvalue['category_limit'])) {
				$rvalue['category_limit'] = explode("|", $rvalue['category_limit']);
			}
			if(!empty($rvalue['times_limit'])) {
				$rvalue['times_limit'] = iunserializer($rvalue['times_limit']);
			}
		}
	}
	$pager = pagination($total, $pindex, $psize);
	$redpacket_channels = redpacket_channels();
	$redpacket_status = redpacket_status();
	$store_categorys = pdo_getall('tiny_wmall_store_category', array('uniacid' => $_W['uniacid'], 'status' => 1), array('id', 'title'), 'id');
	$paotui_scene = pdo_getall('tiny_wmall_errander_page', array('uniacid' => $_W['uniacid'], 'type' => 'scene'), array('id', 'name'), 'id');
}

if($op == 'del') {
	$ids = $_GPC['id'];
	if(!is_array($ids)) {
		$ids = array($ids);
	}
	foreach($ids as $id) {
		pdo_delete('tiny_wmall_activity_redpacket_record', array('uniacid' => $_W['uniacid'], 'id' => $id));
	}
	imessage(error(0, '删除红包记录成功'), '', 'ajax');
}
include itemplate('member/redpacket');

