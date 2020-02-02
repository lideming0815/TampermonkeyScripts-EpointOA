// ==UserScript==
// @name         出差申请-项目选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/ProjectInfo/ProjectSelect.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.retrunValue = function(ProjectName, ProjectGuid, KeHuDW, DiQu, DiQuValue) {
        ProjectName = ProjectName.replace(new RegExp('&apos;', "gm"), '\'');
        opener.afterSelectXM(ProjectName + "/" + ProjectGuid + "/" + KeHuDW + "/" + DiQu + "/" + DiQuValue);
        window.close();
    }
})();