// Main
var assets = [
    // 背景
    'images/wack_a_mole_sky.png',
    'images/wack_a_mole_grass_bg_1.png',
    'images/wack_a_mole_grass_bg_2.png',
    'images/wack_a_mole_grass_bg_3.png',
    // 穴
    'images/wack_a_mole_hole_1_a.png',
    'images/wack_a_mole_hole_1_b.png',
    'images/wack_a_mole_hole_2_a.png',
    'images/wack_a_mole_hole_2_b.png',
    'images/wack_a_mole_hole_3_a.png',
    'images/wack_a_mole_hole_3_b.png',
    // もぐら
    'images/wack_a_mole_mole.png',
    // 草
    'images/wack_a_mole_grass_patch_1.png',
    'images/wack_a_mole_grass_patch_2.png',
    'images/wack_a_mole_grass_patch_3.png',
    // 花
    'images/wack_a_mole_flower.png',
    'images/wack_a_mole_flowers_1.png',
    'images/wack_a_mole_flowers_2.png',
    // エフェクト
    'images/wack_a_mole_effect_ouch.png',
    'images/wack_a_mole_hit_effect.png',
    'images/wack_a_mole_mole_hit_1.png',
    'images/wack_a_mole_mole_hit_2.png',
    // サウンド
    'sounds/hit.mp3'
];

function gameStart(){// ゲーム画面
    var scene = new Scene();
    core.replaceScene(scene); core.resume();

    // 背景
    var background = new Sprite(320, 480);
    background.image = core.assets['images/wack_a_mole_sky.png'];
    background.x = 0;
    background.y = 0;
    scene.addChild(background);
    var background1 = new Sprite(320, 480);
    background1.image = core.assets['images/wack_a_mole_grass_bg_1.png'];
    background1.x = 0;
    background1.y = 0;
    scene.addChild(background1);

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
