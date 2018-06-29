import './hw_10.scss'

console.log ('N1');
function randomInteger(min, max) {
    let result = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(result);
}
randomInteger(25, 50);

console.log ('N2');
let user = {
    name: 'Vasya',
    surname: 'Petrov',
    name: 'Sergey',
};
delete  user.name;
console.log(user);

console.log ('N3');
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
const something = {};
console.log(isEmpty(something));

console.log ('N4');
const salaries = {
    John: 400,
    Jack: 200,
    test: 'asdasdasd',
};
console.log (salaries);
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
let sum = 0;
for (let price in salaries) {
    if (isNumeric(salaries[price])) {
        sum += salaries[price];
    }
}
console.log(sum);

console.log ('N5');
console.log (salaries);
let max = 0;
let maxName;
for (let name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}
console.log( maxName || "нет сотрудников" );

console.log ('N6');
let numbers = {
    first: 200,
    second: 500,
    third: 'asdasdasd',
};
console.log (numbers);
function multiplyNumeric() {
    for (let number in numbers) {
        if (isNumeric(numbers[number])) {
            numbers[number] *= 2;
        }
    }
}
multiplyNumeric();
console.log(numbers.first, numbers.second);

console.log ('N8');
let  number = [];
for (;;) {
    let value = +prompt("Введите число");
    if (!value || value === null || value === '') break;
    number.push(+value);
}
for (let i=0; i<number.length; i++) {
    sum += number[i];
}
console.log (number);

console.log ('N9');
let array = ['apple', 22, 5, 'test', false];
console.log (array);
function find(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log (find(array, 5));

console.log ('N10');
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function filterRange(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log (filterRange(arr, 2, 6));


console.log ('N11');
let x =2;
let n =4;
function pow(x,n) {
    let result = x;
    for (let i=1; i<n; i++) {
        result *= x;
    }
    return result;
}
console.log (pow(x,n));
