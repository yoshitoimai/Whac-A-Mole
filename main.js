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
    enchant.Mole.prototype.behindHoleImage = core.assets['images/wack_a_mole_hole_1_a.png'];
    enchant.Mole.prototype.frontHoleImage = core.assets['images/wack_a_mole_hole_1_b.png'];

    //==========
    // ここから
    //==========

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

    // もぐら
    var marginLeft = 100;
    var marginTop = 120;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 3; j++) {
            var mole = new Mole(82,62);
            mole.image = core.assets['images/wack_a_mole_mole.png'];
            mole.x = 20 + i * marginLeft;
            mole.y = 130 + j * marginTop;
            scene.addChild(mole);
            mole.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
            mole.addEventListener(enchant.Event.TOUCH_START , function(e) {
                this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
                this.moleClear().moleDown(10);
                core.assets['sounds/hit.mp3'].play(true);
                scoreLabel.score += 1;
            });
            mole.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
                this.image = core.assets['images/wack_a_mole_mole.png'];
                this.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
            });
        }
    }

    //==========
    // ここまで
    //==========

    // タイム
    timeLabel = new Label('時間 : 30秒');
    timeLabel.x = 10;
    timeLabel.y = 10;
    timeLabel.color = 'white';
    timeLabel.score = 30;
    scene.addChild(timeLabel);
    //
    scene.tl.setTimeBased();
    scene.tl.delay(1000).then(function() {
        timeLabel.score -= 1;
        timeLabel.text = '時間 : ' + timeLabel.score + '秒';
        if (timeLabel.score == 0) {
            gameover = new Label('叩いたモグラの数：' + scoreLabel.score);
            gameover.font = "200% 'Lora'";
            gameover.textAlign = 'center';
            gameover.width = core.width;
            gameover.y = core.height / 2 - gameover._boundHeight / 2;
            gameover.color = 'white';
            scene.addChild(gameover);
            core.stop();
        }
    }).loop();

    // スコア
    scoreLabel = new Label('得点 : 0');
    scoreLabel.x = 10;
    scoreLabel.y = 30;
    scoreLabel.color = 'white';
    scoreLabel.score = 0;
    scene.addChild(scoreLabel);
    scoreLabel.addEventListener(Event.ENTER_FRAME, function() {
        scoreLabel.text = '得点 : ' + scoreLabel.score;
    });
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
enchant.ENV.USE_TOUCH_TO_START_SCENE = false;
window.onload = function() {
core = new Core(320, 480);
core.fps = 16;
core.preload(assets);
core.onload = function(){titleStart();};
core.start();
};
