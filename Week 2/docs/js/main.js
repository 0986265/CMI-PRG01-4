"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Bubble was instantiated");
        this.instantiateBubble();
    }
    Bubble.prototype.instantiateBubble = function () {
        var _this = this;
        this.div = document.createElement("bubble");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        this.div.addEventListener("click", function () { return _this.popBubble(); });
    };
    ;
    Bubble.prototype.popBubble = function () {
        this.div.remove();
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("Fish was instantiated");
        this.instantiateFish();
    }
    Fish.prototype.instantiateFish = function () {
        var _this = this;
        this.div = document.createElement("fish");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
        this.div.addEventListener("click", function () { return _this.killFish(); });
    };
    ;
    Fish.prototype.killFish = function () {
        this.div.classList.add("dead");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game window had been instantiated");
        for (var index = 0; index < 10; index++) {
            var fish = new Fish();
        }
        for (var index = 0; index < 15; index++) {
            var bubble = new Bubble();
        }
        for (var index = 0; index < 4; index++) {
            var zeester = new Zeester();
        }
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Zeester = (function () {
    function Zeester() {
        this.instantiateZeester();
    }
    Zeester.prototype.instantiateZeester = function () {
        this.div = document.createElement("zeester");
        var background = document.getElementsByTagName("background");
        background[0].appendChild(this.div);
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    return Zeester;
}());
//# sourceMappingURL=main.js.map