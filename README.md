<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>var vs let vs const - JavaScript</title>
</head>
<body>

<h1>JavaScript: <code>var</code>, <code>let</code> and <code>const</code></h1>

<p>This document explains the differences between <code>var</code>, <code>let</code>, and <code>const</code> in JavaScript with examples, scope behavior, hoisting, and the Temporal Dead Zone (TDZ).</p>

<hr />

<h2>1. Variable Declaration Examples</h2>

<pre>
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";

b = 24; // ❌ Bad practice (creates implicit global variable)
</pre>

<ul>
  <li><code>var</code> allows variable names starting with <code>_</code> and <code>$</code></li>
  <li>Assigning without <code>var / let / const</code> creates a global variable (not recommended)</li>
</ul>

<pre>
let temp = "abc";
const temp_const = "Hello World !!";
</pre>

<ul>
  <li><code>let</code> and <code>const</code> are introduced in ES6</li>
  <li><code>const</code> variables cannot be reassigned</li>
</ul>

<hr />

<h2>2. Declaration and Initialization</h2>

<pre>
var d;        // declaration
var d = 12;   // declaration + initialization
d = 24;       // reassignment
var d = "Hello"; // redeclaration (allowed in var)
</pre>

<ul>
  <li><code>var</code> can be redeclared and reassigned</li>
  <li><code>var</code> variables are added to the <code>window</code> object</li>
</ul>

<pre>
const temp_const = "Hello";
// temp_const = "Hi"; ❌ Error
</pre>

<hr />

<h2>3. Scope Comparison</h2>

<h3>Using <code>var</code></h3>

<pre>
var f = 23; // global scope

{
  var f = 25; // NOT block scoped
  console.log("Block Scope " + f);
}

function abc() {
  var f = 30; // function scope
  console.log("Function Scope " + f);
}

abc();
console.log(f);
</pre>

<ul>
  <li><code>var</code> does NOT support block scope</li>
  <li><code>var</code> is function scoped</li>
</ul>

<h3>Using <code>let</code></h3>

<pre>
let e = 23; // global scope

{
  let e = 25; // block scope
  console.log("Block Scope " + e);
}

function abc() {
  let e = 30; // function scope
  console.log("Function Scope " + e);
}

abc();
console.log(e);
</pre>

<ul>
  <li><code>let</code> supports block scope</li>
  <li>Each block has its own variable</li>
</ul>

<hr />

<h2>4. Temporal Dead Zone (TDZ)</h2>

<pre>
console.log(temp_b);
var temp_b = 24; // undefined (no TDZ)
</pre>

<pre>
console.log(j);
let j = 12; // ❌ ReferenceError (TDZ)
</pre>

<ul>
  <li>TDZ applies to <code>let</code> and <code>const</code></li>
  <li><code>var</code> does NOT have TDZ</li>
</ul>

<hr />

<h2>5. Hoisting Behavior</h2>

<pre>
var temp_d = 12;
</pre>

<p>Internally, JavaScript treats it as:</p>

<pre>
var temp_d = undefined; // hoisted
temp_d = 12;           // initialization
</pre>

<pre>
let temp_d_let = 24;
</pre>

<ul>
  <li><code>var</code> → hoisted and initialized with <code>undefined</code></li>
  <li><code>let</code> → hoisted but NOT initialized (TDZ)</li>
  <li><code>const</code> → hoisted but NOT initialized (TDZ)</li>
</ul>

<hr />


    <h1>JavaScript Data Types</h1>
    <p>
        This document explains <strong>JavaScript data types</strong> and the difference between
        <strong>Primitive</strong> and <strong>Non-Primitive (Reference)</strong> data types.
        JavaScript is a <strong>dynamically typed language</strong>, meaning variable types are
        determined at runtime.
    </p>

    <h2>1. Primitive Data Types</h2>
    <p>
        Primitive data types store <strong>actual values</strong>.
        When copied, a <strong>new independent value</strong> is created.
    </p>

    <h3>Primitive Types</h3>
    <ul>
        <li>string</li>
        <li>number</li>
        <li>boolean</li>
        <li>null</li>
        <li>undefined</li>
        <li>symbol</li>
        <li>bigint</li>
    </ul>

    <h3>Example</h3>
    <pre><code>
