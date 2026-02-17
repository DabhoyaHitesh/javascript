// let box = document.querySelector(".box")

// window.addEventListener("mousemove", (dets)=>{
//     console.log(dets.clientY, dets.clientX);

//     box.style.top = dets.clientY  + "px";
//     box.style.left = dets.clientX  + "px";
//     box.style.bottom = dets.clientY  + "px";
//     box.style.right = dets.clientX  + "px";
// })

let box = document.querySelector("img")

window.addEventListener("mousemove", (dets)=>{
    console.log(dets.clientY, dets.clientX);

    box.style.top = dets.clientY  + "px";
    box.style.left = dets.clientX  + "px";
    box.style.bottom = dets.clientY  + "px";
    box.style.right = dets.clientX  + "px";
})