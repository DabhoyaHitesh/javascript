// localStorage API: setItem, getItem, rempveItem, clear
// localStorage --> save that data into browser's storage, after close browser data was't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan dekete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key", value)
localStorage.setItem("user", "Test_User");

// GetItem
// localStorage.getItem("key_name")
console.log(localStorage.getItem("user"));

// removeItem
// localStorage.removeItem("name")
localStorage.removeItem("user");

// updateItem
localStorage.setItem("user", "Demo_user")

// sessionStorage API
// Session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage+data ne temporairly time mate save kari ne rakhe chhe, jyare pan tab close kaesho tyare teni sathe data oan delete thai jai chhe)
// ~ sMb Storage

// setItem
sessionStorage.setItem("email", "user@test.com");

// getItem
console.log(sessionStorage.getItem("email"));

// removeItem
// sessionStorage.removeItem("email");

// UPDATE
sessionStorage.setItem("email", "demo@test.com");

// clear
// sessionStorage.clear();

// Storing/retriveving strings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string

// JSON.stringify
localStorage.setItem(
    "data",
    JSON.stringify([{ username: "test", email: "test@gmail.com", age: 25 }])
);

// JSON.parse
let a = JSON.parse(localStorage.getItem("data"));

// Basic cookie structure (manual key = Value;)
// Cookie --> store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save kare chee, cookie no use light data save karva mate thai chhe)
// when you reload web page data will be automaticallu send to server
// ~4 KB storage
document.cookie = "email = test@mail.com";

// max age 
document.cookie = "age = 10; = max-age = 60"; //60 sec

// date and time
document.cookie = "username=meet; expires=Wed, 28 Feb 2026 12:00:00 GMT";

// dark light mode --> save into local storage
// window.matchMedia('(prefers-color-schema: dark)') -->  false
let btn = document.querySelector("button");
let body = document.querySelector("body");

if(localStorage.getItem("theme")) {
    body.className = "";
    body.classList.add(localStorage.getItem("theme"));
}
btn.addEventListener("click", () => {
    console.log("btn clicked");
    if (body.classList.contains("light")) {
        body.classList.add("dark");
        body.classList.remove("light");
        btn.textContent = "light Mode";

        localStorage.setItem("theme", "dark");
    }else{
        body.classList.add("light");
        body.classList.remove("dark");
        btn.textContent = "dark Mode";

        localStorage.setItem("theme", "light");
    }
});

// if(localStorage.getItem("theme"))