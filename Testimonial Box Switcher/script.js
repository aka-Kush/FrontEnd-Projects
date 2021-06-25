const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user-img");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials =[
    {
        "name":"Lance Jarvis",
        "designation":"General Manager ",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/1.jpg",
        "message":"We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
    },
    {
        "name":"Juliet Wright",
        "designation":"Technical Director",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/2.jpg",
        "message":"It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
    },
    {
        "name":"Michael D.",
        "designation":"Investor",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/3.jpg",
        "message":"Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
    },
    {
        "name":"Kylie Lutz",
        "designation":"Freelancer",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/4.jpg",
        "message":"The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
    },
    {
        "name":"Mark Twin",
        "designation":"Developer",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/5.jpg",
        "message":"Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
    },
    {
        "name":"Anne",
        "designation":"Content Writer & Artist",
        "avatar":"https://testimonialapi.toolcarton.com/avatar/6.jpg",
        "message":"These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
    },
];

let index = 0;

function updateTestimonial(){
    const { name, designation, avatar, message} = testimonials[index];
    testimonial.innerHTML = message;
    userImg.src = avatar;
    userName.innerHTML = name;
    role.innerHTML = designation;

    index++;

    if (index > testimonials.length - 1) { index = 0;}
}

setInterval(updateTestimonial, 10000);
