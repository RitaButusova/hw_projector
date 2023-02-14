"use strict"

/*1. Задача про обчислення різниці часу

Напишіть функцію яка буде буде приймати 3 параметри - початкову дату (string)- кінцеву дату (string)- розмірність ('days', 'hours', 'minutes', seconds)

Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

Приклади:durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'*/

const durationBetweenDates = (startDate = '02 Aug 1985', endDate = '03 Aug 1985', dimension = 'seconds') => {
    const _MS_PER_SECOND = 1000; 
    const _MS_PER_MINUTE = 60 * 1000;
    const _MS_PER_HOUR = 60 * 60 * 1000;
    const _MS_PER_DAY = 24 * 60 * 60 * 1000;

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    if (startDate > endDate) {
        const x = endDate;
        endDate = startDate;
        startDate = x;
    }

    const calculationMethods = {
        seconds: () => {
            const seconds = (endDate - startDate) / _MS_PER_SECOND;
            return seconds;
        },
        minutes: () => {
            const minutes = (endDate - startDate) / _MS_PER_MINUTE;
            return minutes;
        },
        hours: () => {
            const hours = (endDate - startDate) / _MS_PER_HOUR;
            return hours;
        },
        days: () => {
            const days = (endDate - startDate) / _MS_PER_DAY;
            return days;
        }
    };

    if (dimension in calculationMethods) {
        console.log(dimension)
        console.log(calculationMethods[dimension]())
        return calculationMethods[dimension]();
    }

};


durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');


    /*if (dimension === 'seconds') {
        const seconds = (endDate - startDate) / _MS_PER_SECOND;
        return seconds;
    } else if (dimension === 'minutes') {
        const minutes = (endDate - startDate) / _MS_PER_MINUTE;
        return minutes;
    } else if (dimension === 'hours') {
        const hours = (endDate - startDate) / _MS_PER_HOUR;
        return hours;
    } else if (dimension === 'days') {
        const days = (endDate - startDate) / _MS_PER_DAY;
        return days;
    }*/



/* 2. Задача про перетворення об'єкту
Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.*/

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    let arrSupplies = {};
    for (const supplies in data) {
        const itemData = supplies.toUpperCase();
        arrSupplies[itemData] = parseFloat(data[supplies]).toFixed(2);   
    }
    return arrSupplies;
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}




/*3. Задача про рекурсію та ітерацію
Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.*/


function recursiveOddSumTo(number) {
        let x = 0;
        if (number === 1) {
            return 1;
        } else {
            if (number % 2 !== 0) {
                x = x + number;
                recursiveOddSumTo(number - 1);
            }
            return x + recursiveOddSumTo(number - 1);
        }
};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) //25 (9 + 7 + 5 + 3)


/*
- функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.*/
function iterativeOddSumTo(number) {
    let x = 0;
    if (number === 1) {
        return 1;
    }
    for (let i = 0; i <= number; i++){
        if (i % 2 !== 0) {
            x = x + i;
        }
    }
    return x;
};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25


