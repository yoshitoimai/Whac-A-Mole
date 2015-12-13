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
    'images/mole_1.png',
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

    // もぐら１
    var mole1 = new Mole(82,62);
    mole1.image = core.assets['images/wack_a_mole_mole.png'];
    mole1.x = 20;
    mole1.y = 130;
    scene.addChild(mole1);
    mole1.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole1.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    var disp = true;
    mole1.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        var rdm = getRandom(1, 2);
        if (rdm == 1 && disp == true) {
            this.image = core.assets['images/mole_1.png'];
            disp = false;
        } else {
            mole1.image = core.assets['images/wack_a_mole_mole.png'];
        }
        mole1.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら２
    var mole2 = new Mole(82,62);
    mole2.image = core.assets['images/wack_a_mole_mole.png'];
    mole2.x = 120;
    mole2.y = 130;
    scene.addChild(mole2);
    mole2.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole2.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole2.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole2.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら３
    var mole3 = new Mole(82,62);
    mole3.image = core.assets['images/wack_a_mole_mole.png'];
    mole3.x = 220;
    mole3.y = 130;
    scene.addChild(mole3);
    mole3.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole3.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole3.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole3.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら４
    var mole4 = new Mole(82,62);
    mole4.x = 20;
    mole4.y = 250;
    scene.addChild(mole4);
    mole4.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole4.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole4.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole4.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら５
    var mole5 = new Mole(82,62);
    mole5.x = 120;
    mole5.y = 250;
    scene.addChild(mole5);
    mole5.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole5.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole5.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole5.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら６
    var mole6 = new Mole(82,62);
    mole6.x = 220;
    mole6.y = 250;
    scene.addChild(mole6);
    mole6.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole6.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole6.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole6.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら７
    var mole7 = new Mole(82,62);
    mole7.x = 20;
    mole7.y = 370;
    scene.addChild(mole7);
    mole7.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole7.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole7.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole7.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら８
    var mole8 = new Mole(82,62);
    mole8.x = 120;
    mole8.y = 370;
    scene.addChild(mole8);
    mole8.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole8.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole8.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole8.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

    // もぐら９
    var mole9 = new Mole(82,62);
    mole9.x = 220;
    mole9.y = 370;
    scene.addChild(mole9);
    mole9.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    mole9.addEventListener(enchant.Event.TOUCH_START , function(e) {
        this.image = core.assets['images/wack_a_mole_mole_hit_1.png'];
        this.moleClear().moleDown(10);
        core.assets['sounds/hit.mp3'].play(true);
        scoreLabel.score += 1;
    });
    mole9.addEventListener(enchant.Event.MOLE_DOWN_END , function(e) {
        this.image = core.assets['images/wack_a_mole_mole.png'];
        mole9.moleWait(getRandom(5, 30)).moleUp(getRandom(5, 25)).moleWait(getRandom(0, 10)).moleDown(getRandom(5, 25));
    });

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
window.onload = function() {
core = new Core(320, 480);
core.fps = 16;
core.preload(assets);
core.onload = function(){titleStart();};
core.start();
};
