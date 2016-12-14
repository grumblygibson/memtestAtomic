// This script is the main entry point of the game
"use strict";
var scene = Atomic.player.loadScene("Scenes/Scene.scene");
var mainMenu = require("../UI/MainMenu");
var input = Atomic.input;
mainMenu.init();
// called per frame, optional
function update(timeStep) {
    // Handle update
    if (input.getKeyDown(Atomic.KEY_ESCAPE)) {
        Atomic.engine.exit();
    }
}
exports.update = update;
var memNums;
var memVecs; // poor man's vector3
function consumeMem(sizeBytes, useVectors) {
    if (useVectors) {
        var arraySize = Math.floor(sizeBytes / 16 / 3);
        memVecs = new Array(arraySize);
        for (var i = 0; i < arraySize; i++) {
            memVecs[i] = new Array(3);
            memVecs[i][0] = i;
            memVecs[i][1] = i;
            memVecs[i][2] = i;
        }
    }
    else {
        var arraySize = Math.floor(sizeBytes / 16);
        memNums = new Array(arraySize);
        for (var i = 0; i < arraySize; i++) {
            memNums[i] = i;
        }
    }
}
exports.consumeMem = consumeMem;
