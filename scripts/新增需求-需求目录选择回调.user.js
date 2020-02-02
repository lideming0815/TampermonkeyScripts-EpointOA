// ==UserScript==
// @name         新增需求-需求目录选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/ProjectStory/Nstory/NStory_Add.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.afterOpenWinUrl = function(returnValue){
        $("[id$='txtModuleGuid']").val(returnValue);
        HidBtnClick();
    };
})();