//let name = 'mosh';
//console.log(name);
//const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);
//primitives
let name ='mosh';
let age = 13;
let isapproved = true;
let firstname;
let selectedcolor = null;

//dynammic typed


//reference types
//object,array,function
//object
let person = { 
    name : 'mosh',
    age : 20

};
console.log(person);


//dot notation
person.name = 'john';
console.log(person.name);

//bracket notation
person['name'] = 'mary';
//indynammic way
let selection = 'name';
person[selection] ='mary';
//array

let selectedcolors =['red','blue'];
selectedcolors[2] = 'green';
console.log(selectedcolors[0]);
console.log(selectedcolors.length); //properties

//functions

function greet(name) {
    console.log('hello' + name);
}
greet('john');
