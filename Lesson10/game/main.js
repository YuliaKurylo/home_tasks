function getPrize(max_prize, cof) {
    return Math.floor(max_prize) * cof;
}

function generateNumber(random) {
    return Math.floor((Math.random() * random) + 0);
}

function continueGame(prize) {
    return confirm("Ваш виграш - " + prize + "$. Чи бажаєте продовжити гру?");
}

function game() {
    var prize = 0;
    var max_prize = 10;
    var cof = 1;
    var random = 6;
    var totalprize = 0;
    var quest = confirm("Чи бажаєте почати гру?");
    while (true) {
        if (quest === true) {
            var number = generateNumber(random);
            console.log(number);
            var insertedNumber = prompt("Введіть перше число");
            if (insertedNumber == number) {
                prize = getPrize(max_prize, cof);
            } else {
                insertedNumber = prompt("Введіть друге число");
                if (insertedNumber == number) {
                    prize = getPrize(max_prize / 2, cof);
                } else {
                    insertedNumber = prompt("Введіть третє число");
                    if (insertedNumber == number) {
                        prize = getPrize(max_prize / 4, cof);
                    } 
                }
            }
            totalprize += prize;
            if (continueGame(prize)) {
                cof *= 3;
                random *= 2;
                prize = 0;
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
}
