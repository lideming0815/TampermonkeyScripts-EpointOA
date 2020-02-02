// ==UserScript==
// @name         CRM预算下拨-人员选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/EpointCBM/Pages/Split.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.afterSelectFinishPerson = function(rtnValue) {
        document.getElementById("ctl00_ContentPlaceHolder1_txtRecipientGuid").value = rtnValue[0];
        document.getElementById("ctl00_ContentPlaceHolder1_txtRecipientName").value = rtnValue[1];
        document.getElementById("ctl00_ContentPlaceHolder1_txtRcptGroupGuid").value = rtnValue[2];
        document.getElementById("ctl00_ContentPlaceHolder1_txtRcptGroupName").value = rtnValue[3];
        document.getElementById("ctl00_ContentPlaceHolder1_txtRcptDeptGuid").value = rtnValue[4];
        document.getElementById("ctl00_ContentPlaceHolder1_txtRcptDeptName").value = rtnValue[5];
        if (rtnValue[0] == '' || rtnValue[0] == null) {
            document.getElementById("ctl00_ContentPlaceHolder1_txtRecipient").value = rtnValue[3];
        }
        else {
            document.getElementById("ctl00_ContentPlaceHolder1_txtRecipient").value = rtnValue[1];
            $("[id$='huminfo']").css("display", "block");
            BindStuffInfo(rtnValue[0]);
        }

    }

    window.SelectFinishPerson = function() {
        var rtnValue;
        var url;
        url = "/EpointCBM/Pages/NDlgUser/NUserTree_Group.aspx";
        rtnValue = OpenDialogArgs(url, '', '260', '400');
    }

    window.SelectBudgetInfo = function () {

        var rtnValue;
        var url;
        var ParentOUGuid;
        var UserArray = new Array(2);
        url = "/EpointCBM/Pages/BudgetInfo/NBudgetSelect/BudgetSelect_List.aspx";
        rtnValue = OpenDialogArgs(url, '', '1000', '600');
    }

    window.afterSelectBudgetInfo = function (rtnValue) {
        var json = $.parseJSON(rtnValue);
        var yue = json.RemainMoney;
        $("[id$='txtBudgetName']").val(json.BudgetName);
        $("[id$='txtBudgetTotal']").text(json.Total);
        $("[id$='txtBudgetGuid']").val(json.BudgetGuid);
        $("[id$='txtIsTopBudget']").val(json.PBudgetGuid);
        $("[id$='txtBudgetForm']").val(json.BudgetForm);
        //            $("[id$='txtGrantType']").val(json.GrantType);
        //            $("[id$='txtBudgetType']").val(json.BudgetType);
        //            $("[id$='txtBusinessProjectGuid']").val(json.BusinessProjectGuid);
        $("[id$='txtProjectGuid']").val(json.ProjectGuid);
        $("[id$='txtProjectName']").val(json.ProjectName);
        $("[id$='lblShowDetail']").html("<a href='BudgetInfo/Record_Detail.aspx?RowGuid=" + json.BudgetGuid + "' target='_blank'>" + "[总:" + json.Total + ",余:" + json.RemainMoney + "]</a>");
        $("[id$='lblProjectName']").html("<a href='https://oa.epoint.com.cn/ProjectManage/Default.aspx?ProjectGuid=" + json.ProjectGuid + "' target='_blank'>" + json.ProjectName + "</a>");
        if (parseFloat(yue) < 0) {
            $("[id$='txtRemainMoney']").text(0);
            $("[id$='txtSplit']").val(0);
            $("[id$='lblSplitUse']").text(0);
        }
        else {
            $("[id$='txtRemainMoney']").text(json.RemainMoney);
            $("[id$='txtSplit']").val(0);
            $("[id$='lblSplitUse']").text(0);
        }
        $("[id$='btnRefresh']").click();
    }
    // Your code here...
})();