document.addEventListener('keydown', function(event) {
    var player = document.getElementById('player');
    var currentLeft = parseInt(window.getComputedStyle(player).left);

    switch(event.key) {
        case 'ArrowLeft':
            player.style.left = (currentLeft - 37) + 'px';
            break;
        case 'ArrowRight':
            player.style.left = (currentLeft + 37) + 'px';
            break;
    }
});

function speed() {
    document.getElementById('speed').innerHTML = +1
}
