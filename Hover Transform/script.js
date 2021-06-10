const num = [1, 2, 3, 4, 5, 6, 7, 8];
let word = document.getElementById("#main");
let char = '';
let index = 0;

function scatter() {
    char = word.slice(0, ++index);
    
}