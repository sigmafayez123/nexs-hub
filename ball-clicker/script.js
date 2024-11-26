let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

circle.addEventListener("click", function() {
    score++;
    scoreElement.textContent = score;
});

function save() {
    document.getElementById("saveInput").value = localStorage.setItem("data");
}

function load() {
    document.getElementById("loadInput").value = localStorage.getItem("data");
}
