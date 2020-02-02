// ==UserScript==
// @name         预算分配-小组选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/Pages/GroupUser/ProjectGroup_Frame.aspx*
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
            opener.afterSelectRcpt(rtnValue);
            window.close();
        }

})();