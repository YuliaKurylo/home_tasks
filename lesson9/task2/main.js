var prize = 0;
var max_prize = 10;
var cof = 1;
var random = 6;
var totalprize = 0;
var quest = confirm("Чи бажаєте почати гру?");
while (true) {
    if (quest === true) {
        var number = Math.floor((Math.random() * random) + 0);
        var numberone = prompt("Введіть перше число");
        if (numberone == number) {
            prize = max_prize * cof;
            var questtwo = confirm("Ваш виграш - " + prize + "$. Чи бажаєте продовжити гру?");
        } else {
            var numbertwo = prompt("Введіть друге число");
            if (numbertwo == number) {
                prize = Math.floor((max_prize / 2)) * cof;
                var questtwo = confirm("Ваш виграш - " + prize + "$. Чи бажаєте продовжити гру?");
            } else {
                var numberthree = prompt("Введіть третє число");
                if (numberthree == number) {
                    prize = Math.floor((max_prize / 4)) * cof;
                    var questtwo = confirm("Ваш виграш - " + prize + "$. Чи бажаєте продовжити гру?");
                } else {
                    prize = 0;
                    var questtwo = confirm("Ваш виграш - " + prize + "$. Чи бажаєте продовжити гру?");
                }
            }
        }
        totalprize += prize;
        prize = 0;
        if (questtwo == true) {
            cof *= 3;
            random *= 2;
            continue;
        } else {
            alert("Дякуємо за гру ваш виграш становить: " + totalprize + "$");
            break;
        }
    } else {
        alert("Сьогодні Ви не виграли мільйон, а могли");
        break;
    }
}
