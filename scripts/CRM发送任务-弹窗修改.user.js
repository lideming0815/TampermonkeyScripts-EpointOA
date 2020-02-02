// ==UserScript==
// @name         CRM发送任务-弹窗修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/NMissionManage/Record_Add.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //选择预算
    window.SelectBudgetInfo = function() {
        var rtnValue;
        var Person = $("[id$='FinishPersonGuid_61']").val();
        if (Person != "")//已选择接收人
        {
            if (!confirm("重新选择预算将删除已选择的预算接收人，确认删除？")) {
                return false;
            }
            else {
                $("[id$='dvWarning']").html("");
                $("[id$='txtSplit']").val("");
                $("[id$='txtBudgetName']").val("");
                $("[id$='txtBudgetGuid']").val("");
                $("[id$='FinishPersonGuid_61']").val("");
                $("[id$='FinishPersonName_61']").val("");
                $("[id$='btnAddBudgetTD']").click();
            }
        }
        //var url = '../Pages/BudgetInfo/BudgetSelect/BudgetSelect_List.aspx';
        var url = 'https://oa.epoint.com.cn/EpointCBM' + '/Pages/BudgetInfo/NBudgetSelect/BudgetSelect_List.aspx';
        rtnValue = OpenDialogArgs(url, '', '1000', '500');
    }

    window.afterSelectBudgetInfo = function(rtnValue) {
        if (rtnValue != null) {
            var json = eval('(' + rtnValue + ')');
            //$("[id$='txtContactName']").val(json.BudgetName);
            $("[id$='txtBudgetName']").val(json.BudgetName);
            $("[id$='txtCostName']").val(json.BudgetName);
            $("[id$='txtBudgetForm']").val(json.BudgetForm);
            $("[id$='txtBudgetGuid']").val(json.BudgetGuid);
            $("[id$='txtBudgetTotal']").text(json.Total);
            $("[id$='txtFreezeMoney']").text(json.FreezeMoney);
            $("[id$='txtBusinessProjectGuid']").val(json.BusinessProjectGuid);
            $("[id$='txtPBudgetGuid']").val(json.PBudgetGuid);
            $("[id$='txtProjectGuid']").val(json.ProjectGuid);
            $("[id$='txtProjectName']").val(json.ProjectName);
            $("[id$='txtGrantType']").val(json.GrantType);
            var yue = json.RemainMoney;
            if (parseFloat(yue) < 0) {
                $("[id$='txtRemainMoney']").text(0);
            }
            else {
                $("[id$='txtRemainMoney']").text(json.RemainMoney);
            }
            $("[id$='btnAddBudgetTD']").click();
        }
    }

    window.BindTable = function() {
        var IsMonth = $("[id$='IsByMonth_61']").attr("checked");
        var BudgetGuid = $("[id$='txtBudgetGuid']").val();
        if (IsMonth!="checked"&&(BudgetGuid == null || BudgetGuid == "")) {
            alert("请先选择预算");
            return false;
        }
        var url = 'https://oa.epoint.com.cn/ProjectManage/pages/NDlgUser/UserSelect_Frame.aspx';
        var arReturn = new Array();
        var oldUserNames = $("[id$='FinishPersonName_61']").val();
        var oldUserGuids = $("[id$='FinishPersonGuid_61']").val();
        arReturn[0] = oldUserGuids;
        arReturn[1] = oldUserNames;
        arReturn = OpenDialogArgs(url, arReturn, '620', '660');
    }

    window.afterRtnSelValue = function(arReturn) {
        var oldUserGuids = $("[id$='FinishPersonGuid_61']").val();
        if (arReturn != null) {
            var UserGuids = arReturn[0];
            $("[id$='FinishPersonGuid_61']").val(arReturn[0]);
            $("[id$='FinishPersonName_61']").val(arReturn[1]);
            BindRec(arReturn[0], arReturn[1], oldUserGuids);
        }
        else {
            $("[id$='FinishPersonGuid_61']").val("");
            $("[id$='FinishPersonName_61']").val("");
        }

    }
    // Your code here...
})();