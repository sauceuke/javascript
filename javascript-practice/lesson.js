// the five primitive variable types  in Javascript

var firstName = 'John';
var lastName = 'doe';

var fullName = firstName.concat('', lastName); // 'John doe'
var greeting = 'HELLO' + fullName; // 'HELLO, John doe'

console.log(greeting.toUpperCase()); // 'HELLO, JOHN DOE'
console.log(greeting.toLowerCase()); // 'hello, john doe'

console.log(greeting.length); // 15

var occupation = null; 
console.log(occupation); // null (no value)

var salary;
console.log(salary); // undefined (no value assigned)

var id = 33.2;

id = 'secret'; // can change 'id' from a number to a string

// variable type number (ex. 5, 1.25, 1.1e5, +Infinity, -Infinity, NaN)
// variable type string (ex. 'hello')
// variable type boolean (ex. true, false)
// variable type null (meaning no value)
// variable type undefined (meaning undefined/specified value)

// --------

// arrays -> used to store a list of values in a single variable
// array values DO NOT have to be the same type 

var myArray = ['cars', 12, false];

var age = myArray[1];
console.log(age); // 12

myArray[2] = true;
console.log(myArray[2]); // true

console.log(myArray.length); // 3

// when reading an array by its index, arrayVar[index] will return undefined if the infex is out of bounda

var a = ['cat', 'dog', 'banana'];
console.log(a[4]); // undefined 
console.log(a[-9]); // undefinied

a[4] = 'panda' // writing an undefined element adds it to the index
console.log(a[4]); // "panda"
// however, asking for an element that doesn't exist only produces undefined
console.log(a[3]); // undefined (because [3] doesn't exist, the index goes 0,1,2,etc.)

a[-5] = 'elephant'; // the above rule applies even for negative numbers
console.log(a[-5]); // "elephant"

//how many elements are now in [a]?
console.log(a);
// (5) ["cat", "dog", "banana", undefined x 1, "panda", -5: "elephant"]

// we can add elements to an Array (not fixed length), using push() and unshift()
// push() adds elements to the end of the array, while unshift() adds elements to the beginning of an array

var myArray = ['car', 'bike'];

myArray.push('scooter');
console.log(myArray); // car, bike, scooter

myArray.unshift('train');
console.log(myArray); // train, car, bike, scooter

// we can also remove elements from an array using pop() or shift()
// pop() will remove and return an element from the end of the array
// shift() will remove and return an element from the begnning of an array

var myArray = ['train', 'car', 'bike', 'scooter'];

var vehicle = myArray.pop();
console.log(vehicle);  // scooter
console.log(myArray); // train, car, bike

vehicle = myArray.shift();
console.log(vehicle);  // train
console.log(myArray);  // car, bike

// objects -> used to store key-value pairs
// we consider these values to be "properties" and they can be accessed using the myObject.property or array notation myObject['property]

var person = {
    name: 'John Doe',
    age: 25,
    isMale: true,
    personality: ['patient', 'loyal', 'happy'],
    company: { name: 'edX', id: 2984 }
}

console.log(person.age); // 25
console.log(person['company'].id) // 2984

// you can modify (add to) objects even after the initial declaration

var pet = {
    name: 'Cooper',
    type: 'dog'
}

console.log(pet.age); // undefined
pet.age = 11;
console.log(pet.age); // 11

pet['status'] = 'good boy';
console.log(pet.status); // "good boy"

// conditional statements

var a = 1
var b = 3

var max; // undefined

if (a > b) {
    max = a;
}
else {
    max = b;
}

console.log(max); 

// comparison operators 
// == equal to, === equal to and same type, != not equal to,
// !== not equal to and different type, > greater than, 
// >= greater than or equal to, < less than, <= less than or equal to

// logical operators 
// | | logical OR, && logical AND, ! logical NOT 

// use double equals (==) when you only want to compare VALUES
1 == '1' // true

// use triple equals (===) when you want to compare VALUES and TYPEs
1 === '1' // false! different types


// comparing truthy/falsy values
// remember, any value can be used as a boolean
// "falsy" values: null, undefined, 0, NaN, ''
// "truthy" value: 'cow', 'false', 5, etc...

// var x; // undefined 
// if (x) (...) // false! undefined falsy

// x = 0;
// if (x) (...) // false! 0 is falsy

// var y = null;
// var z; // undefined

// if (y == z) (...) // true! falsy equals falsy
// if (y === z) (...) // false! different types 

// when comparing a number to a string in JavaScript, it will convert the string to a numeric form
5 < '20' // true
'5' < 20 // true
5 > 'alligator' // (alligator gets converted to NaN, therefore) also false!
'zebra' > 'giraffe' // true

//comparing objects:  objects are only considered equal if the variables are aliases, i.e. refer to the same object

var cooper = { age: 11 }
var flanders = { age: 11 }

// if (cooper == flanders) {...} // false!

var myDog = cooper;

// if (myDog == cooper) {...} // true!
 
// loops

// var n = ...
var factorial = 1;

for (var i = 1; i <= n; i++) {
    factorial *= i;
}

var i = 1;
while (i <= n) {
    factorial *= i;
    i++;
}

var i = 1;
do {
    factorial *= i;
    i++;
}
while (i <= n);

// delcaring and using functions 

function factorial(n) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

// var x = ...
var f = factorial(x);
console.log(f);

//applying functions to arrays

var nums = [4, 8, 12, 2];

// ---

function print(n) {
    console.log(n);
}
nums.forEach(print);

// ----

function isEven(n) {
    return n % 2 == 0;
}
nums.every(isEven); // true

// ---

function square(n) {
    return n * n;
}
var squares = nums.map(square); // [16, 64, 144, 4]

// --- 

// primitive arguments are passed by value: the function cannot change them

