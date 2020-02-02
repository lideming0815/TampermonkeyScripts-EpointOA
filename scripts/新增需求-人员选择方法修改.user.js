// ==UserScript==
// @name         新增需求-人员选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/pages/UserManage/SelectProjectUsersV2.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.AutoSetPValue = function(check, userGuid, userName) {
        var UserArray = new Array(4);
        UserArray[0] = userGuid;
        UserArray[1] = userName;
        opener.afterSelUser(UserArray);
        window.close();
    }
    })();