console.log('Inside main.js');

//arrow functions

let app = (name) => {
    console.log(`hello from ${name}`);
}
app('Anjali'); 


//let and const 

let a = 23;
console.log(a);   

const b = 535;
console.log(b);  

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




