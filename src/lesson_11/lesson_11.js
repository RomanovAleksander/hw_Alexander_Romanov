import './lesson_11.scss'

function test() {
    console.log('Test');
}

function greeting() {
    console.log('Hello my name is, ' + this.name)
}

function developing() {
    console.log('I am writing on ' + this.language)
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = greeting;
}

const person = new Person('John', 30);
const person2 = new Person('Jack', 20);

person.greet();
person2.greet();

function Developer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
    this.greet = greeting;
    this.develop = developing;
}

// function Car() {
//     this.fuel = 100;
// }
//
// Car.prototype.move = function () {
//     console.log('GO Not FAST!!!');
//     console.log('Fuel consumed', this.fuel -= 10);
// };

class Car {
    constructor() {
        this.fuel = 100;
    }

    move() {
        console.log('GO Not FAST!!!');
        console.log('Fuel consumed', this.fuel -= 10);
    }

    test() {
        console.log('Fuel consumed', this.fuel -= 40);
    }
}

function SportCar() {
    Car.call(this);
}

SportCar.prototype = Object.create(Car.prototype);

SportCar.prototype.move = function () {
    console.log('GO FAST!!!');
    console.log('Fuel consumed', this.fuel -= 40);
};

/**
 * @param car Car
 */

function Driver(car) {
    this.car = car;
    this.drive = function () {
        this.car.move();
    }
}

const ferrari = new SportCar();
const matiz = new Car();


//function counter() {
//     const btn = document.querySelector('#btn');
//     let clickCounter = 0;
//
//     btn.addEventListener('click', () => {
//         clickCounter++;
//         console.log(clickCounter)
//     })
// }
//
// counter();


// const products = [
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
//     {
//         title: 'Test',
//         price: '2500'
//     },
// ];
//
// function calcTotal(param) {
//     let sum = 0;
//     for (let i = 0; i < param.length; i++) {
//         const number = Number(param[i].price);
//         if (isNaN(number) === false) {
//             sum += number;
//         }
//     }
//     return sum;
// }
//
// const totalPrice = calcTotal(products);
// console.log(totalPrice);