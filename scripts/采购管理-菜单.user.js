// ==UserScript==
// @name         采购管理-菜单
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://oa.epoint.com.cn/AssetManage/Default.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function () {
        //布局初始化
        //layout
        layout = $("#mainbody").ligerLayout({ height: '100%', heightDiff: -1, leftWidth: 180, onHeightChanged: f_heightChanged, minLeftWidth: 120 });
        var bodyHeight = $(".l-layout-center:first").height();
        //Tab
        tab = $("#framecenter").ligerTab({ height: bodyHeight, contextmenu: true });

        var mainmenu = $("#mainmenu");
        var UserGuid = $("[id$='txtHUserGuid']").val();
        var OuGuid = $("[id$='txtHOuGuid']").val();
        var arrparentCode = new Array(); //menu数组
        $.ajax({
            type : 'get',
            url : "getmodule.ashx?view=MyMenus&puserguid=" + UserGuid + "&pouguid=" + OuGuid,
            contentType : 'application/json',
            success : function(menus) {
                menus = menus.replace(/{\"id\":/g, "{\"id\":\"").replace(/,\"ModuleCode\"/g, "\",\"ModuleCode\"");
                console.log(menus);
                $($.parseJSON(menus)).each(function (i, menu) {
                    var item = $('<div title="' + menu.MenuName + '"><ul id="tree' + menu.ModuleCode + '" style="margin-top:3px;"></ul></div>');
                    arrparentCode.push(menu.ModuleCode); //插入数组
                    mainmenu.append(item);
                });
                //Accordion
                accordion = $("#mainmenu").ligerAccordion({ height: bodyHeight - 24, speed: null });
                //生成树
                for (var j = 0; j < arrparentCode.length; j++) {
                    $("#tree" + arrparentCode[j]).ligerTree({
                        url: "getModule.ashx?" + $.param({ ParentModuleCode: arrparentCode[j], puserguid: UserGuid, pouguid: OuGuid, view: "leftTree" }),
                        checkbox: false,
                        onClick: function (node) {
                            //                            if (!node.data.url) return;
                            //                            var tabid = $(node.target).attr("tabid");
                            //                            if (!tabid) {
                            //                                tabid = new Date().getTime();
                            //                                $(node.target).attr("tabid", tabid)
                            //                            }
                            var tabid = $(node.target).attr("tabid");
                            if (!tabid) {
                                tabid = new Date().getTime();
                                $(node.target).attr("tabid", tabid);
                            }
                            tab.reload(tabid);
                            f_addTab(tabid, node.data.text, node.data.url);
                        }
                    });
                }

                $("#pageloading").hide();
            }
        });
        $.getJSON("getmodule.ashx?view=MyMenus&puserguid=" + UserGuid + "&pouguid=" + OuGuid, function (menus) {

        });

    });
    // Your code here...
})();