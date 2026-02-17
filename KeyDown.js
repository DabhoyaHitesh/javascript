let h1 = document.querySelector('h1');

window.addEventListener('keydown', (dets) => {
    // console.log(dets.key);
    if (dets.key === ' ') {
        h1.textContent = 'Space Bar';
    }   else {  
        h1.textContent = dets.key;
    }
    console.log(dets);
    
});

let btn = document.querySelector("button");
console.dir(btn);
btn.addEventListener("click", function () {
  document.body.classList.toggle("bg-body");
  if (btn.innerText === "Dark Mode") {
    btn.innerText = "Light Mode";
  } else {
    btn.innerText = "Dark Mode";
  }
});