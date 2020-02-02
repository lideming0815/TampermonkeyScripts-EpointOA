// ==UserScript==
// @name         新增需求-需求目录选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/ProjectStory/Nstory/NStory_ModelChange.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.UpdateStory = function() {
        var moduleGuid = $("[id$='txtModuleGuid']").val();
        if (moduleGuid == '' || moduleGuid == null) {
            alert('请选择需求目录！');
            return;
        }
        opener.afterOpenWinUrl(moduleGuid);
        window.close();
    }
})();