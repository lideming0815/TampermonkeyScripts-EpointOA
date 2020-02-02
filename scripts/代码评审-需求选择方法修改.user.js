// ==UserScript==
// @name         代码评审-需求选择方法修改
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/Epoint_JiXiaoKaoHe/JX_KaoHe_System/ProjectInfo/NStory_Select.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.UpdateStory= function() {
        var StoryGuids = "";
        StoryGuids = GetDPSStory();
        opener.afterSelectStory(StoryGuids);
        window.close();
    }
    // Your code here...
})();