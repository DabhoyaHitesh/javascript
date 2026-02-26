// Reading Values from input, textarea, select
let form = document.querySelector("form");
let username = document.querySelector("#username");
let textarea = document.querySelector("#textarea");
let select = document.querySelector("#select");

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    console.log(username.value);
    console.log(textarea.value);
    console.log(select.value);
})

// Javascript, Express.js, Node.js, MongoDB, SQL, 3 Projects
// 3 Projects




// prevent deafault submition

// inline and js based validation
// minline validation --> html validation --> requrid, minlength, maxlenght