let a = 12;
let b = a;   // value copy
a = a + 3;
    </code></pre>

    <h3>String</h3>
    <pre><code>
let d = "name";
d = 'username';
d = `firstname`;
    </code></pre>

    <h3>Number</h3>
    <pre><code>
let e = 12;
e = 12.25;
    </code></pre>

    <h3>Boolean</h3>
    <pre><code>
let f = true;
f = false;
    </code></pre>

    <h3>Null</h3>
    <pre><code>
let g = null;
    </code></pre>

    <h3>Undefined</h3>
    <pre><code>
let h;
    </code></pre>

    <h3>Symbol</h3>
    <pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid");

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "001";
    </code></pre>

    <h3>BigInt</h3>
    <pre><code>
let number = 9007199254740991;
number = number + 6;

let num2 = 9007199254740991n;
num2 + 3n;
    </code></pre>

    <h2>2. Non-Primitive (Reference) Data Types</h2>
    <p>
        Non-primitive data types store <strong>references</strong> to memory.
        When copied, both variables point to the <strong>same reference</strong>.
    </p>

    <h3>Non-Primitive Types</h3>
    <ul>
        <li>Array</li>
        <li>Object</li>
        <li>Function</li>
    </ul>

    <h3>Array Example</h3>
    <pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop();
    </code></pre>

    <h3>Object Example</h3>
    <pre><code>
let obj = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
    </code></pre>

    <h3>Function Example</h3>
    <pre><code>
function name(params) {}
    </code></pre>

    <h2>Key Concepts</h2>
    <ul>
        <li>Primitive Types → Copy by value</li>
        <li>Non-Primitive Types → Copy by reference</li>
        <li>Dynamic Typing → Type decided at runtime</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
        Understanding JavaScript data types is essential for writing clean,
        efficient, and bug-free code.
    </p>

    <h1>📘 JavaScript Operators</h1>

<p>This document explains different types of JavaScript operators with examples.</p>

<hr>

<h2>1️⃣ Arithmetic Operators</h2>
<ul>
    <li><b>+</b> Addition / Concatenation<br>
        Example: <code>1 + 2 → 3</code>, <code>"user" + "name" → username</code>
    </li>
    <li><b>-</b> Subtraction<br>
        Example: <code>2 - 1 → 1</code>
    </li>
    <li><b>*</b> Multiplication<br>
        Example: <code>25 * 2 → 50</code>
    </li>
    <li><b>/</b> Division<br>
        Example: <code>240 / 2 → 120</code>
    </li>
    <li><b>%</b> Modulus (Remainder)<br>
        Example: <code>9 % 2 → 1</code>
    </li>
    <li><b>**</b> Exponentiation<br>
        Example: <code>2 ** 3 → 8</code>
    </li>
</ul>

<hr>

<h2>2️⃣ Comparison Operators</h2>
<p>Comparison operators always return <b>true</b> or <b>false</b>.</p>

<ul>
    <li><b>==</b> Equal to (value only)<br>
        Example: <code>12 == "12" → true</code>
    </li>
    <li><b>===</b> Strict equal (value + type)<br>
        Example: <code>12 === "12" → false</code>
    </li>
    <li><b>!=</b> Not equal<br>
        Example: <code>12 != 13 → true</code>
    </li>
    <li><b>!==</b> Strict not equal<br>
        Example: <code>12 !== "12" → true</code>
    </li>
    <li><b>&gt;, &lt;, &gt;=, &lt;=</b> Greater / Less comparisons</li>
</ul>

<hr>

<h2>3️⃣ Assignment Operators</h2>
<ul>
    <li><code>=</code> Assign value</li>
    <li><code>+=</code> Add and assign</li>
    <li><code>-=</code> Subtract and assign</li>
    <li><code>*=</code> Multiply and assign</li>
    <li><code>/=</code> Divide and assign</li>
    <li><code>%=</code> Remainder and assign</li>
