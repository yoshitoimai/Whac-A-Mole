// Main
var assets = [
];

function gameStart(){// ゲーム画面
    var scene = new Scene();
    core.replaceScene(scene); core.resume();

    //==========
    // ここから
    //==========


    //==========
    // ここまで
    //==========

}

function getRandom(start, end) {
    return start + Math.floor( Math.random() * (end - start + 1));
}

function titleStart(){// タイトル画面
    var scene = new Scene();
    scene.backgroundColor = 'black';
    core.replaceScene(scene); core.pause();
    label = new Label('TOUCH START');
    label.font = "200% 'Lora'";
    label.textAlign = 'center';
    label.width = core.width;
    label.y = core.height / 2 - label._boundHeight / 2;
    label.color = 'white';
    scene.addChild(label);
    scene.on(enchant.Event.TOUCH_START, function(){gameStart();});
}

//==========
// EnchantJS
var core;
enchant();
window.onload = function() {
core = new Core(320, 480);
core.fps = 16;
core.preload(assets);
core.onload = function(){titleStart();};
core.start();
};
