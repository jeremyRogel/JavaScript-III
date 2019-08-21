/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: window ( or global) binding is when the 'this' value is in reference to the window/console object. if its used in the global spectrum then it will reference the entire window as the object.

* 2. Implicit Binding: implicit binding is when the 'this' value is referencing the object before the dot if a function is being called by a dot. It is one of the most commonly used uses of 'this' as it is clear in what it is referencing. Look left of the dot! that is what the 'this' keyword refers to.

* 3. New Binding: used in constructor functions, it constructs a new object.

* 4. Explicit Binding: refers to using the 'this' keyword explicitly by using the .call argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function ghost(){
//     console.log(this.boo);
// }
// ghost();
// const boo = '👻';


// // Principle 2

// // code example for Implicit Binding
// let myGhost = {
//     name: 'Casper',
//     boo: 'boooooooo! 👻',
//     ghost: function(){
//         console.log(this.boo);
//     }
// }

// myGhost.ghost();// invoking the function here


// // Principle 3

// // code example for New Binding   
// function Ghost(saying){

// }

// console.log


// // Principle 4

// // code example for Explicit Binding

// function ghost(){
//     console.log(this.boo);
// }

// let myGhost ={
//     name: 'Casper',
//     boo: 'boooooooo! 👻'
// }

// ghost.call(myGhost); //invoking the function here




// function Food(favorite){
//     this.thing = favorite;
// }