</ul>

<hr>

<h2>4️⃣ Logical Operators</h2>
<ul>
    <li><b>&&</b> AND</li>
    <li><b>||</b> OR</li>
    <li><b>!</b> NOT</li>
</ul>

<p><b>Example:</b></p>
<pre>
true && false → false
true || false → true
!true → false
</pre>

<hr>

<h2>5️⃣ Unary Operators</h2>
<ul>
    <li><b>+</b> Convert string to number<br>
        Example: <code>+"5" → 5</code>
    </li>
    <li><b>-</b> Negative value</li>
    <li><b>!</b> Logical NOT</li>
    <li><b>typeof</b> Check data type</li>
    <li><b>++</b> Increment</li>
    <li><b>--</b> Decrement</li>
</ul>

<hr>

<h2>6️⃣ Ternary Operator</h2>
<p>Short form of if-else</p>

<pre>
condition ? value_if_true : value_if_false
</pre>

<p><b>Example:</b></p>
<pre>
let result = age >= 18 ? "Adult" : "Minor";
</pre>

<hr>

<h2>7️⃣ Truthy & Falsy Values</h2>
<p>Falsy values in JavaScript:</p>
<ul>
    <li>0</li>
    <li>"" (empty string)</li>
    <li>null</li>
    <li>undefined</li>
    <li>NaN</li>
    <li>false</li>
</ul>

<hr>

<h2>8️⃣ typeof vs instanceof</h2>
<ul>
    <li><b>typeof</b> → Used for primitive data types</li>
    <li><b>instanceof</b> → Used for reference data types</li>
</ul>

<pre>
typeof null → "object"   (JavaScript bug)
typeof [] → "object"
[] instanceof Array → true
</pre>

<hr>

<h2>✅ Conclusion</h2>
<p>
This README covers all major JavaScript operators with simple explanations and examples.
It is useful for beginners, interviews, and quick revision.
</p>




<h1>Control Flow Statements in JavaScript</h1>

<p>This project demonstrates the usage of JavaScript control flow statements such as
<b>if</b>, <b>if-else</b>, <b>else-if</b>, <b>switch-case</b>, and <b>early return patterns</b>,
along with practical examples.</p>

<hr>

<h2>1. If Statement</h2>
<p>The <code>if</code> statement executes code only when the condition is true.</p>

<pre>
if (12 < 13) {
    console.log(true);
}
</pre>

<p>If the condition is false, the code inside the block will not run.</p>

<hr>

<h2>2. If-Else Statement</h2>
<p>The <code>if-else</code> statement executes one block if the condition is true,
otherwise the <code>else</code> block runs.</p>

<pre>
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}
</pre>

<hr>

<h2>3. If – Else If – Else Statement</h2>
<p>Used when multiple conditions need to be checked.</p>

<pre>
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</pre>

<hr>

<h2>4. Switch Case Statement</h2>
<p>The <code>switch</code> statement compares a value against multiple cases.</p>

<pre>
switch ('First50') {
    case 'First50':
        console.log("50% off on First Order");
        break;
    case 'BoGo':
        console.log("Buy one get one");
        break;
    case 'BlackFriday':
        console.log("It's Black Friday Sale");
        break;
    default:
        console.log("Offer Not Valid");
}
</pre>

<hr>

<h2>5. Early Return Pattern</h2>
<p>Early return improves readability by returning results as soon as a condition is met.</p>

<pre>
function score2(value) {
    if (value < 60) return "Value is less than 60";
    else if (value < 70) return "Value is less than 70";
    else if (value < 80) return "Value is less than 80";
    else if (value < 90) return "Value is less than 90";
    else return "Value is more than 90";
}
</pre>

<hr>

<h2>6. Example 1: Switch Case without Break</h2>
<p>Demonstrates fall-through behavior when <code>break</code> is missing.</p>

<pre>
let A = 2;
switch ('A') {
    case '2':
        console.log("Two");
    case '3':
        console.log("Three");
}
</pre>

<hr>

<h2>7. Example 2: Student Grade Calculator</h2>
<p>Returns grades based on student marks.</p>

