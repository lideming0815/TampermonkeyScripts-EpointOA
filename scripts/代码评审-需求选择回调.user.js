// ==UserScript==
// @name         代码评审-需求选择回调
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/Epoint_JiXiaoKaoHe/JX_KaoHe_System/CodeJudge/ProjectCodeJudge_*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.afterSelectStory = function(rtnValue){
        if (rtnValue != null ) {
            var ss = rtnValue.split("●");
            document.getElementById("ctl00_cphContent_StoryGuids_850").value += ss[1] + ';';
            document.getElementById("ctl00_cphContent_StoryName_850").value += ss[0] + ';';
        }
    }
})();