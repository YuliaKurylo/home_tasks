function Casino(numberOfSlotMachines, numberOfMoney) {
    this.numberOfSlotMachines = numberOfSlotMachines;
    this.numberOfMoney = numberOfMoney;

    slotMachines = [];

    this.getMoney = function () {
        return this.numberOfMoney;
    }
    this.getSlotMachines = function () {
        return slotMachines;
    }

    var getMoneyForSlotMachine = (function (slotMachines) {
        if (slotMachines.length != 0) {
            var maxMoneyinSlotMachine = Math.max.apply(Math, slotMachines.map(function (slotMachine) {
                return slotMachine.moneyPassedToMachine;
            }));

            for (var i = 0; i < slotMachines.length; ++i) {
                if (slotMachines[i].moneyPassedToMachine == maxMoneyinSlotMachine) {
                    slotMachines[i].moneyPassedToMachine /= 2;
                    break;
                }
            }
            return (maxMoneyinSlotMachine / 2);
        } else {
            return numberOfMoney;
        }
    });

    this.addMachine = function () {
        slotMachines.push(new SlotMachine(getMoneyForSlotMachine(slotMachines)));
    }

    for (var i = 0; i < numberOfSlotMachines; ++i) {
        this.addMachine();
    }

    this.takeMoneyFromCasino = function (amountOfMoney) {
        slotMachines = slotMachines.sort(function (a, b) {
            return b.moneyPassedToMachine - a.moneyPassedToMachine;
        });
        var res = 0;
        var index = 0;
        while (res < amountOfMoney) {
            amountOfMoney -= res;
            if (amountOfMoney > slotMachines[index].moneyPassedToMachine) {
                res += slotMachines[index].moneyPassedToMachine;
                slotMachines[index].moneyPassedToMachine = 0;
                index++;
                continue;
            } else {
                res += amountOfMoney;
                slotMachines[index].moneyPassedToMachine -= amountOfMoney;
                break;
            }
        }
        return res;
    }
    this.startGame = function (sum) {
        var numberOfSlotMachine = Math.floor((Math.random() * (slotMachines.length - 1)) + 0);
        if (sum > 0) {
            slotMachines[numberOfSlotMachine].play(sum);
        } else {
            console.log("Your rate isn't correct");
        }
    }

}

function SlotMachine(moneyPassedToMachine) {
    this.moneyPassedToMachine = moneyPassedToMachine;
    this.lucky = false;
    this.getTotalMoneyInMachine = function () {
        return this.moneyPassedToMachine;
    }
    this.getMoneyFromMachine = function (amountOfMoney) {
        if (amountOfMoney > moneyPassedToMachine) {
            var res = moneyPassedToMachine;
            moneyPassedToMachine = 0;
            return res;
        } else {
            moneyPassedToMachine -= amountOfMoney;
            return amountOfMoney;
        }

    }
    this.putMoney = function (amountOfMoney) {
        if (amountOfMoney > moneyPassedToMachine) {
            console.log("Your rate is too hight");
        } else {
            moneyPassedToMachine += amountOfMoney;
        }

    }
    this.play = function (amountOfMoney) {
        this.putMoney(amountOfMoney);
        var coef = 0;
        var numbers = [];
        var numberOfSevens = 0;
        for (var i = 0; i < 3; ++i) {
            var number = Math.floor((Math.random() * 9) + 1);
            if (numbers.length === 0) {
                numbers.push(number);
                if (number === 7) numberOfSevens++
            } else {
                var index = numbers.length;
                while (index >= 0) {
                    --index;
                    if (numbers[index] === number) {
                        coef += 2;
                    }
                }
                numbers.push(number);
                if (number === 7) numberOfSevens++
            }
        }
        console.log("Random number:" + numbers.join(""));
        if (numberOfSevens === 3) {
            console.log("amount of received money: " + moneyPassedToMachine);
            this.moneyPassedToMachine = 0;
        } else {
            coef = coef > 2 ? 5 : coef;
            this.moneyPassedToMachine -= this.getMoneyFromMachine(amountOfMoney * coef);
            console.log(this.getMoneyFromMachine("amount of received money: " + amountOfMoney * coef));
        }

    }
    this.makeLuckySlotMachine = function () {
        var luckyMachine = Math.floor((Math.random() * slotMachines.length) + 0);
        luckyMachine.lucky = true;
        if (luckyMachine.lucky === true && coef > 2) {
            coef = 0;
        }
    }


}
var casino = new Casino(5, 1000);
var slotMachine = new SlotMachine(100);

function finalCheck() {
    console.log(casino);
    console.log(casino.getSlotMachines());
    console.log("Get money from casino:" + casino.getMoney());
    console.log("Take money from casino:" + casino.takeMoneyFromCasino(100));
    casino.startGame(200);
    console.log(slotMachine.getTotalMoneyInMachine());
};
finalCheck();

//
//module.exports = сasino;
//module.exports = slotMachine;
//module.exports = casino.getMoney;
//module.exports = casino.getSlotMachines;
//module.exports = casino.getMoneyForSlotMachine;
//module.exports = casino.addMachine;
//module.exports = casino.startGame;
//module.exports = casino.takeMoneyFromCasino;
//module.exports = slotMachine.getMoneyFromMachine;
//module.exports = slotMachine.getTotalMoneyInMachine;
//module.exports = slotMachine.putMoney;
//module.exports = slotMachine.play;
//module.exports = slotMachine.makeLuckySlotMachine;
//module.exports = finalCheck;