<pre>
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 33) return "D";
    else if (score >= 0) return "Fail";
    else return "Invalid Marks";
}
</pre>

<hr>

<h2>8. Example 3: Rock Paper Scissors Game</h2>
<p>A simple game logic using conditional statements.</p>

<pre>
function rps2(user, computer) {
    if (user === computer) return "it's a tie.";
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}
</pre>

<hr>

<h1>Loops in JavaScript</h1>

<p>This document explains different types of loops in JavaScript and demonstrates
how to use them with practical examples.</p>

<hr>

<h2>What are Loops?</h2>
<p>Loops are used to <b>repeat a block of code</b> until a specified condition becomes false.</p>

<p>Examples:</p>
<ul>
    <li>Printing numbers from 1 to 10</li>
    <li>Repeating a message multiple times</li>
</ul>

<hr>

<h2>1. For Loop</h2>
<p>The <code>for</code> loop is used when you know <b>how many times</b> you want to repeat the code.</p>

<h3>Syntax</h3>
<pre>
for (start; condition; change) {
    // code
}
</pre>

<h3>Example: Print 1 to 10</h3>
<pre>
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
</pre>

<h3>Example: Print 20 to 10</h3>
<pre>
for (let i = 20; i >= 10; i--) {
    console.log(i);
}
</pre>

<hr>

<h2>2. While Loop</h2>
<p>The <code>while</code> loop runs as long as the condition is true.</p>

<h3>Syntax</h3>
<pre>
start;
while (condition) {
    // code
    change;
}
</pre>

<h3>Example: Print 10 to 20</h3>
<pre>
let j = 10;
while (j <= 20) {
    console.log("j :", j);
    j++;
}
</pre>

<h3>Example: Print 20 to 10</h3>
<pre>
let k = 20;
while (k >= 10) {
    console.log("k :", k);
    k--;
}
</pre>

<h3>Example: Print 50 to 20</h3>
<pre>
let a = 50;
while (a >= 20) {
    console.log(a);
    a--;
}
</pre>

<h3>Example: Condition False (Loop Will Not Run)</h3>
<pre>
let b = 60;
while (b <= 20) {
    console.log("b :", b);
    b++;
}
</pre>

<h3>Example: Print Message Multiple Times</h3>
<pre>
let d = 0;
while (d < 5) {
    console.log("Hello");
    d++;
}
</pre>

<h3>Example: Print 50 to 60</h3>
<pre>
let f = 50;
while (f <= 60) {
    console.log("f :", f);
    f++;
}
</pre>

<hr>

<h2>3. Do-While Loop</h2>
<p>The <code>do-while</code> loop executes the code <b>at least once</b>,
even if the condition is false.</p>

<h3>Syntax</h3>
<pre>
do {
    // code
    change;
} while (condition);
</pre>

<h3>Example: Print 10 to 20</h3>
<pre>
let g = 10;
do {
    console.log("do while :", g);
    g++;
} while (g <= 20);
</pre>

<h3>Example: Print 10 to 1</h3>
<pre>
let h = 10;
do {
    console.log("do while :", h);
    h--;
} while (h >= 1);
</pre>

<hr>
<h1>JavaScript Loops – Practice Examples</h1>
<p>This file explains basic JavaScript loop examples using <b>for</b>, <b>while</b>, <b>break</b>, and <b>continue</b>.</p>

<hr>

<h2>Example 1: Print numbers from 1 to 10</h2>
<pre>
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
</pre>
<p><b>Output:</b> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>

<hr>

<h2>Example 2: Print numbers from 10 to 1 (while loop)</h2>
<pre>
let b = 10;
while (b >= 1) {
    console.log(b);
    b--;
}
</pre>
<p><b>Why:</b> The value decreases until it reaches 1.</p>

<hr>

<h2>Example 3: Print even numbers from 1 to 20</h2>
<pre>
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
</pre>
<p><b>Output:</b> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</p>

<hr>

<h2>Example 4: Print odd numbers from 1 to 15</h2>
<pre>
let i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
</pre>

