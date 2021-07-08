const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

let index = 1;

let config = {
    method: 'GET',
    redirect: 'follow'
};

//! DEAL WITH CROSS-ORIGIN ISSUE

async function fetchDetails(){
    const res = await fetch(`https://testimonialapi.toolcarton.com/api/${index}`, config);
    const data = await res.json();
    const { name, designation, avatar, message } = data;

    testimonial.innerHTML = message;
    userImg.src = avatar;
    userName.innerHTML = name;
    role.innerHTML = designation;

    index++;
}

fetchDetails();
setInterval(fetchDetails, 10000);
