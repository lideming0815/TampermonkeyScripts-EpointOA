// ==UserScript==
// @name         流程处理页面-关闭父页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/*/EpointWorkflow/Pages/Client/CommonOperationHandle*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.rtnValue_without_IFrame = function(value){
        if(value==='Success'){
            opener.CloseMe();
        }
        window.close();
    }
})();