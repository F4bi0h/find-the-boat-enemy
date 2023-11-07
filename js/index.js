document.querySelector('button').addEventListener('click', () => {
    let player = document.querySelector('input').value;

    localStorage.setItem('Player', JSON.stringify(player));
    window.location.href = 'informacoes.html';
});