const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1621569977598-5276dd1f488f?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="">`;
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, recusandae!`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="">`;
    name.innerHTML = 'John Doe';
    date.innerHTML = 'June 24, 2021';

    animated_bgs.forEach(bg =>{
        bg.classList.remove("animated-bg");
    })

    animated_bg_texts.forEach(bg =>{
        bg.classList.remove("animated-bg-text");
    })
}

