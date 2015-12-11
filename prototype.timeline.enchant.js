enchant.Timeline.prototype.changeHeight = function(height, time, easing) {
    return this.tween({
        y: function() {
            return this.y + this.height - height;
        },
        height: height,
        time: time,
        easing: easing
    });
};
