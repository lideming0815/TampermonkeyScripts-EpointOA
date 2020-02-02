// ==UserScript==
// @name         出差申请-项目选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/ProjectManage/BusinessTrip/Record_Workflow.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.afterSelectXM = function(rtnValue){
        if (rtnValue != null) {
            var ss = rtnValue.split("/");
            $("[id$=ProjectGuid_100563]").val(ss[1]);
            $("[id$=ProjectName_100563]").val(ss[0]);
            $("[id$=btnUpdateProject]").click();
        }
    }
})();