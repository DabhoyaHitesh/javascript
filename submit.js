// select
let inp = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    console.log(
        inp[0].value, // img link
        inp[1].value, // name
        inp[2].value, // bio
        inp[3].value, // email
        inp[4].value, // phone  number
    )

    // create card
    let card = document.createElement("div");
    let dp_img = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");

    // add class
    card.classList.add("card");
    dp_img.classList.add("dp_img");

    // add html - append
    document.body.append(card);

    // child add
    card.appendChild(dp_img);
    dp_img.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    console.log(card)
    
    // add form data
    img.setAttribute("src", inp[0].value ? inp[0].value :"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=");
    h3.textContent = inp[1].value ? inp[0].value : "Username";
    h4.textContent = inp[2].value ? inp[0].value : "Bio";
    h5.textContent = inp[3].value ? inp[0].value : "email@gmail.com";
    h6.textContent = inp[4].value ? inp[0].value : "+91 9925945256";

    inp.forEach((inp) => {
        if(inp.value !== "Submit"){
            inp.value = "";
        }      
    })
});