<hr>

<h2>Example 5: Multiplication table of 5</h2>
<pre>
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
</pre>

<hr>

<h2>Example 6: Sum of numbers from 1 to 100</h2>
<pre>
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
</pre>
<p><b>Output:</b> 5050</p>

<hr>

<h2>Example 7: Numbers divisible by 3 (1 to 50)</h2>
<pre>
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
</pre>

<hr>

<h2>Example 8: Even or Odd (User Input)</h2>
<pre>
let num = prompt("Give a number");

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
</pre>

<hr>

<h2>Example 9: Numbers divisible by 3 or 5 (1 to 100)</h2>
<pre>
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
</pre>

<hr>

<h2>Example 10: Stop at first multiple of 7 (break)</h2>
<pre>
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}
</pre>

<hr>

<h2>Example 11: Skip multiples of 3 (continue)</h2>
<pre>
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
</pre>

<hr>

<h2>Example 12: Print first 5 odd numbers</h2>
<pre>
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    count++;

    if (count === 5) {
        break;
    }
}
</pre>
<p><b>Output:</b> 1, 3, 5, 7, 9</p>

<hr>

<h1>JavaScript Functions – Complete Guide</h1>
<p>This document explains JavaScript functions with examples including
<b>function types</b>, <b>parameters</b>, <b>default & rest</b>,
<b>first-class functions</b>, and <b>higher-order functions</b>.</p>

<hr>

<h2>What is a Function?</h2>
<ul>
    <li><b>What:</b> A function is a block of code that performs a specific task.</li>
    <li><b>Why:</b> To avoid code repetition and make code reusable.</li>
    <li><b>How:</b> Using function keyword, name, parameters, body, and return.</li>
</ul>

<hr>

<h2>Types of Functions</h2>

<h3>1. Function Declaration</h3>
<pre>
function abc() {}
</pre>

<h3>2. Function Expression</h3>
<pre>
let fnc = function () {}
</pre>

<h3>3. Arrow Function (Fat Arrow)</h3>
<pre>
let fnc1 = () => {}
</pre>

<hr>

<h2>Function Example</h2>
<pre>
function temp_cart() {
    console.log("adding product");
}

temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");
</pre>

<hr>

<h2>Parameters vs Arguments</h2>
<ul>
    <li><b>Parameters:</b> Variables written in function definition</li>
    <li><b>Arguments:</b> Actual values passed during function call</li>
</ul>

<pre>
function cart(product) {
    console.log(`Adding ${product}`);
}

cart("Laptop");
cart("MacBook");
</pre>

<hr>

<h2>Multiple Parameters</h2>
<pre>
function cart2(product, price) {
    console.log(`Adding ${product} at ${price}`);
}

cart2("Laptop", 50000);
cart2("MacBook", 250000);
</pre>

<hr>

<h2>Arrow Function Example</h2>
<pre>
let Result1 = (name, marks) => {
    console.log(`Adding ${name} at ${marks}`);
};
</pre>

<h2>Function Expression Example</h2>
<pre>
const Result2 = function (name, marks) {
    console.log(`Adding ${name} at ${marks}`);
};
</pre>

<hr>

<h2>Default Parameters</h2>
<pre>
function abcde(name, marks = 60) {
    console.log(name, marks);
}

abcde("Ram");
abcde("Rahul", 85);
</pre>

<hr>

<h2>Rest Parameters</h2>
<p>Used when passing multiple arguments without defining many parameters.</p>

<pre>
function def1(...numbers) {
    console.log(numbers);
}

def1(1,2,3,4,5,6);
</pre>

<h3>Rest Parameter Example</h3>
<pre>
function def2(...products) {
    console.log(products);
}

def2("Laptop", "TV", "Mobile", "AC");
</pre>

<hr>

<h2>Early Return</h2>
<pre>
function getValue(value) {
    if (value < 25) return "value is less than 25";
    else if (value < 50) return "value is less than 50";
    else if (value < 75) return "value is less than 75";
    return "value is 100 or more";
}

console.log(getValue(80));
</pre>

<hr>

