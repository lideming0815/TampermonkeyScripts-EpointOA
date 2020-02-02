// ==UserScript==
// @name         CRM发送任务-人员选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/pages/NDlgUser/UserSelect_Frame.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.rtnSelValue = function() {
        var rtnValue = new Array();
        var options = document.all("ListReceiverName").options;
        var userGuidLst = "";
        var userNameLst = "";
        for (var i = 0; i < options.length; i++) {
            userGuidLst += options[i].value + ";";
            userNameLst += options[i].text + ";";
        }
        rtnValue[0] = userGuidLst;
        rtnValue[1] = userNameLst;
        opener.afterRtnSelValue(rtnValue);
        window.close();
    }
    // Your code here...
})();