function tryToChange(x) {
    x = 4;
}

var y = 11;
tryToChange(y);
console.log(y); // still 11 (y doesn't change becuase it is a primitive value)

// object arguements are passed by reference: the function CAN change

function changeMe(obj) {
    obj.age++;
}
var p = { age: 30};
changeMe(p);
console.log(p.age); // now 31

// since JavaScript functions are objects, we can have variables refer to them

var add = function (a, b) {
    return a + b;
}
console.log(add(3, 5));    // 8 

// JavaScript functions can also be declared and used in objects

var johnDoe = {
    name: 'John Doe',
    age: '32',
    greeting: function () {
        return 'Hello! Nice Meeting You!';
    }
}
console.log(johnDoe.greeting());

// every object in JavaScirpt has a prototype, accessed from the __proto__ property in the object
// The __proto__ property is also an object, with its own __proto__ property, and so on
// the root prototype of all objects is Object.prototype
// an object inherits the properties of its prototype

function Person (name, age) { // prototype
    this.name = name;
    this.age = age;
    this.greeting = function () {
        return 'Hello! My name is ' + this.name;
    }
}

// The  this  keyword refers to the current object

var johnDoe = new Person('John Doe', 32);
johnDoe.greeting(); // Hello! My name is John Doe

var janeDoe = new Person('Jane Doe', 28);
janeDoe.greeting(); // Hello! My name is Jane Doe

// the  new  keyword can be used to create new objects from the same prototype

// extending a prototype 

// prototypes can extend another prototype with more functionality
// to inherit a prototype, set the __proto__ property of an object to the parent prototype

function Student (name, age, school) {
    this.__proto__ = new Person(name, age);
    this.school = school;
}

var sarahBrown = new Student('Sarah Brown', 17, 'PennX');

sarahBrown.greeting(); //Hello! My name is Sarah Brown
sarahBrown instanceof Person; // true

// prototype properties

// properties and methods can be added to prototypes by adding them to thep prototype property

var Person = function (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

Person.prototype.planet = 'Earth';
Person.prototype.introduction = function () {
    return 'I am a ' + this.occupation;
}

var johnDoe = new Person('John Doe', 32, 'Dentist');

johnDoe.planet; // Earth
johnDoe.introduction(); // I am a Dentist

// strings

// JavaScript strings are a sequences of characters, JavaScript strings are immutable, strings are objects and have their own functions
// we get the number of characters in a string using the length property, and access each character by its (0-based) index using charAt or array notation

var name = 'toucan';
name.length; // 6 (becuase there are 6 letters in the word toucan)
name.charAt(3); //'c' (because c is the 3rd character)
name[3]; // 'c'

// remember, Javascript strings are immutable! (meaning i can't change them)

var animal = 'cat';
animal[0] = 'r';
console.log(animal); // still "cat"

// modifying strings -> will return a new string because they are immutable

var friend = 'turtle';
friend.toUpperCase(); // 'TURTLE'
console.log(friend); // 'turtle'

var message = ' hello everyone ';
message = message.trim // 'hello, everyone'

var myAnimal = 'cat'.concat('mouse');
console.log(myAnimal); // 'catmouse'

// searching strings
// we can determine whether a string starts with, ends with, or includes other strings

var msg = 'programming in JavaScript is fun';

msg.startsWith('programming'); // true
msg.startsWith('PROGRAMMING'); // false

msg.endsWith('is fun'); // true
msg.includes('JavaScript'); // true

// we can also get the starting index of a contained substring

var title = 'the title of my book';
var start = title.search('title'); // 4
start = title.search('banana'); // -1 

// regular expressions
// a regular expression is a pattern of characters, a string matches a regular expression if it adheres to the same pattern
// (examples: consists of exactly three digits (0-9)), '123' matches, 'abc' does not match, '12' does not match, '12345' does not match

// simple regular expression matching
// we can pass a regular expression to the string's search function to see if it matches the pattern
// in general, it is considered a match if any part of the string matches the regular expression

var status = 'I am working VERY hard';
status.search(/VERY/); // 13
status.search(/very/); // -1
status.search(/very/i); // 13

// or we can use the regex's test function
/script/.test('javascript is so much fun!'); // true

// specifying ranges of characters

var numbers = '5 8 2 5 7 6';
numbers.search(/[012]/);  // 4
/[012]/.test(numbers); // true 

// or ranges of characters or special characters 

var password = 'password4real';
password.search(/[a-z]/); // 0 
password.search(/\d/); // 0 

// we can combine different ranges 

var code = 'abc123d4e5'; 
code.search(/[0-9] [a-z] [0-9]/); // 5

// or look for characters not in a range

var chars = 'abc123K56'; 
chars.search(/[^0-9a-z]/); // 6

// quantifiers 

// we may want to know whether the string contains an option single occurence

/[a-z][0-9]7[a-z]/.test('a1b'); // true
/[a-z][0-9]7[a-z]/.test('abc'); // true 
/[a-z][0-9]7[a-z]/.test('a123b'); // false 

// or optional multiple occurences

/[a-z][0-9]*[a-z]/.test('a123b');

//startsWith and endsWith matches
// regular expressions can tell us if a string contains a pattern, but we may want to know if the string starts or ends with the pattern

/^[a-z][0-9]/.test['a1b']; // true
/^[a-z][0-9]/.test('ab12'); // false 

/[a-z][a-z]$/.test('123abc'); // true 
/[a-z][a-z]$/.test('123abc456'); // false 

// this lets us detect exact matches

/^[a-z][0-9][a-z]$/.test['a1b']; // true
/^[a-z][0-9][a-z]$/.test['a1b2c'];  // false 
/^[a-z][0-9a-z]*[a-z]$/.test['a1b2c']; // true 
