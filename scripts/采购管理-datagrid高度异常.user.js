// ==UserScript==
// @name         采购管理-datagrid高度异常
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/AssetManage/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement("style");
    style.type = "text/css";
    var text = document.createTextNode(".tbgrid{height: 100%!important;");
    style.appendChild(text);
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
    // Your code here...
})();