const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [ "Success", "Error", "Info" ]

button.addEventListener("click", () => createNotification())

function createNotification(){
    const notification = document.createElement("div");
    notification.classList.add("toast");
    notification.innerText = getRandomMessage();

    notification.classList.add(notification.innerText == "Success" ? "success" : "default");
    notification.classList.add(notification.innerText == "Info" ? "info" : "default");
    notification.classList.add(notification.innerText == "Error" ? "error" : "default");

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}