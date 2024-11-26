let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

circle.addEventListener("click", function() {
    score++;
    scoreElement.textContent = score;
});

function save() {
    localStorage.storedClicks = doument.getElementById("circle").value;
}

function load() {
    document.getElementById("score").innerHTML = localStorage.storedClicks;
}
