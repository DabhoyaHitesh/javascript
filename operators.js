// operators
// Arithmetic, comparison, logical, assignment, unary, ternary 
// Arithmetic:
//+, -, /,  *, **,
// + --> Add and concatenation
// ex. 1+2, "user" + "name"
//output : 3 , username
// -
// ex. 2 - 1
//output : 1
// /,*
// ex. 240/2, 25*2// % (modulas) (sheshfal)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square) (exposination) 
// // ex. 2**3 --> 8


//Comparison (ans: true, false)
// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" (check type and value, strict comparaison) 
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison) 
// !==
// ex. 12!== "12" (reverse of ===) 
// >=
// ex. 22 >= 22
// <=
// ex. 13 <= 13
// <
// ex. 12 < 113, 12 < 9, 22 < 22 
// >
// ex. 12 > 113, 12 > 9, 13 > 13


// assignment
// =
// give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
//ex. a -= 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)


// logical
// && (AND)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false  12<10 && 14 < 15 --> false
// ture && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true 
// false || true --> true
// ture || false --> true
// false || false --> false

// ! (NOT)
// ex. true --> false
// false --> true
// !12 --> false --> !!12 --> true

// Unary Oprator
// + - ! typeof ++
// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
//-
// ex. -5
// !
// ex. 12 --> false
// typeof
// ex. typeof "name" --> string
// ++           
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. a++ + a => 26
// --
// ex. let a = 3;
// a--
// a++


// Ternary
// ? : 
// condition ? true thase to print thasde : false thase to print thase
// let a = 12>13 ? console.log("true"): console.log("false");


// typeof null --> object
// typeof [] --> objectlet a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo



//examples ===========================================

//Example 1 :
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}
//output : Both are greater than 5
//why : both condition true

//Example 2 :
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}
//output : Acess granted
//why : one condition true

//Example 3 :
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}
//output : Pleasant day
//why : condition false

//Example 4 :
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}
//output : Falsy value
//why : 0 is falsy value

//Example 5 :
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
//output : Grade: C
//why : score 78 between 70 to 79

//Example 6 :
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
//output : Status: Gold
//why : points 120 greater than 100

//Example 7 :
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("Access:", access);
//output : Access: Deny
//why : hasToken is false

//Example 8 :
let b = 5;
b++;
console.log(b);
//output : 6
//why : b value increase by 1

//Example 9 :
let c = 8;
++c;
console.log(c);
//output : 9
//why : c value increase by 1

//Example 10 :
let j = 4;
let k = j++;
console.log(j, k);
//output : 5 4
//why : j value increase by 1 but k get old value of j

//Example 11 :
let l = 4;
let m = ++b;
console.log(l, m);
//output : 4 5
//why : l get old value of l but m get increased value of l

//Example 12 :
let n = 10;
console.log(n--);
console.log(n);
//output : 10
//9
//why : first print old value of n then decrease by 1

//Example 13 :
let o = 5;
let result = o++ + ++o;
console.log(result);
//output : 12
//why : first o++ = 5 then ++o = 7 then 5 + 7 = 12

//Example 14 :
let likes = 100;
function likePost(){
result = ++likes;
}
console.log(likePost());
console.log(likes);
//output : undefined
//output : 101
//why : first call likePost function that increase likes by 1 but function has no return value so undefined print first then likes value print

//Example 15 :
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
//output : Matched
//why : first compare count-- value that is 5 so condition true then decrease by 1
