<?php

defined('IN_IA') or exit('Access Denied');
mload()->model('activity');
global $_W;
global $_GPC;
$ta = trim($_GPC["ta"]) ? trim($_GPC["ta"]) : "list";
if ($ta == "list") {
    $_W["page"]["title"] = "门店会员卡等级列表";
    pload()->model('kabao');
    $groups = kabao_get_store_groups($sid);
} else {
    if ($ta == "post") {
        $_W["page"]["title"] = "编辑门店会员卡等级";
        $id = intval($_GPC["id"]);
        if ($_W["ispost"]) {
            $group = array("title" => trim($_GPC["title"]), "condition" => floatval($_GPC["condition"]), "give_credit1" => intval($_GPC["give_credit1"]), "credit1_exchage_coupon" => intval($_GPC["credit1_exchage_coupon"]), "free_delivery_fee" => intval($_GPC["free_delivery_fee"]), "vip_goods" => intval($_GPC["vip_goods"]));
            if (empty($group["title"])) {
                imessage(error(-1, "会员等级名称"), "", "ajax");
            }
            if ($group["condition"] < 0) {
                imessage(error(-1, "会员升级条件需大于或等于零"), "", "ajax");
            }
            $is_exist = pdo_fetch("select id, title, `condition` from " . tablename("tiny_wmall_kabao_group") . " where uniacid = :uniacid and sid = :sid and `condition` = :condition and id != :id", array(":uniacid" => $_W["uniacid"], ":sid" => $sid, ":condition" => $group["condition"], ":id" => $id));
            if (!empty($is_exist)) {
                imessage(error(-1, "升级条件与" . $is_exist["title"] . "的升级条件相同"), "", "ajax");
            }
            if (0 < $id) {
                pdo_update("tiny_wmall_kabao_group", $group, array("uniacid" => $_W["uniacid"], "id" => $id));
            } else {
                $group["uniacid"] = $_W["uniacid"];
                $group["addtime"] = TIMESTAMP;
                $group["sid"] = $sid;
                pdo_insert('tiny_wmall_kabao_group', $group);
            }
            imessage(error(0, '会员等级设置成功'), iurl('store/kabao/group/list'), 'ajax');
        }
        $group = pdo_get("tiny_wmall_kabao_group", array("uniacid" => $_W["uniacid"], "id" => $id));
    } else {
        if ($ta == "update") {
            $_W["page"]["title"] = "编辑门店会员卡等级";
            $id = intval($_GPC["id"]);
            $key = trim($_GPC["key"]);
            $value = intval($_GPC[$key]);
            pdo_update('tiny_wmall_kabao_group', array($key => $value), array("uniacid" => $_W["uniacid"], "sid" => $sid, "id" => $id));
            imessage(error(0, '状态变更成功'), "", 'ajax');
        } else {
            if ($ta == "delete") {
                $_W["page"]["title"] = "编辑门店会员卡等级";
                $id = intval($_GPC["id"]);
                pdo_delete('tiny_wmall_kabao_group', array('uniacid' => $_W["uniacid"], "id" => $id));
                imessage(error(0, '会员等级删除成功'), iurl('store/kabao/group/list'), 'ajax');
            } else {
                if ($ta == "updateAll") {
                    $members = pdo_fetchall("select * from " . tablename("tiny_wmall_kabao_vip") . " where uniacid = :uniacid and sid = :sid", array(":uniacid" => $_W["uniacid"], ":sid" => $sid));
                    if (!empty($members)) {
                        pload()->model("kabao");
                        $groups = kabao_get_store_groups($sid);
                        foreach ($members as $member) {
                            $default = kabao_get_member_group($groups, $member["credit1_total"]);
                            $update = array();
                            if ($member["group_id"] != $default["id"]) {
                                $update["group_id"] = $default["id"];
                            }
                            if ($member["group_title"] != $default["title"]) {
                                $update["group_title"] = $default["title"];
                            }
                            if (!empty($update)) {
                                pdo_update("tiny_wmall_kabao_vip", $update, array("id" => $member["id"]));
                            }
                        }
                    }
                    imessage(error(0, '会员信息更新成功'), "", 'ajax');
                }
            }
        }
    }
}
include itemplate('store/kabao/group');