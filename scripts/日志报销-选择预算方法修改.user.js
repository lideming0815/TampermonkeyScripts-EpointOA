// ==UserScript==
// @name         日志报销-选择预算方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/EpointCBM/Pages/BudgetInfo/NBudgetSelect/BudgetSelectDetail_List.aspx*|
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.returnValueDetail = function(Json, CanUsed) {
        console.log(parent);
        if (CanUsed == "0") {
            alert("该预算费用无可用金额，请变更预算金额或更换预算！");
            return;
        }
        if (CanUsed == "2") {
            alert("临时生产立项预算已超支，请先让商务发起临时立项追加预算流程！");
            return;
        }
        opener.afterSelectBudgetInfo(Json);
        window.close();
    }
})();