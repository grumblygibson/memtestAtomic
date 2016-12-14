// Atomic Script
"use strict";
//'use strict';
var main = require("../Scripts/main");
// var game = Atomic.game;
var view = new Atomic.UIView();
var UI = new Atomic.UI;
var UIWindow = Atomic.UIWindow;
var scene = Atomic.player.getCurrentScene();
var window;
function closeWindow() {
    if (window)
        window.die();
    window = null;
}
function closeMenuAndHideMouse() {
    closeWindow();
    if (Atomic.input.isMouseVisible())
        Atomic.input.setMouseVisible(false);
    //window.setState(Atomic.UI_WIDGET_STATE_DISABLED, true);
}
function init() {
    window = new UIWindow();
    window.text = "Memory Test";
    window.load("UI/mainMenu.ui.txt");
    window.resizeToFitContent();
    view.addChild(window);
    window.center();
    window.getWidget("new_2_numbers").onClick = function new2numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(2 * 1024 * 1024, false);
    };
    window.getWidget("new_200_numbers").onClick = function new200numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(200 * 1024 * 1024, false);
    };
    window.getWidget("new_500_numbers").onClick = function new500numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(500 * 1024 * 1024, false);
    };
    window.getWidget("new_1000_numbers").onClick = function new1000numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(1000 * 1024 * 1024, false);
    };
    window.getWidget("new_2_vectors").onClick = function new2vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(2 * 1024 * 1024, false);
    };
    window.getWidget("new_200_vectors").onClick = function new200vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(200 * 1024 * 1024, false);
    };
    window.getWidget("new_500_vectors").onClick = function new500vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(500 * 1024 * 1024, false);
    };
    window.getWidget("new_1000_vectors").onClick = function new1000vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(1000 * 1024 * 1024, false);
    };
    window.getWidget("quit").onClick = function quitClick() {
        Atomic.engine.exit();
    };
}
exports.init = init;
;
function shutdown() {
    closeWindow();
}
exports.shutdown = shutdown;
;
