document.querySelector('button').addEventListener('click', () => {
    let player = document.querySelector('input').value;

    if(player.length >= 3) {
        localStorage.setItem('Player', JSON.stringify(player));
        window.location.href = 'game.html';
    } else {
        alert('Informe um nome válido');
    }
});