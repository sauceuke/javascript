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
 