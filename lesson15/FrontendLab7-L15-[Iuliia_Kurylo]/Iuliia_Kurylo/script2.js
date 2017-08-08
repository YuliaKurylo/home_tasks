Player = function (name, attack, hitpoints) {
    this.name = name;
    this.attack = attack;
    this.hitpoints = hitpoints;
    this.totalHitpoints = 100;
}
Player.prototype.getHitpoints = function () {
    return this.hitpoints;
}
Player.prototype.setHitpoints = function (number) {
    if (number <= this.totalHitpoints) {
        this.hitpoints = number;
    } else {
        console.log("max value can be " + this.totalHitpoints);
        this.hitpoints = this.totalHitpoints;
    }
}
Player.prototype.getTotalHitpoints = function () {
    return this.totalHitpoints;
}
Player.prototype.setTotalHitpoints = function (number) {
    this.totalHitpoints = number;
}
Player.prototype.getAttack = function () {
    return this.attack;
}
Player.prototype.setAttack = function (power) {
    this.attack += power;
}
defence = function (player) {
    if (typeof (player.defenced) !== undefined && player.defenced === true) {
        player.hitpoints += this.attack;
        player.defenced = false;
    }
}
enrage = function (player) {
    if (typeof (player.enraged) !== undefined && player.enraged > 0) {
        player.enraged -= 1;
        if (player.enraged === 0) {
            player.attack /= 2;
        }
    }
}
skillup = function (player1, player2) {
    if (player1.isAlive() === false) {
        if (Champion.prototype.isPrototypeOf(player2)) {
            player2.attack += 1;
        }
        if (Monster.prototype.isPrototypeOf(player2)) {
            player2.setTotalHitpoints(player2.getTotalHitpoints() + player1.getTotalHitpoints() * 0.1);
            player2.setHitpoints(player2.getHitpoints() + player1.getTotalHitpoints() * 0.25);
        }
    }
}
Player.prototype.fight = function (player) {
    if (Player.prototype.isPrototypeOf(player)) {
        player.hitpoints -= this.attack;
        defence(player);
        enrage(this);
        skillup(player, this);
    }

}

Player.prototype.isAlive = function () {
    return this.hitpoints > 0;
}
Champion = function (options) {
    Player.call(this, options.name, options.attack, options.hitpoints);
    this.defenced = false;
    this.rest = function () {
        this.hitpoints += 5;
    }
    this.defence = function () {
        this.defenced = true;
    }
};
Champion.prototype = Object.create(Player.prototype);
Champion.prototype.constructor = Champion;
Monster = function (options) {
    Player.call(this, options.name, options.attack, options.hitpoints);
    this.enraged = 0;
    this.enrage = function () {
        this.enraged = 2;
        this.attack *= 2;
    }
};
Monster.prototype = Object.create(Player.prototype);
Monster.prototype.constructor = Monster;

var heracles = new Champion({
    name: "Heracles",
    attack: 10,
    hitpoints: 50
});
var bear = new Monster({
    name: "Erymanthian Bear",
    attack: 5,
    hitpoints: 100
});
//module.exports = {
//    Player: Player,
//    Champion: Champion,
//    Monster: Monster,
//    Player.prototype.getHitpoints,
//    Player.prototype.setHitpoints,
//    Player.prototype.getTotalHitpoints,
//    Player.prototype.setTotalHitpoints,
//    Player.prototype.getAttack,
//    Player.prototype.setAttack,
//    defence,
//    enrage,
//    skillup,
//    Player.prototype.fight,
//    Player.prototype.isAlive,
//}
