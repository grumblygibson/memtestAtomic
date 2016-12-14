// This script is the main entry point of the game

var scene = Atomic.player.loadScene("Scenes/Scene.scene");

import mainMenu = require("../UI/MainMenu");
let input:Atomic.Input = Atomic.input;
mainMenu.init();
// called per frame, optional
export function update(timeStep) {
    // Handle update
    if (input.getKeyDown(Atomic.KEY_ESCAPE)) { Atomic.engine.exit(); }
}

let memNums:Array<number>;
let memVecs:Array<Array<number>>; // poor man's vector3
export function consumeMem(sizeBytes:number, useVectors:boolean):void {
    if (useVectors) {
        let arraySize:number = Math.floor(sizeBytes/16/3);
        memVecs = new Array<Array<number>>(arraySize);
        for (let i:number = 0; i<arraySize; i++) {
            memVecs[i] = new Array<number>(3);
            memVecs[i][0] = i;
            memVecs[i][1] = i;
            memVecs[i][2] = i;
        }
    } else {
        let arraySize:number = Math.floor(sizeBytes/16);
        memNums = new Array<number>(arraySize);
        for (let i:number = 0; i<arraySize; i++) {
            memNums[i] = i;
        }
    }

}
