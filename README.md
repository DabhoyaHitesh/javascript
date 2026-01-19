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

<h2>6. Summary Table</h2>

<table>
  <tr>
    <th>Feature</th>
    <th>var</th>
    <th>let</th>
    <th>const</th>
  </tr>
  <tr>
    <td>Scope</td>
    <td>Function</td>
    <td>Block</td>
    <td>Block</td>
  </tr>
  <tr>
    <td>Redeclaration</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Reassignment</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Hoisting Value</td>
    <td>undefined</td>
    <td>Error</td>
    <td>Error</td>
  </tr>
  <tr>
    <td>Temporal Dead Zone</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
</table>


</body>
</html>
