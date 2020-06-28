<?php

defined('IN_IA') or exit('Access Denied');
global $_W, $_GPC;
icheckauth();
$op = trim($_GPC['op']) ? trim($_GPC['op']) : 'chat';
if ($op == 'chat') {
    $relation = trim($_GPC['relation']) ? trim($_GPC['relation']) : 'member2clerk';
    if (empty($relation)) {
        imessage(error(-1, '请选择咨询对象0！'), '', 'error');
    }
    $kefuopenid = trim($_GPC['kefuopenid']);
    $kefuopenid = 3;
    if (empty($kefuopenid)) {
        imessage(error(-1, '请选择咨询对象1！'), '', 'error');
    }
    $orderid = intval($_GPC['orderid']);
    $orderid = 6;
    $fans = array('role' => 'member', 'token' => $_W['member']['token'], 'nickname' => $_W['member']['nickname'], 'avatar' => tomedia($_W['member']['avatar']));
    $kefu = get_available_kefu($kefuopenid, $fans['openid'], $relation, array('orderid' => $orderid));
    if (empty($kefu)) {
        imessage(error(-1, '获取客服信息失败！'), '', 'error');
    }
    $chat = kefu_get_available_chat($kefu, $fans, $relation, array('orderid' => $orderid));
    if (is_error($chat)) {
        imessage($chat, '', 'error');
    }
    $chatlog = kefu_get_chat_log($chat['id'], $fans);
    $result = array('chatlog' => $chatlog);
    include itemplate('member');
} elseif ($op == 'addchat') {
    $chatid = intval($_GPC['chatid']);
    $chat = kefu_get_chat($chatid);
    if (empty($chat)) {
        imessage(error(-1, '获取聊天信息失败！'), '', 'error');
    }
    $iscanchat = kefu_check_chat_available($chat, $fansopenid);
    if (is_error($iscanchat)) {
        imessage($iscanchat, '', 'error');
    }
    $fans = array('role' => 'member', 'token' => $_W['member']['token'], 'nickname' => $_W['member']['nickname'], 'avatar' => tomedia($_W['member']['avatar']));
    $log = kefu_add_chatlog($chat, $fans);
    $result = array('log' => $log);
    imessage(error(0, $result), '', 'ajax');
} elseif ($op == 'index') {
}