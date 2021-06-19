const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

//method 1 using .then
// function generateJoke() {

//     const config = {
//         headers: {
//         'Accept': 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) => {
//             joke.innerHTML = data.joke
//         })
// }

//method 2 using async/await
async function generateJoke() {

    const config = {
        headers: {
        'Accept': 'application/json'
        },
    }

    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    joke.innerHTML = data.joke
}