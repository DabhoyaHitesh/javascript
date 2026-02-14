// functions
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression
let fnc = function () {}
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {}

 function temp_cart() {
    console.log("adding producat");
 }
 temp_cart("laptop");
 temp_cart("watch");
 temp_cart("mobile");

// parameters vs arguments
// parameters are the names listed in the function definition(params --> () ni  andar lakheli values)
// arguments are the real values passed to the function(args --> function call karti () ni adar lakheli(pass) kareli values)
function cart(producat) { // producat -- params
    console.log(`Adding ${producat}`)
}
cart("laptop");  // laptop -- args
cart("Mac Book");
cart("S25 ultra");

function cart2(producat, price) { // producat -- params
    console.log(`Adding ${producat} at ${price}`)
}
cart2("laptop", 50000);  // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

function Result(name, marks) {
     console.log(`Adding ${name} at ${marks}`)
}
Result("Ram", 50);  
Result("Rahul", 87);
Result("Bhavesh", 95);

// convert into  arrow function
// let fnc = () => {}
let Result1 = (name, marks) => {
     console.log(`Adding ${name} at ${marks}`)
}
Result1("arrow function -- Ram", 50);   
// convert into  function expression
// let fnc = function (){}
const Result2 = function (name, marks) {
    console.log(`Adding ${name} at ${marks}`)
}
Result2("function expression -- Ram", 50);   

// Default, rest parameters in function
// Default
function abcd(b = 10, price = 0) {
    console.log(price, b)
}
abcd(15);
// Example
function abcde(name, marks = 60) {
    console.log(name, marks)
}
abcd("ram");

// rest
// Jayare function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni anadar lakhvama aave chhe)
function  def(a,b,c,d,e,f,g) {
    console.log(a,b,c,d,e,f,g)
}
def(1,2,3,4,5,6,7);

function def1(...number) { // ...number -- rest params
    console.log(number);
}
def1(1,2,3,4,5,6,7,8,9,10);

// Example
function def2(...product) { // ...number -- rest params
    console.log(product);
}
def1("laptop", "T.V.", "Mobile", "A.C.");

// early return --> function mathi jaldi bahar nikalva mate
function getValue1(value) {
    if (value < 25) return "value is less than 25.";
    else if (value < 50) return "value is less than 50.";
    else if (value < 75) return "value is less than 75.";
    return "value is 100 or more.";   
}
let result = getValue1(80);
console.log(result);

// first Class Function and their types:
// function can be treated as variables
// let temp_a = function(){} -first class function
const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
} 
cart5 ("function expression - s25 ultra", 69000);

// function can be passed as arguments to othe functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});

// function can be returned from other functions
function abcde() {
    return function () {
        console.log("function return other function")
    };
}
// abcde();
abcde()(); // call a function that return other function


// higher order function (Hof)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

function multiply(x) {
  return function (y) {
    return x * y;
  };
}
const multiply5 = multiply(5);
console.log(multiply5(3));


//pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let a = 10;
function abcd_pure() {
     console.log("Hello");
}
// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare ) 
function abcd_impure() {
    a++;
    console.log(a);
}

// closure function
// function je potana parent function na variables ne access kari shake (return thava valo function use karshe parent function na koi variable)  (function within function)
function outer() {
    let count = 0;
    function inner() {
        count++; // accesssing outer(parent) function variable
        console.log(count);
    }
    return inner;
}
let fnc5 = outer();
fnc5();

// lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
    let outer_var = "outer function variable";
    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var); // outer1 function variable write in console log
        function most_inner() {
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most inner function variable";
            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();
}
outer1();


// Life - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye

(function (){
    console.log("This Is LIFE Function");
}())

// Hosting in function
abcdef();

function abcdef(){
    console.log("This is Hosting function ");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//  console.log("Hoisted Function Expression called");
// }

// hoistedFunction2();
// let hoistedFunction2 = () => {
//  console.log("Hoisted Arrow Function  called");
// }

// ********************************* example ********************************
//Example 1 :
//What's the difference between function declaration and function expression in terms of hoisting?

//Answer : Function declarations are stored in memory during the creation phase.Function expressions are treated like variables → only hoisted as undefined.

// //Example 2 :
greet();
function greet(){
    console.log("Hello!");
}
// //Answer : Hello!
// //Why : greet() is a function declaration.Fully hoisted → safe to call before definition



// // Example 3: 
// //Convert normal function to Arrow Function
function add(a, b){
    return a + b;
}
// //Answer : add(2,5) = 7
// //How :Removed function keyword Used => Implicit return for single expression


// // Example 4: 
// //Identify what is parms and what is args
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");
// //Answer : Welcome user
// //Why :Parameter → variable in function definition Argument → actual value passed to function


// // Example 5: 
// //how many parameters and args
function temp (a, b, c){
    console.log(a,b,c);
}
temp(1, 2)
// //Answer : 1 2 undefined
// //Why :Missing arguments become undefined


// // Example 6: 
// //Predict the output
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
// //Answer : Hello Guest
// //Why :Default parameter used when no argument is passed


// // Example 7: 
// //what is ... operator and why use it  in function
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5)
// //Answer : (5) [1, 2, 3, 4, 5]
// //Why :...numbers = rest operator Collects multiple arguments into an array


// // Example 8: 
// //Use rest Parameters to accept any number of scores and return the total
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
calculateTotal(10, 20 ,30 ,40 ,50)
let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)
// //Answer : calculateTotal(10,20,30,40,50)
// //          150
// //Why :forEach safely iterates values No out-of-range access


