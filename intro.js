function startGame() {
    window.open('main game/tictactoe.html', '_self');
}

window.addEventListener('load', () => {
    const audio = document.getElementById('bg_theme');

    // Attempt to autoplay the audio
    const playPromise = audio.play();
});
