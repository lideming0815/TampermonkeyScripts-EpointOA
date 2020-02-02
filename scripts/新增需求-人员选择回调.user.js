// ==UserScript==
// @name         新增需求-人员选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/ProjectStory/Nstory/NStory_Add.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.afterSelUser = function(rtnValue){
        if (rtnValue != null) {
            $("[id$='txtFinishPersonGuid']").val(rtnValue[0]);
            $("[id$='txtFinishPerson']").val(rtnValue[1]);
        }
    }
    // Your code here...
})();