<?php

defined('IN_IA') or exit('Access Denied');
global $_W;
global $_GPC;
$op = trim($_GPC["op"]) ? trim($_GPC["op"]) : "list";
if ($op == "list") {
    $_W["page"]["title"] = "绑定列表";
    $condition = " where uniacid = :uniacid";
    $params = array(":uniacid" => $_W["uniacid"]);
    $type = trim($_GPC["type"]);
    if (in_array($type, array("member", "store", "deliveryer", "errander"))) {
        $condition .= " and type = :type ";
        $params[":type"] = $type;
    }
    $keyword = trim($_GPC["keyword"]);
    if (!empty($keyword)) {
        $condition .= " and (real_mobile like '%" . $keyword . "%' or secret_mobile like '%" . $keyword . "%' or extension like '%" . $keyword . "%')";
    }
    $types = array("member" => array("text" => "顾客-外卖", "css" => "label label-danger"), "errander" => array("text" => "顾客-跑腿", "css" => "label label-warning"), "store" => array("text" => "商　户", "css" => "label label-info"), "deliveryer" => array("text" => "配送员", "css" => "label label-success"));
    if (!check_plugin_perm('errander')) {
        unset($types["errander"]);
    }
    $pindex = max(1, intval($_GPC["page"]));
    $psize = 15;
    $total = pdo_fetchcolumn("SELECT COUNT(*) FROM " . tablename("tiny_wmall_yinsihao_bind_list") . $condition, $params);
    $data = pdo_fetchall("SELECT * FROM " . tablename("tiny_wmall_yinsihao_bind_list") . $condition . " ORDER BY id DESC LIMIT " . ($pindex - 1) * $psize . "," . $psize, $params);
    $pager = pagination($total, $pindex, $psize);
} else {
    if ($op == "unbind") {
        $id = intval($_GPC["id"]);
        $status = yinsihao_unbind($id);
        if (is_error($status)) {
            imessage($status, "", "ajax");
        }
        imessage(error(0, '隐私号解绑成功'), "", 'ajax');
    }
}
include itemplate('bind');