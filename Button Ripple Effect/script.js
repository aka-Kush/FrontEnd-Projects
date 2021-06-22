const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        const xAxis = event.clientX;
        const yAxis = event.clientY;

        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;

        const xInside = xAxis - buttonLeft;
        const yInside = yAxis - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})