<h2>First Class Functions</h2>
<p>In JavaScript, functions are treated like variables.</p>

<h3>1. Function Stored in Variable</h3>
<pre>
const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
};
</pre>

<h3>2. Function Passed as Argument</h3>
<pre>
function temp_b(fnc) {
    fnc();
}

temp_b(function () {
    console.log("First Class Function");
});
</pre>

<h3>3. Function Returned from Another Function</h3>
<pre>
function abcde() {
    return function () {
        console.log("Function returned from another function");
    };
}

abcde()();
</pre>

<hr>

<h2>Higher Order Function (HOF)</h2>
<p>
A Higher Order Function is a function that
<b>takes another function as an argument</b>
or <b>returns a function</b>.
</p>

<pre>
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

const multiply5 = multiply(5);
console.log(multiply5(3));
</pre>

<p><b>Output:</b> 15</p>

<hr>

<h1>JavaScript Function Concepts</h1>

<p>
This document explains important JavaScript concepts like
<strong>Pure & Impure Functions</strong>,
<strong>Closures</strong>,
<strong>Lexical Scope</strong>,
<strong>IIFE</strong>, and
<strong>Hoisting</strong>
with examples.
</p>

<hr>

<h2>1. Pure vs Impure Functions</h2>

<h3>Pure Function</h3>
<p>
A <strong>pure function</strong> always gives the same output for the same input
and does <strong>not modify any external (outside) state</strong>.
</p>

<pre><code>
let a = 10;

function abcd_pure() {
    console.log("Hello");
}
</code></pre>

<div class="note">
Pure function bahar na variables ne change nathi karti.
</div>

<h3>Impure Function</h3>
<p>
An <strong>impure function</strong> either:
</p>
<ul>
    <li>Modifies external state</li>
    <li>OR gives different output for the same input</li>
</ul>

<pre><code>
function abcd_impure() {
    a++;
    console.log(a);
}
</code></pre>

<div class="note">
Aa function bahar na variable <code>a</code> ne modify kare chhe — so it is impure.
</div>

<hr>

<h2>2. Closure Function</h2>

<p>
A <strong>closure</strong> is created when a function remembers and accesses
variables from its parent function even after the parent function has finished execution.
</p>

<pre><code>
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let fnc5 = outer();
fnc5();
</code></pre>

<div class="note">
Inner function parent function na variables ne access kare chhe — aa closure chhe.
</div>

<hr>

<h2>3. Lexical Scope</h2>

<p>
<strong>Lexical scope</strong> means a function can access variables defined
in its outer (parent) scope.
</p>

<pre><code>
function outer1() {
    let outer_var = "outer function variable";

    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var);

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
</code></pre>

<div class="note">
Nested functions parent variables ne access kari shake — aa lexical scope chhe.
</div>

<hr>

<h2>4. IIFE (Immediately Invoked Function Expression)</h2>

<p>
An <strong>IIFE</strong> is a function that runs immediately after it is defined.
</p>

<pre><code>
(function () {})();

(function () {
    console.log("This Is LIFE Function");
}());
</code></pre>

<div class="note">
Function declare karta j call thai jaye — IIFE.
</div>

<hr>

<h2>5. Hoisting</h2>

<p>
<strong>Hoisting</strong> allows function declarations to be called before they are defined.
</p>

<pre><code>
abcdef();

function abcdef() {
    console.log("This is Hosting function");
}
</code></pre>

<h3>Not Hoisted (Function Expression & Arrow Function)</h3>

<pre><code>
// hoistedFunction1();
// let hoistedFunction1 = function () {
//     console.log("Hoisted Function Expression called");
// }

// hoistedFunction2();
// let hoistedFunction2 = () => {
//     console.log("Hoisted Arrow Function called");
// }
</code></pre>

<div class="note">
Only function declarations are hoisted, not function expressions or arrow functions.
</div>

<hr>

<h2>Conclusion</h2>

<p>
These concepts are very important for understanding JavaScript behavior,
especially in interviews and real-world applications.
</p>

<h1>JavaScript Arrays</h1>

