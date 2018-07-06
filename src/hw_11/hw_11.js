import './hw_11.scss'

console.log('N7');
function greeting () {
    console.log('Hello my kind: ' + this.kind);
    console.log('My age: ' + this.age);
    console.log('My way to travel: ' + this.moveType);
}

function painting () {
    console.log('My color: ' + this.color)
}

function distribution () {
    console.log('My type: ' + this.type)
}

function Animal(kind, age, moveType) {
    this.kind = kind;
    this.age = age;
    this.moveType = moveType;
    this.greet = greeting;
}

function Horse (kind, age, moveType, color) {
    Animal.apply(this, arguments);
    this.color = color;
    this.bodyColor = painting;
}

function Bird (kind, age, moveType, type) {
    Animal.apply(this, arguments);
    this.type = 'parrot';
    this.birdType = distribution;
}

const animal = new Animal('Bear', 5, 'run');
const animal2 = new Horse('Horse', 7, 'run', 'brown');
const animal3 = new Bird('Bird', 1, 'fly', 'parrot');

animal.greet();
animal2.greet() ;
animal2.bodyColor();
animal3.greet();
animal3.birdType();

console.log('N7.1');
function Machine(power) {
    this._power = power;
    this._enabled = false;
    let self = this;
    this.enable = function() {
        self._enabled = true;
    };
    this.disable = function() {
        self._enabled = false;
    };
}

console.log('N7.2');
function Fridge(power) {
    Machine.apply(this, arguments);
    let food = [];
    this.addFood = function(food) {
        if(!this._enabled) {
            console.log('Error');
        }
        if(food.length > this._power/100) {
            console.log('Error');
        }
    };
    // this.removeFood = function() {
    //     delete food;
    // };
    this.getFood = function() {
        return food;
    };
}

