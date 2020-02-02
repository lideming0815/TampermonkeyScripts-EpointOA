// ==UserScript==
// @name         预算分配-小组选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/FenPeiBZ/FenPeiXM_Edit.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.SelectRcpt = function (type) {
        window.teamType = type;
        var ProjectGuid = $("[id$='lblProjectGuid']").text();
        var IsSoftWare = $("[id$='txtIsSoftWare']").val();
        var BudgetGuid = $("[id$='lblBudgetGuid']").text();
        var txtName = null;
        var txtGuid = null;
        var btnID = null;
        switch (type) {
            case '01':
                txtName = $("[id$='txtKFGroups']");
                txtGuid = $("[id$='txtKFGroupsGuid']");
                btnID = $("[id$='btnRefreshKF']")
                break;
            case '02':
                txtName = $("[id$='txtSSGroups']");
                txtGuid = $("[id$='txtSSGroupsGuid']");
                btnID = $("[id$='btnRefreshSS']")
                break
            case '03':
                txtName = $("[id$='txtCSGroups']");
                txtGuid = $("[id$='txtCSGroupsGuid']");
                btnID = $("[id$='btnRefreshCS']")
                break
            case '05':
                txtName = $("[id$='txtMJCSGroups']");
                txtGuid = $("[id$='txtMJCSGroupsGuid']");
                btnID = $("[id$='btnRefreshMJCS']")
                break
            default:
                break;
        }

        var url = "../Pages/GroupUser/ProjectGroup_Frame.aspx?ProjectGuid=" + ProjectGuid + "&FromType=" + type + "&IsSoftWare=" + IsSoftWare + "&BudgetGuid=" + BudgetGuid;
        var arReturn = new Array();
        arReturn[0] = txtGuid.val();
        arReturn[1] = txtName.val();
        OpenDialogArgs(url, arReturn, '600', '500');
    }

    window.afterSelectRcpt = function(arReturn){
        var txtName = null;
        var txtGuid = null;
        var btnID = null;
        switch (window.teamType) {
            case '01':
                txtName = $("[id$='txtKFGroups']");
                txtGuid = $("[id$='txtKFGroupsGuid']");
                btnID = $("[id$='btnRefreshKF']")
                break;
            case '02':
                txtName = $("[id$='txtSSGroups']");
                txtGuid = $("[id$='txtSSGroupsGuid']");
                btnID = $("[id$='btnRefreshSS']")
                break
            case '03':
                txtName = $("[id$='txtCSGroups']");
                txtGuid = $("[id$='txtCSGroupsGuid']");
                btnID = $("[id$='btnRefreshCS']")
                break
            case '05':
                txtName = $("[id$='txtMJCSGroups']");
                txtGuid = $("[id$='txtMJCSGroupsGuid']");
                btnID = $("[id$='btnRefreshMJCS']")
                break
            default:
                break;
        }
        if (arReturn != null && arReturn.length != 0) {
            if (arReturn[1] != "" && arReturn[1] != null) {
                txtName.val(arReturn[1]);
                txtGuid.val(arReturn[0]);
            }
            else {
                txtName.val("");
                txtGuid.val("");
            }
        }
        btnID.click();
    }
})();