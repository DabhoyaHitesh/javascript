// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// Dom Tree Structure:
// Node --> Element (ex. h1, p, b, i ) text (ex. lorem), comment, Tags


// Dom Manipulation - change body or website using
// select element from html
// change text
// change html
// change css
// change attribute
// event listeners

// Selecting elements
// getElementById
let a = document.getElementById("abc");
console.log(a);
// console.dir(a);

// getElemenetByClassName
let b = document.getElementsByClassName("abc");
console.dir(b);

// getElememntByTagName
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);

//querySelector and querySelectorAll
// most used in project and used by copany
let c = document.querySelector("h1");// -- only select first element that find in your html
console.dir(c);

let d = document.querySelectorAll("h1") // select all elem ents in your html
console.log(d);

// Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

e.textContent  = "h1 tag"

e.innerHTML = "<i>first h1 tag</i>"
// e.outerHTML = "<i>h1 with outertext</i>"
// e.outerHTML = "h1 with outertext"

// outer vs inner
// innerText -- show text between tag --0 ignore tag
// outerText -- show text between tag --0 remove tag

// innerText -- show text between tag -- not tag
// outerHTML -- show text with tag


// --------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute 
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", info)  — give value of href attribute

// link.href="https://www.google.com/" 
// element.setAttribute("name", "change") 
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// // element.removeAttribute("name")
link.removeAttribute("href")
link.removeAttribute("target")

// -------------------------------------
// Dynamic DOM Manipulation
// ctrateElement, appendChild, removeChild, prepend

// createElement
let pre_tag = document.createElement("pre");
console.log(pre_tag);
pre_tag.textContent = "Hello Pre tag"
// append  /  prepend
// document.querySelector("body").append(pre_tag); // add tag into last place in body
document.querySelector("body").prepend(pre_tag); // add tag into first place in body

// remove
let remove_h1 = document.querySelector("#abc")
remove_h1.remove();


// appendChild
let div_h1 = document.createElement("div");
div_h1.textContent = "inner Div Tag create with JS";
document.querySelector(".box").appendChild(div_h1)




// --------------------------------------------
//  Style Updates via .style and classList (add, remove, toggle)
let h1 = document.querySelector("h1"); 
h1.style.color = "red";  
h1.style.backgroundColor = "black"; 
h1.style.fontFamily="sherif"; 
h1.style.textTransform = "capitalize";

// ClassList -- add
let box = document.querySelector(".box1");
console.dir(box);
box.classList.add("box-style");
console.dir(box);

// remove
box.classList.remove("box1");

// toggle -- class --> avialble --> remove it
//           class not avialable --> add it
// box.classList.toggle("box-style");


// ============================================================
// ANSWERS TO DOM QUESTIONS AND TASKS
// ============================================================

/*
1. WHAT IS THE DOM? HOW DOES IT REPRESENT THE HTML STRUCTURE?
   - DOM (Document Object Model) is a programming interface for web documents
   - It represents the page as a tree of objects that can be modified
   - HTML structure becomes a hierarchical tree: Document > html > body > elements
   - Each element, attribute, and text becomes a node in the tree
   - Allows JavaScript to dynamically access and modify HTML content
*/

/*
2. TYPES OF NODES IN THE DOM TREE:
   - Element Node: HTML tags like <div>, <p>, <h1>, <span> (most common)
   - Text Node: Text content between opening and closing tags
   - Attribute Node: Attributes of elements (id, class, href, etc.)
   - Comment Node: <!-- comments in HTML -->
   - Document Node: The root node representing the entire document
*/

/*
3. DIFFERENCE BETWEEN ELEMENT NODE AND TEXT NODE:
   - Element Node: Represents HTML tags/elements themselves
   - Text Node: Represents the text content inside elements
   Example: <p>Hello World</p>
   - <p> is an element node
   - "Hello World" is a text node (child of the p element node)
*/

/*
4. INSPECTING HTML: <div>Hello<span>World</span></div>
   Structure:
   - div (element node)
     ├── "Hello" (text node)
     └── span (element node)
         └── "World" (text node)
*/

/*
5. DIFFERENCE BETWEEN getElementById AND querySelector:
   - getElementById: 
     * Selects element by its ID attribute
     * Returns single element or null
     * Slightly faster, more specific
     Example: document.getElementById("myId")
   
   - querySelector:
     * Uses CSS selectors (more flexible)
     * Returns first matching element
     * Can select by ID, class, attribute, etc.
     Example: document.querySelector("#myId") or document.querySelector(".myClass")
*/

/*
6. WHAT DOES getElementsByClassName RETURN? IS IT AN ARRAY?
   - Returns a HTMLCollection (live collection, not an array)
   - Not a true array but array-like with .length and index access
   - Updates automatically when DOM changes
   - Need to convert to array using Array.from() or [...collection] to use array methods
*/

// 7. SELECT ALL BUTTONS WITH CLASS "buy-now"
let buyNowButtons = document.querySelectorAll("button.buy-now");
console.log("All buy-now buttons:", buyNowButtons);

// ============================================================
// PRACTICAL TASKS
// ============================================================

// T1: SELECT HEADING BY ID AND CHANGE TEXT TO "Welcome to JS DOM"
// HTML needed: <h1 id="page-heading">Old Heading</h1>
let heading = document.getElementById("page-heading");
if (heading) {
    heading.textContent = "Welcome to JS DOM";
}

// T2: SELECT ALL <li> ELEMENTS AND PRINT THEIR TEXT USING LOOP
// HTML needed: <ul><li>Item 1</li><li>Item 2</li></ul>
let list = document.querySelectorAll("li");
console.log("=== T2: List Items ===");

// Method 1: Using forEach
list.forEach((val) => {
    console.log(val.textContent);
});

// Method 2: Using for loop
for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
}

