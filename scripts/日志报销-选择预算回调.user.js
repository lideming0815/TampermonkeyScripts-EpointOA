// ==UserScript==
// @name         日志报销-选择预算回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/DailyRecord/DailyRecordAddV2/NGZRZ_Fee.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.afterSelectBudgetInfo = function(rtnValue){
        if (rtnValue != null) {
            var json = eval('(' + rtnValue + ')');
            $("[id$='BudgetName_1015']").val(json.BudgetName);
            $("[id$='BudgetGuid_1015']").val(json.BudgetGuid);
            $("[id$='BudgetProjectGuid_1015']").val(json.ProjectGuid);
            $("[id$='BudgetGrantGuid_1015']").val(json.GrantGuid);
            $("[id$='BudgetDetailGuid_1015']").val(json.BudgetDetailGuid);
            $("[id$='CCGuid_1015']").val(json.CCGuid);
            $("[id$=btnLease]").click();
        }
    }
})();