
// Atomic Script

//'use strict';

import main = require("../Scripts/main");

// var game = Atomic.game;
let view = new Atomic.UIView();
let UI = new Atomic.UI;
let UIWindow = Atomic.UIWindow;
let scene = Atomic.player.getCurrentScene();

let window:Atomic.UIWindow;

function closeWindow() {
    if (window)
        window.die();
    window = null;
}

function closeMenuAndHideMouse():void {
    closeWindow();
    if ( Atomic.input.isMouseVisible() ) Atomic.input.setMouseVisible(false);
    //window.setState(Atomic.UI_WIDGET_STATE_DISABLED, true);
}

export function init() {
    window = new UIWindow();
    window.text = "Memory Test";
    window.load("UI/mainMenu.ui.txt");
    window.resizeToFitContent();
    view.addChild(window);
    window.center();    

    (window.getWidget("new_2_numbers") as Atomic.UIButton).onClick = function new2numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(2*1024*1024,false);
    };

    (window.getWidget("new_200_numbers") as Atomic.UIButton).onClick = function new200numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(200*1024*1024,false);
    };

    (window.getWidget("new_500_numbers") as Atomic.UIButton).onClick = function new500numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(500*1024*1024,false);
    };

    (window.getWidget("new_1000_numbers") as Atomic.UIButton).onClick = function new1000numbers() {
        closeMenuAndHideMouse();
        main.consumeMem(1000*1024*1024,false);
    };

    (window.getWidget("new_2_vectors") as Atomic.UIButton).onClick = function new2vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(2*1024*1024,false);
    };

    (window.getWidget("new_200_vectors") as Atomic.UIButton).onClick = function new200vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(200*1024*1024,false);
    };

    (window.getWidget("new_500_vectors") as Atomic.UIButton).onClick = function new500vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(500*1024*1024,false);
    };

    (window.getWidget("new_1000_vectors") as Atomic.UIButton).onClick = function new1000vectors() {
        closeMenuAndHideMouse();
        main.consumeMem(1000*1024*1024,false);
    };

    (window.getWidget("quit") as Atomic.UIButton).onClick = function quitClick() {
        Atomic.engine.exit();
    };

};

export function shutdown() {
  closeWindow();
};