/*
10. DIFFERENCE BETWEEN innerText, textContent, AND innerHTML:
    - innerText: Returns visible text only, respects CSS styling (hidden elements excluded)
    - textContent: Returns all text content including hidden, ignores CSS
    - innerHTML: Returns HTML code (tags + text)
    
    Example: <p>Hello <b>World</b></p>
    - innerText: "Hello World"
    - textContent: "Hello World"
    - innerHTML: "Hello <b>World</b>"
*/

/*
11. WHEN TO USE textContent INSTEAD OF innerHTML:
    - Use textContent when you want to insert plain text (safer, no HTML parsing)
    - Use innerHTML only when you need to insert HTML code
    - textContent is faster and prevents XSS (Cross-Site Scripting) attacks
    - If inserting user input, always use textContent
*/

// T3: SELECT PARAGRAPH AND REPLACE CONTENT WITH <b>Updated</b> BY JAVASCRIPT
// HTML needed: <p id="para">Old content</p>
let para = document.querySelector("p");
if (para) {
    para.innerHTML = "<b>Updated</b>";
    // or para.textContent = "Updated" (without <b> formatting)
}

/*
13. HOW TO GET THE src OF AN IMAGE USING JAVASCRIPT:
    Method 1: Using getAttribute
    let imgSrc = document.querySelector("img").getAttribute("src");
    
    Method 2: Direct property access
    let imgSrc = document.querySelector("img").src;
*/
let img = document.querySelector("img");
if (img) {
    let imageSrc = img.src; // or img.getAttribute("src")
    console.log("Image source:", imageSrc);
}

/*
14. WHAT DOES setAttribute() DO?
    - Sets or updates an attribute of an HTML element
    - Syntax: element.setAttribute("attributeName", "value")
    - Creates the attribute if it doesn't exist, updates if it does
    - Works with any HTML attribute (id, class, data-*, custom attributes, etc.)
*/

// 15. ADD TITLE ATTRIBUTE TO A DIV DYNAMICALLY
let myDiv = document.querySelector(".box");
if (myDiv) {
    myDiv.setAttribute("title", "This is a tooltip");
}

// 16. REMOVE THE DISABLED ATTRIBUTE FROM A BUTTON
let myButton = document.querySelector("button");
if (myButton) {
    myButton.removeAttribute("disabled");
}

/*
17. WHAT DOES createElement() DO? WHAT'S RETURNED?
    - Creates a new HTML element in memory (not yet added to DOM)
    - Syntax: document.createElement("tagName")
    - Returns: An empty DOM element object
    - Does NOT appear on the page until appended/prepended to the DOM
    - You can set properties/attributes before adding to DOM
*/

/*
18. DIFFERENCE BETWEEN appendChild() AND prepend():
    - appendChild(): Adds element at the END of parent's children
    - prepend(): Adds element at the BEGINNING of parent's children
    
    HTML: <div>First</div>
    
    appendChild(new): <div>First</div><new></new>
    prepend(new): <new></new><div>First</div>
*/

/*
19. CAN YOU REMOVE AN ELEMENT USING removeChild()?
    Yes! But need to specify both parent and child.
    Syntax: parentElement.removeChild(childElement);
    Modern alternative: element.remove() (simpler)
*/

// 20. CREATE NEW LIST ITEM AND ADD TO END OF <ul>
let newLi = document.createElement("li");
newLi.textContent = "New Task";
let myUl = document.querySelector("ul");
if (myUl) {
    myUl.appendChild(newLi);
}

// 21. CREATE NEW IMAGE WITH PLACEHOLDER SOURCE AND ADD AT TOP OF DIV
let newImg = document.createElement("img");
newImg.setAttribute("src", "https://via.placeholder.com/150");
newImg.setAttribute("alt", "Placeholder image");
let targetDiv = document.querySelector(".box");
if (targetDiv) {
    targetDiv.prepend(newImg);
}

// 22. SELECT FIRST ITEM IN LIST AND DELETE FROM DOM
let firstListItem = document.querySelector("li");
if (firstListItem) {
    firstListItem.remove(); // Modern way
    // or firstListItem.parentElement.removeChild(firstListItem); (older way)
}

/*
23. HOW TO CHANGE BACKGROUND COLOR OF AN ELEMENT:
    Method 1: Using .style property
    element.style.backgroundColor = "blue";
    
    Method 2: Using classList (add class with CSS)
    element.classList.add("bg-blue");
    
    Method 3: Using setAttribute with style
    element.setAttribute("style", "background-color: blue;");
*/
let colorElement = document.querySelector("div");
if (colorElement) {
    colorElement.style.backgroundColor = "lightblue";
}

/*
24. DIFFERENCE BETWEEN classList.add() AND classList.toggle():
    - classList.add(): Always adds the class (if already present, does nothing)
    - classList.toggle(): Removes class if present, adds if not present
    
    Example:
    element.classList.add("active"); // Always adds
    element.classList.toggle("active"); // Adds if missing, removes if present
*/

// 25. ADD HIGHLIGHT CLASS TO EVERY EVEN ITEM IN A LIST
let liElements = document.querySelectorAll("ul li:nth-child(2n)");
liElements.forEach((elem) => {
    elem.classList.add("highlight");
});

// 26. SET FONT SIZE OF ALL <p> ELEMENTS TO 18px USING .style
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((para) => {
    para.style.fontSize = "18px";
});

// ============================================================
// ADDITIONAL USEFUL DOM METHODS
// ============================================================

// exists() - Check if element exists before manipulating
function selectElement(selector) {
    let element = document.querySelector(selector);
    if (element) {
        return element;
    } else {
        console.log("Element not found:", selector);
        return null;
    }
}

// Example of chaining:
// selectElement("h1").style.color = "red"; 
    