<p>
An <strong>Array</strong> is used to store multiple values in a single variable.
Arrays can store numbers, strings, or mixed data types.
</p>

<hr>

<h2>1. Creating an Array</h2>

<pre><code>
let arr = [1, 2, 3, 4];
</code></pre>

<p>Examples of arrays:</p>
<ul>
    <li><code>[1, 2, 3, 4, 5]</code></li>
    <li><code>["Hello", "A", "B", "C"]</code></li>
    <li><code>[2, "Bye", "Hello", 50]</code></li>
</ul>

<hr>

<h2>2. Accessing Array Values</h2>

<p>
Array index starts from <strong>0</strong>.
</p>

<pre><code>
arr[0]; // first value
arr[3]; // fourth value
arr[10]; // undefined
</code></pre>

<div class="note">
Position (index) starts from 0 → [0, 1, 2, 3]
</div>

<hr>

<h2>3. Modifying Array Values</h2>

<pre><code>
arr[0] = 10;
</code></pre>

<p>
This replaces the value at index <code>0</code>.
</p>

<hr>

<h2>4. Array Methods</h2>

<p>
Array methods are written as:
</p>

<pre><code>
array_name.method_name();
</code></pre>

<hr>

<h3>push() – Add value at the end</h3>

<pre><code>
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
</code></pre>

<div class="note">
Use case: Add new product to existing product list.
</div>

<hr>

<h3>pop() – Remove last value</h3>

<pre><code>
fruits.pop();
</code></pre>

<div class="note">
Use case: Remove last added product.
</div>

<hr>

<h3>shift() – Remove first value</h3>

<pre><code>
arr.shift();
</code></pre>

<div class="note">
Use case: Automatically remove old data.
</div>

<hr>

<h3>unshift() – Add value at the beginning</h3>

<pre><code>
arr.unshift(10);
</code></pre>

<div class="note">
Use case: Add latest data on top.
</div>

<hr>

<h2>5. splice() – Remove values from specific position</h2>

<p>
<code>splice(startIndex, deleteCount)</code>
</p>

<pre><code>
let e = [10, 20, 30, 40, 50];
e.splice(3, 2);
</code></pre>

<div class="note">
Use case: Delete multiple selected messages at once.
</div>

<hr>

<h2>6. slice() – Copy values into new array</h2>

<p>
<code>slice(startIndex, endIndex)</code><br>
Start index is included, end index is excluded.
</p>

<pre><code>
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
</code></pre>

<pre><code>
let products = ["Shirt", "Pant", "Jeans", "Socks", "Belt"];
let new_products = products.slice(1, 4);
</code></pre>

<div class="note">
Use case: Generate reports or save filtered data.
</div>

<hr>

<h2>7. splice vs slice</h2>

<ul>
    <li><strong>splice</strong> → modifies original array</li>
    <li><strong>slice</strong> → creates a new array</li>
</ul>

<hr>

<h2>8. reverse() – Reverse array order</h2>

<pre><code>
let g = [25, 30, 35, 40, 85];
g.reverse();
</code></pre>

<div class="note">
Use case: Show latest data first on frontend.
</div>

<hr>

<h2>9. sort() – Sort array</h2>

<h3>Default sort</h3>
<pre><code>
let h = [50, 20, 80, 10, 40];
h.sort();
</code></pre>

<h3>Ascending order</h3>
<pre><code>
let h = [11, 62, 3, 4, 25];
h.sort(function(a, b) {
    return a - b;
});
</code></pre>

<h3>Descending order</h3>
<pre><code>
let h = [11, 62, 3, 4, 25];
h.sort(function(a, b) {
    return b - a;
});
</code></pre>

<div class="note">
Use case: Sort product prices from low to high or high to low.
</div>

<hr>

<h2>Conclusion</h2>

<p>
Arrays and their methods are essential in JavaScript for handling data efficiently,
especially in real-world applications like product lists, reports, and UI updates.
</p>

<h1>📘 JavaScript Array & Methods Guide</h1>

<p>
This repository contains a complete and practical explanation of
<strong>JavaScript Arrays</strong> and their commonly used methods with
real-life examples.
</p>

