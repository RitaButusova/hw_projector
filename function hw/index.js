/*1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
 Використайте оператор розширення:*/

console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function addThemAll(...args) {
    return [...args].reduce((acc, arg) => acc + arg, 0);
}

/*2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b*/

function multiply(a) {
    let result = a;
    return function multiply(b) {
        result = result * b;
        return result;
    }
}


console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	// -4*
console.log(multiply(4)(3))		// 12*


/*3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:*/

const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

//console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
const moviesSortByReleaseYear = [...movies].sort(byProperty('releaseYear', '>'));
console.log(moviesSortByReleaseYear);
//console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
const moviesSortByRunningTimeMinutes = [...movies].sort(byProperty('runningTimeInMinutes', '<'));
console.log(moviesSortByRunningTimeMinutes);
//console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
const moviesSortByMovieName = [...movies].sort(byProperty('movieName', '>'));
console.log(moviesSortByMovieName);


function byProperty(property, direction) {
    if (direction === '>') {
        return (a, b) => {
            if (a[property] > b[property]) {
                return 1;
            } else if(a[property] < b[property]){
                return -1;
            } else {
                return 0;
            }
         }
    } else if (direction === '<'){
        return (a, b) => {
            if (a[property] < b[property]) {
                return 1;
            } else if(a[property] > b[property]){
                return -1;
            } else {
                return 0;
            }
    }
}
}




/*4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. 
Напишіть її двома варіантами:

Використовуючи setInterval
Використовуючи вкладений setTimeout*/


// 3
// 2
// 1
// BOOM!*

function detonatorTimer(delay) {
    let int = setInterval(counting, 1000);

    function counting(){
        if (delay === 0) {
            console.log('BOOM!');
            return clearInterval(int);
        }
        console.log(delay);
        delay--;
    }
}

detonatorTimer(3);

function detonatorTimer(delay) {
    setTimeout(counting, 1000);

    function counting(){
        if (delay === 0) {
            console.log('BOOM!');
            return;
        }
        console.log(delay);
        if (delay > 0) {
            setTimeout(counting, 1000);
        }
        delay--;
    }
}

detonatorTimer(3);


/*5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:

let me = {
    name: 'Mykola',
    residency: 'Lviv',
    gender: 'male',
    age: 31,
    hobby: 'crafting',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
    }
    
    me.introduce();
    me.prognose();
    me.describeMyMood();
    */

    let elephant = {
        name: "Jumbo",
        habitatArea: "Africa",
        age: 25,
        size: 'big',
        friends: 'elephants',
        otherFriends: false,
        enemy: 'tiger',
        introduse() {
            console.log(`Popular elephant ${this.name} from ${this.habitatArea} was a young ${this.age} old and active animal`)
        },
        problems() {
            if (this.otherFriends) {
                console.log(`${this.name} had friends who were not like him. For example: monkey, frog, rabbit`)               
            }
            console.log(`${this.name} won the angry ${this.enemy} because he was ${this.size}gest`);
            this.otherFriends = true;
        },
        final() {
            console.log(`After that ${this.name} ${this.otherFriends ? `had friends who were not like him. For example: monkey, frog, rabbit` : `he was only friends with elephants`}`);
        }
    }

    elephant.introduse();
    elephant.problems();
    elephant.final();


    /*6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту
    і їх можна було викликати в таймері*/
    let securedSelfIntroduce = elephant.introduse.bind(elephant);

    let securedProblems = elephant.problems.bind(elephant);
    let securedFinal = elephant.final.bind(elephant);
    
    setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
    setTimeout(securedProblems, 2000); // виведе коректний результат*
    setTimeout(securedFinal, 3000); // виведе коректний результат*
    

    /*7. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.*/

    function someFunction(...args) {
        console.log(`${args[0]} ${args[1]}`);
    }

    function slower(func, seconds) {
        return function() {
            setTimeout(() => func.apply(this, arguments), seconds);
        }
    }

    let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

    slowedSomeFunction('Hello', 'Jumbo') // викликаєте декоратор*