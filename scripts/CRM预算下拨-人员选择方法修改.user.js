// ==UserScript==
// @name         CRM预算下拨-人员选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/EpointCBM/Pages/NDlgUser/NUserTree_Group.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.SetPValue = function(check, userGuid, userName, groupGuid, groupName,ouGuid,ouName) {
        var UserArray = new Array();
        UserArray[0] = userGuid;
        UserArray[1] = userName;
        UserArray[2] = groupGuid;
        UserArray[3] = groupName;
        UserArray[4] = ouGuid;
        UserArray[5] = ouName;

        opener.afterSelectFinishPerson(UserArray);
        window.close();
    }
    // Your code here...
})();