<hr>

<h2>📌 Topics Covered</h2>
<ul>
  <li>Array Creation & Access</li>
  <li>push(), pop(), shift(), unshift()</li>
  <li>splice() vs slice()</li>
  <li>sort() & reverse()</li>
  <li>forEach()</li>
  <li>map()</li>
  <li>filter()</li>
  <li>reduce()</li>
  <li>find(), some(), every()</li>
  <li>Destructuring</li>
  <li>Spread Operator</li>
</ul>

<hr>

<h2>🧩 Array Basics</h2>
<pre>
let arr = [1, 2, 3, 4];
</pre>

<ul>
  <li>Index starts from <strong>0</strong></li>
  <li>Access value using <code>arr[index]</code></li>
  <li>Arrays can store mixed data types</li>
</ul>

<hr>

<h2>➕ push() & ➖ pop()</h2>
<pre>
let fruits = ["Apple", "Banana"];
fruits.push("Mango"); // Add at end
fruits.pop();         // Remove from end
</pre>

<p><strong>Use case:</strong> Product list, To-Do app</p>

<hr>

<h2>⬅ shift() & ➡ unshift()</h2>
<pre>
let queue = ["A", "B", "C"];
queue.shift();     // Remove first
queue.unshift("X"); // Add at first
</pre>

<p><strong>Use case:</strong> Queue systems, notifications</p>

<hr>

<h2>✂ splice()</h2>
<p>Modify the original array</p>
<pre>
let nums = [10, 20, 30, 40];
nums.splice(1, 2); // Removes 20, 30
</pre>

<hr>

<h2>📄 slice()</h2>
<p>Create a new array without changing original</p>
<pre>
let nums = [10, 20, 30, 40];
let copy = nums.slice(1, 3);
</pre>

<hr>

<h2>🔁 reverse()</h2>
<pre>
let levels = ["Easy", "Medium", "Hard"];
levels.reverse();
</pre>

<hr>

<h2>🔢 sort()</h2>
<pre>
let prices = [199, 49, 999];
prices.sort((a, b) => a - b);
</pre>

<p><strong>Note:</strong> Always use compare function for numbers</p>

<hr>

<h2>🔄 forEach()</h2>
<p>Loop through array values (no return)</p>
<pre>
arr.forEach(val => {
  console.log(val);
});
</pre>

<hr>

<h2>🧠 map()</h2>
<p>Create a new transformed array</p>
<pre>
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
</pre>

<hr>

<h2>🎯 filter()</h2>
<p>Create a new array based on condition</p>
<pre>
let prices = [200, 500, 800];
let expensive = prices.filter(p => p > 300);
</pre>

<hr>

<h2>🧮 reduce()</h2>
<p>Convert array into a single value</p>
<pre>
let nums = [10, 20, 30];
let total = nums.reduce((sum, n) => sum + n, 0);
</pre>

<hr>

<h2>🔍 find() vs filter()</h2>
<pre>
let users = ["A", "B", "C", "B"];
users.find(u => u === "B");   // "B"
users.filter(u => u === "B"); // ["B", "B"]
</pre>

<hr>

<h2>✅ some() & every()</h2>
<pre>
nums.some(n => n > 50);  // true / false
nums.every(n => n > 10); // true / false
</pre>

<hr>

<h2>📦 Destructuring</h2>
<pre>
let data = ["Hitesh", "Surat"];
let [name, city] = data;
</pre>

<hr>

<h2>🧩 Spread Operator</h2>
<pre>
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
</pre>

<hr>

<h2>🎓 Best For</h2>
<ul>
  <li>BCA / MCA Students</li>
  <li>JavaScript Beginners</li>
  <li>Interview Preparation</li>
  <li>Frontend Developers</li>
</ul>

<hr>

<h2>🚀 Author</h2>
<p>
<strong>Name:</strong> Hitesh Dabhoya <br>
<strong>Course:</strong> BCA <br>
<strong>Subject:</strong> JavaScript
</p>

<hr>
</body>
</html>

