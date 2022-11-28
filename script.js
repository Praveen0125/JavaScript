        //         recursion

// function pow(x,n) {
//     if (n==1) {
//         return x;
//     }
//     else {
//         return x*pow(x,n-1);
//     }
// }
// alert(pow(8,6));

        //         closures

// var add = (function(){
//     var counter = 0
//     return function() {counter+= 1; return counter}
// })();
// add();              //1
// add();              //2
// add();              //3

        //         new functions rarely used

// let sum = new Function('a', 'b', 'return a+b');  // capital f in function and parameters in ''.
// alert(sum(20,30))

        //         arrow fumction

// hello = () => {
//     document.getElementById('demo').innerHTML += this;
// }
// window.addEventListener('load', hello)
// document.getElementById('btn').addEventListener('click', hello)

        //         rest parameters

// function fun(...input) {
//     let sum = 0;
//     for(let i of input){
//         sum+= i;
//     }   
//     return sum;
// }

// alert(fun(1,2,4))
// alert(fun(1,2,5,7))
// alert(fun(1,2,8,9))
// alert(fun(1,2,10,17,19))
// alert(fun(1,2))

        //         spread operator
    
// let arr = [1,2,3]
// let arr2 = [4,5,6]
// arr = [...arr,...arr2]
// console.log(arr);

        //         set timeout
        
// function sayhi() {
//     alert("Hello")
// }
// setTimeout(sayhi, 8000) //after 8 seconds

        //         set interval

// let timerid = setInterval(() => alert('tick'), 1000); // comes after every 3 seconds
// setTimeout(() => {clearInterval(timerid); alert('stop')}, 17000) // stop after 15/at 17 seconds

        //         function binding

// let user ={
//     firstName: "Prav"
// }
// function func() {
//     alert(this.firstName);
// }
// // func();                       // will not work
// let funcUser = func.bind(user);
// funcUser();                      // will work

        // prototype - inheritance outdated method

// let pet = {
//     eats: true
// }
// let dogs = {
//     jumps: true
// }
// dogs.__proto__ = pet;   // inherits the propery of pet

// alert(dogs.jumps);
// alert(dogs.eats);
// alert(pet.jumps);       // undefined
// alert(pet.eats);

        // prototype using object- create , getPrototypeOf, setPrototypeOf

let pet = {
    eats: true
}
let dog = Object.create(pet);           //copys method of pet
alert(dog.eats);                        //true
alert(Object.getPrototypeOf(dog)==pet)  //true
Object.setPrototypeOf(dog, {});         //set methods null
alert(dog.eats);                        //undefined/false

