let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

circle.addEventListener("click", function() {
    score++;
    scoreElement.textContent = score;
});

function save() {
    doument.getElementById("score").value = localStorage.setItem("data", saveInput;
}

function load() {
    document.getElementById("score").innerHTML = localStorage.getItem("data");
}
