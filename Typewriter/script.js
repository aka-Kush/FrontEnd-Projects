const texts = ["Student", "Web Developer", "Programmer"];
let count = 0;
let index = 0;
let char = '';
let currentText = "";

(function go() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    char = currentText.slice(0, ++index);
    document.querySelector(".type").textContent = char;

    if (char.length === currentText.length) {
        index = 0;
        count++;
    }

    setTimeout(go, 250);

}());