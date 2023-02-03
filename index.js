//1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;
initials = [...userNames];
initials = initials.map((user) => user.split(' ').map((initial) => initial[0]).join('.')).sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//2
const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = + ('' + currentMaxValue).split('').reverse().join('');


console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


//3
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = [...resultsArray].flat(Infinity).reduce((acc, curr) => acc * curr, 1);

console.log(productOfArray); // 24
