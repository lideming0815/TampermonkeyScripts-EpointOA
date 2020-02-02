// ==UserScript==
// @name         CRM预算下拨-预算选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/EpointCBM/Pages/BudgetInfo/NBudgetSelect/BudgetSelect_List.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window. retrunValue=function(BudgetGuid, BudgetName, BudgetForm, Total, TotalA, TotalD,
                                  RemainMoney, FreezeMoney, PBudgetGuid,
                                  GrantType, ProjectGuid, ProjectName, BudgetType, BusinessProjectGuid) {
        var json = {
            'BudgetGuid': BudgetGuid, 'BudgetName': BudgetName, 'BudgetForm': BudgetForm,
            'Total': Total, 'TotalA': TotalA, 'TotalD': TotalD,
            'RemainMoney': RemainMoney, 'FreezeMoney': FreezeMoney,
            'PBudgetGuid': PBudgetGuid, 'GrantType': GrantType,
            "ProjectGuid": ProjectGuid, "ProjectName": ProjectName,
            "BudgetType": BudgetType, "BusinessProjectGuid": BusinessProjectGuid
        };
        opener.afterSelectBudgetInfo(JSON.stringify(json));
        window.close();
    }
    // Your code here...
})();