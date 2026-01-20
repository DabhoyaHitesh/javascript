// var , let and const -- line by line comparision
// var (ES5) 

var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
// b = 24; // never
//let
let temp = "abc";
//const
const temp_const = "Hello World !!"


//declarations and initialization
var d; //declare
var d = 12; // declare and initialize for first time
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
d = 24; // reassign
var d = "Hello" // redeclare
// temp_const = "Hello";


//scope (global, Block , functional)
var f = 23; // global scope
{
    var f = 25; // block scope
    console.log("block Scope" + f);
}
function abc() {
    var f = 30; // functional scope
    console.log("Functional Scope" + f());
}
abc();
console.log(f)

/////////// ==================== ///////////

let e = 23; // global scope
{
    let e = 25; // block scope
    console.log("block Scope" + e);
}
function abc() {
    let e = 30; // functional scope
    console.log("Functional Scope" + e);
}
abc();
console.log(e)


// Temporel Dead Zone (TDZ)
// TDZ not working on var
// console.log(temp_b);
// var temp_b = 24; // on var there is no TDZ

// console.log(j)
// let j = 12;



//Hoisting Imapact
// Hoisting --> when  you create a vaiable into js that braek into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d = undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck temp_d into line 70)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
//let variable not use before initialization
//if you use console.log before initialization that give you error;
//Hosting Impace on var , let ,const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/
// ex -1
// console.log(nm);
// let nm = "name";
//Answer on Error : Uncaught ReferenceError: Cannot access 'nm' before initialization
//Why  : first declare variable after the log

//ex -2 
// console.log(b);
// var b = "username";
//Answer on Error : undefined
//Why  : file in declare the before variable


//ex -3 
// var x = 1;
// {
//     var x =2;
// }
// console.log(x);
//Answer on Error : 2
//Why  : because declare block scope


//ex -4 
// let h = 10;
// {
//     let h = 20;
//     console.log("inside:", h);
// }
// console.log("Outside:", h);
//Answer on Error : inside: 20
//                  Outside: 10
//Why  : it is functional scope

//ex -5 
const person = {name:"demo", gender: "male"};
// let user =  {name:"demo", gender: "male"}
// console.log(person);
// person.name = "user";
// person= {};
//Answer on Error : Uncaught TypeError: Assignment to constant variable.
//Why  : using const variable not change the value