// Example 9 : 
//Fix the function using early return
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}
//Answer : checkAge(21) Access Granted
//Why :Early return avoids unnecessary else Cleaner & more readable


// // Example 10: 
// //What is the return value of above function
function f(){ return;}
// //Answer : undefined
// //Why :return; without value → returns undefined

// Example 11: 
//What does is mean when we say "functions are first-class citizens"?
// Answer : Functions in JavaScript are treated like values.
// //Why :Because functions can:Be assigned to variables,passed as arguments,returned from other functions,stored in arrays/objects.

// Example 12: 
//Can You assign a function to a variable and then all it?
let h = function(){console.log("Hello");}
h();
// Answer : Hello
// //Why :Function is assigned to variable a

// Example 13 :
// Pass a function into another function and execute it
function abcdefg(val){
    val();
}
abcdefg(function(){
    console.log("Hello");
});
// Answer : Hello
// Why : Functions can be passed as arguments (callback)
// How : val() executes the passed function

// Example 14 :
// What is Higher Order Function?
// Answer : A function that takes another function as argument OR returns a function
// Why : Because functions are first-class citizens


// Example 15 :
// Identify higher order function
[1,2,3].map(function(x){
    return x * 2;
}); 
// Answer : 
// Why : map() accepts a function as an argument


// Example 16 :
// Pure or Impure function?
let total = 5;
function num(num){
    total += num;
}
num(3);
// Answer : 8
// Why : It modifies external variable and causes side effects


// // Example 17 :
// // Convert impure function into pure function
let total1 = 5 ;
function numPure(total1, num){
    return total1 + num;
}
let newTotal = numPure(total1, 3);
// // Answer : 8
// // Why : No external dependency, same input gives same output


// // Example 18 :
// // What is Closure? When is it created?
//EXAMPLE
 // Example:
function outerFunc() {
    let outerVar = "I am from outer function";
    function innerFunc() {
        console.log(outerVar);
    }
    return innerFunc;
}
let closureFunc = outerFunc();
closureFunc();
// // Answer : I am from outer function


// // Example 19 :
// // What's logged?
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
// // Answer : 1, 2
// // Why : Closure remembers the value of count


// // Example 20 :
// // Convert function into IIFE
(function(){
    console.log("Initialized");
})();
// // Answer : Initialized
// // Why : IIFE runs immediately and avoids global scope pollution


// // Example 21 :
// // What is the use of IIFE?
let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})();
fun.setScore(10);
fun.getScore();
// // Answer : 10
// // Why : IIFE creates private variables using closure


// // Example 22 :
// // What will be the output and why?
// temp_var();
// var temp_var = function(){
//     console.log("Hello");
// }
// // Answer : TypeError (temp_var is not a function)
// // Why : Function expression is not hoisted


// // Example 23 :
// // What will be the output and why?
temp_var();
function temp_var(){
    console.log("Hello");
}
// // Answer : Hello
// // Why : Function declaration is fully hoisted



// ****************************************** examples ******************************************

// Example 1 :
// 1. `.find()` – First even number **Real life:** Find first available even seat number
const seats = [3, 5, 8, 10, 7];
const firstEvenSeat = seats.find(seat => seat % 2 === 0);

// Answer : 8
// Why : .find() returns the FIRST element that satisfies the condition

// Example 2 :
// 2. `.some()` – Any even number? **Real life:** Check if any VIP seat exists
const seats1 = [3, 5, 7, 9];
const hasEvenSeat = seats1.some(seat => seat % 2 === 0);

// Answer : False
// Why : .some() returns true only if AT LEAST ONE element matches the condition


// Example 3 :
//3. `.find()` – First passing mark  **Real life:** Find first student who passed
const marks = [25, 35, 40, 60];
const firstPass = marks.find(mark => mark >= 40);

// Answer : 40
// Why : .find() stops and returns the first value that meets the condition

// Example 4 :
// 4. `.some()` – Any failed student? **Real life:** Check if re-test is needed
const marks1 = [60, 70, 55, 30];
const hasFail = marks.some(mark => mark < 40);

// Answer : true
// Why : .some() checks if any value satisfies the condition


 // Example 5 :
 //5. `.find()` – First affordable product **Real life:** Shopping app price filter
const prices = [1500, 1200, 800, 2000];
const affordable = prices.find(price => price <= 1000);

// Answer : 800
// Why : .find() returns the first matching element

// Example 6 :
// 6. `.some()` – Any discount item? **Real life:** Show discount banner
const prices1 = [500, 800, 1200, 300];
const hasDiscountItem = prices.some(price => price < 500);

// Answer : False
// Why : At least one item (300) matches the condition


// Example 7 :
// 7. `.find()` – First long word **Real life:** Auto-suggestion keyword
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWord = words.find(word => word.length > 5);

// Answer : "javascript"
// Why : It is the first word whose length is greater than 5


// Example 8 :
// 8. `.some()` – Any empty input? **Real life:** Form validation
const inputs = ['name', 'email', '', 'password'];
const hasEmpty = inputs.some(input => input === '');

// Answer : true
// Why : .some() returns true when at least one empty string is found


// Example 9 :
// 9. `.find()` – First high transaction **Real life:** Fraud detection
const transactions = [200, 500, 1200, 3000, 400];
const highTransaction = transactions.find(amount => amount > 1000);

// Answer : 1200
// Why : .find() returns the first value greater than 1000


// Example 10 :
// 10. `.some()` – System alert check **Real life:** Check if any value exceeds limit
const temperatures = [30, 32, 35, 42, 36];
const isOverheated = temperatures.some(temp => temp > 40);

// Answer : true
// Why : Temperature 42 exceeds the limit







