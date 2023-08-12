// console.log(this);
// function myFunction() {
//     console.log(this); // Inside a regular function, this refers to the global object or undefined (in strict mode).
// }
// myFunction();

//this keyword
// function sayGoodbye() {
//     console.log("Good bye! ", this); // Window
//   }
//   function sayHello() {
//     console.log("Helloo! ", this); // Window
//   console.log("new line");

//     sayGoodbye();
//   }
  
//   sayHello();

// 1. global context
// 2. function context
// 3. method context
// 4. constructor context

// class Person {
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

//     greet(){
//         console.log(`Hello everyone, my name is ${this} & I am ${this.age} year old`);
//     }
// }

// const person1=new Person("Vinod",27)
// console.log(person1);
// person1.greet()

// console.log(1=="1");
// console.log(1==="1");

// console.log(true==1);
// console.log(true===1);

// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.slice(1, 4); // Copies elements at index 1, 2, and 3
// console.log(newArray); // Output: [2, 3, 4]

// const originalArray = [1, 2, 3, 4, 5];
// let newArr=originalArray.slice(1)
// console.log(newArr);
// console.log(originalArray);




// // Remove 'banana' and 'cherry'
// const removedItems = fruits.splice(1, 2);
// console.log(fruits);         // Output: ['apple', 'date']
// console.log(removedItems);   // Output: ['banana', 'cherry']

// // Insert 'orange' and 'kiwi' at index 2
// fruits.splice(2, 0, 'orange', 'kiwi');
// console.log(fruits);         // Output: ['apple', 'date', 'orange', 'kiwi']

const fruits = ['apple', 'banana', 'cherry', 'date'];
const newArr=fruits.splice(1,1,"Mango")
console.log(newArr);
console.log(fruits);

//splice
// 1. it used to modify existing array,replacing elements or add new elements.
// 2. it return removed elements if any
// 3. it takes arguments like startIndex,deleteCount,elements to add.

// slice 
// 1. it doesnt't modify existing arr
// 2. it return new removed elements.
// 3. it takes argument like, startIndex & endIndex
// 4. used to extract some elemtns from array without modifying existong array.
