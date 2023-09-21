console.log('Inside main.js');

//arrow functions

let app = (name) => {
    console.log(`hello from ${name}`);
}
app('Anjali'); 


//let and const 

let a = 23;
console.log(a);   //Output 10

const b = 535;
console.log(b);  //Output 3.14 


//Multi-line Strings


//Users can create multi-line strings by using back-ticks(`).


let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`  

console.log(greeting); 

// Default Params

//ES6
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

console.log(calculateArea);  


// Template Literals
  let firstName = "Anjali";
  let lastName = "Shrivastava";
let name = `My name is ${firstName} ${lastName}`; 

console.log(name);  


//Array Destructuring
let fruits = ["Rose", "Banana"];
let [e, f] = fruits; // Array destructuring assignment
console.log(e,f);

//Object Destructuring
let person = {names: "Anjali", age: 28};
let {names, age} = person; // Object destructuring assignment
console.log(names, age); 


//Promises 

var asyncCall =  new Promise((resolve, reject) => {
   // do something
   resolve();
}).then(()=> {   
   console.log('HI!');
}) 


//Classes

class UserProfile {   
   constructor(firstName, lastName) { 
      this.firstName = firstName;
      this.lastName = lastName;     
   }  
    
   getName() {       
     console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
   } 
}
let obj = new UserProfile('John', 'Smith');
obj.getName(); // output: The Full-Name is John Smith




//Template Literals 

 const tempFunc = (name,age) =>{

   return "Hi ${name}, Your age is ${age}! ";

 }

 console.log(tempFunc('tom',33)); 

// Default Parameters 

 const tempdFunc = (name,age=33) =>{

   return "Hi ${name}, Your age is ${age}! ";

 }

 console.log(tempdFunc('tom'));  


 //import and export


//the spread operator takes the Array itself and not just the arguments. We can use the Spread parameter to get the values of an Array, instead of using a for loop or any other method.

 const arr=['said',20,'JavaScript enthusiast','Hi','Said','How are you?'];

const Func=(...anArray)=>{
  return anArray;
}

console.log(Func(arr));

//output  ["said", 20, "JavaScript enthusiast", "Hi", "Said", "How are you?"


//rest parameters

function myFunction(a, b, ...args) {
    return args;
}

console.log(myFunction(1, 2, 3, 4, 5)); // 3,4,5
console.log(myFunction(-7, 5, 0, -2, 4.5, 1, 3)); // 0,-2,4.5,1,3


//Maps

//Map holds key-value pairs. 
//It’s similar to an array but we can define our own index. 
//And indexes are unique in maps.

var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
NewMap.get('name'); // John
NewMap.get('id'); // 2345796
NewMap.get('interest'); // ['js', 'ruby', 'python']


var map = new Map();
map.set('name', 'John');
map.set('id', 10);
map.size; // 2. Returns the size of the map.
map.keys(); // outputs only the keys. 
map.values(); // outputs only the values.
for (let key of map.keys()) {
 console.log(key);
}

// Static methods


class Example {
 static Callme() {
 console.log("Static method");
 }
}
Example.Callme();

//Output:
//Static method


//Getters and Setters

//Getters and setters and one of the useful feature introduced in ES6. 
//It will come in handy if you are using classes in JS.

class People {
constructor(name) {
      this.name = name;
    }
    get Name() {
      return this.name;
    }
    set Name(name) {
      this.name = name;
    }
}
let persons = new People("Anjali Sh");
console.log(persons.Name);
persons.Name = "Sh";
console.log(persons.Name);  

//Methods

// String.prototype.repeat() 

//The repeat() method repeats and concatenates a string. 


const word = 'Anjali '

word.repeat(5) // "Anjali Anjali Anjali Anjali Anjali"



//String.prototype.startsWith() 

//We can easily determine if something begins a string using startsWith().

const letters = 'Disestablishmentarianism'

letters.startsWith('Disestablish') // true 

//String.prototype.includes()


const words = 'Disestablishmentarianism'

words.includes('establishment') // true 


//String.prototype.endsWith()


const strings = 'Disestablishmentarianism'

strings.endsWith('ism') // true 

//Implicit Returns

const returnsTrue = () => true;

// Multi-line Strings in ES6


let poemData = `Johny Johny Yes Papa,     
                Eating sugar?  No, papa!
                Telling lies? No, papa!
                Open your mouth Ah, ah, ah!`  



// Blocked Scope Variables

let be = new Array('a', 'b', 'c');
let ce = new Array('d', 'e', 'f');

let x = new Array('1', '2');
let y = new Array('3', '4');

for (let i = 0; i < a.length; i++) {
  let x = a[i];
  console.log(`Value x[${i}]:`, x);
}
for (let i = 0; i < b.length; i++) {
  let y = b[i];
  console.log(`Value y[${i}]:`, y);
}

console.log(`Array x:`, JSON.stringify(x));
console.log(`Array y:`, JSON.stringify(y));

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function() {
    return i * 2;
  }
}
console.log(`Compare callback[0] === 0:`, callbacks[0]() === 0);
console.log(`Compare callback[1] === 2:`, callbacks[1]() === 2);
console.log(`Compare callback[2] === 4:`, callbacks[2]() === 4);  


//Block-Scoped Functions

function test() {
  return 1;
}
console.log(`Compare test() === 1:`, test() === 1);

{
  function test() {
    return 2;
  }
  console.log(`Compare test() === 2:`, test() === 2);
}

console.log(`Compare test() === 1:`, test() === 1);   



//Expression Bodies

let evens = new Array(1, 2, 3);

let odds = evens.map(v => v + 1);
let pairs = evens.map(v => ({
  even: v,
  odd: v + 1
}));
let nums = evens.map((v, i) => v + i);

console.log(`Array odds:`, JSON.stringify(odds));
console.log(`Array pairs:`, JSON.stringify(pairs));
console.log(`Array nums:`, JSON.stringify(nums)); 

//Statement Bodies

let numss = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
let fives = new Array();

numss.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(`Array fives:`, JSON.stringify(fives)); 

//Output Array fives: [5,5,5] 


//Raw String Access  


function quux(strings, ...values) {
  console.log(`Compare strings[0] === "foo\\n":`, strings[0] === "foo\n");
  console.log(`Compare strings[1] === "bar":`, strings[1] === "bar");
  console.log(`Compare values[0] === 42:`, values[0] === 42);
  console.log(`Compare strings.raw[0] === "foo\\\\n":`, strings.raw[0] === "foo\\n");
  console.log(`Compare strings.raw[1] === "bar":`, strings.raw[1] === "bar");
}
quux `foo\n${ 42 }bar`;

console.log(`Compare String.war:`, String.raw `foo\n${ 42 }bar` === "foo\\n42bar"); 

//output Compare strings[0] === "foo\n": true
//Compare strings[1] === "bar": true
//Compare values[0] === 42: true
//Compare strings.raw[0] === "foo\\n": true
//Compare strings.raw[1] === "bar": true
//Compare String.war: true  


//Regular Expression Sticky Matching


let message = "My name is Foo and my lastname is Bar."
let pattern = /my [a-zA-Z]+/y;

console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message)));

pattern.lastIndex = 19;

console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message)));
console.log(`Return pattern /my [a-zA-Z]+/y:`, JSON.stringify(pattern.exec(message))); 


//Output -// Return pattern /my [a-zA-Z]+/y: null
//Return pattern /my [a-zA-Z]+/y: ["my lastname"]
//Return pattern /my [a-zA-Z]+/y: null



