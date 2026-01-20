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

    <p><strong>Happy Coding 🚀</strong></p>

</body>
</html>
