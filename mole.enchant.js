enchant.Event = enchant.Event || {};
enchant.Event.MOLE_UP_START = 'moleupstart';
enchant.Event.MOLE_UP_END = 'moleupend';
enchant.Event.MOLE_DOWN_START = 'moledownstart';
enchant.Event.MOLE_DOWN_END = 'moledownend';

enchant.Mole = enchant.Class.create(enchant.Group, {
    initialize: function(width, height){
        enchant.Group.call(this);
        this.touchEnabled = false;
        this.behindHoleImage = this.behindHoleImage || null;
        this.frontHoleImage = this.frontHoleImage || null;
        // 穴
        this._behindHole = new Sprite(82, 28);
        this._behindHole.image = this.behindHoleImage;
        this._behindHole.x = 0;
        this._behindHole.y = 45;
        this.addChild(this._behindHole);
        this._behindHole.touchEnabled = false;
        // もぐら
        this._mole = new _Mole(50, 62);
        this._mole.x = 18;
        this._mole.y = 0;
        this.addChild(this._mole);
        this._mole.addEventListener(enchant.Event.MOLE_UP_START, function(e) {this.parentNode.dispatchEvent(e);});
        this._mole.addEventListener(enchant.Event.MOLE_UP_END, function(e) {this.parentNode.dispatchEvent(e);});
        this._mole.addEventListener(enchant.Event.MOLE_DOWN_START, function(e) {this.parentNode.dispatchEvent(e);});
        this._mole.addEventListener(enchant.Event.MOLE_DOWN_END, function(e) {this.parentNode.dispatchEvent(e);});
        // 穴
        this._frontHole = new Sprite(82, 28);
        this._frontHole.image = this.frontHoleImage;
        this._frontHole.x = 0;
        this._frontHole.y = 45;
        this.addChild(this._frontHole);
        this._frontHole.touchEnabled = false;
    },
    moleClear: function() {
        this._mole.moveClear();
        return this;
    },
    moleUp: function(moveSpeed) {
        moveSpeed = moveSpeed || 0;
        this._mole.moveUp(moveSpeed);
        return this;
    },
    moleDown: function(moveSpeed) {
        moveSpeed = moveSpeed || 0;
        this._mole.moveDown(moveSpeed);
        return this;
    },
    moleWait: function(waitTime) {
        waitTime = waitTime || 0;
        this._mole.moveWait(waitTime);
        return this;
    },
    moleUpDown: function(timeout, moveUpSpeed, waitTime, moveDownSpeed) {
        timeout = timeout || 0;
        moveUpSpeed = moveUpSpeed || 0;
        waitTime = waitTime || 0;
        moveDownSpeed = moveDownSpeed || moveUpSpeed;
        this._mole.moveUpDown(timeout, moveUpSpeed, waitTime, moveDownSpeed);
        return this;
    },
    loop: function() {
        this._mole.loop();
        return this;
    },
    unloop: function() {
        this._mole.unloop();
        return this;
    },
    auto: function() {
        var getRandom = function(start, end) {
            return start + Math.floor( Math.random() * (end - start + 1));
        };
        this._mole.moveWait(getRandom(30, 200));
        this._mole.moveUp(getRandom(5, 30));
        this._mole.moveWait(getRandom(0, 20));
        this._mole.moveDown(getRandom(5, 30));
        return this;
    },
    image: {
        get: function() {
            return this._mole.image;
        },
        set: function(value) {
            this._mole.image = value;
        }
    },
    mole: {
        get: function() {
            return this._mole;
        },
        set: function(value) {
            this._mole = value;
        }
    },
    behindHole: {
        get: function() {
            return this._behindHole;
        },
        set: function(value) {
            this._behindHole = value;
        }
    },
    frontHole: {
        get: function() {
            return this._frontHole;
        },
        set: function(value) {
            this._frontHole = value;
        }
    },
    _dispatchEvent: function(event) {
        e = new Event(event);
        this.dispatchEvent(e);
    }
});
enchant._Mole = enchant.Class.create(enchant.Sprite, {
    initialize: function(width, height){
        enchant.Sprite.call(this, width, height);
        this._initHeight = height;
        this._initWidth = width;
        this.visible = false;
        this.tl.changeHeight(0, 0).then(function() {
            this.visible = true;
        });
    },
    moveClear: function() {
        //this.tl.then(function() {this.tl.clear();});
        this.tl.clear();
        return this;
    },
    moveUp: function(moveSpeed) {
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_UP_START);});
        this.tl.changeHeight(this._initHeight, moveSpeed);
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_UP_END);});
        return this;
    },
    moveDown: function(moveSpeed) {
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_DOWN_START);});
        this.tl.changeHeight(0, moveSpeed);
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_DOWN_END);});
        return this;
    },
    moveWait: function(waitTime) {
        this.tl.delay(waitTime);
        return this;
    },
    moveUpDown: function(timeout, moveUpSpeed, waitTime, moveDownSpeed) {
        moveDownSpeed = moveDownSpeed || moveUpSpeed;
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_UP_START);});
        this.tl.changeHeight(0, 0);
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_UP_END);});
        this.tl.delay(timeout);
        this.tl.changeHeight(this._initHeight, moveUpSpeed);
        this.tl.delay(waitTime);
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_DOWN_START);});
        this.tl.changeHeight(0, moveDownSpeed);
        this.tl.then(function() {this._dispatchEvent(enchant.Event.MOLE_DOWN_END);});
        return this;
    },
    loop: function() {
        this.tl.loop();
        return this;
    },
    unloop: function() {
        this.tl.unloop();
        return this;
    },
    _dispatchEvent: function(event) {
        e = new Event(event);
        this.dispatchEvent(e);
    }
});
