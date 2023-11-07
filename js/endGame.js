let inforPlayer = JSON.parse(localStorage.getItem('inforPlayer'));
let title = document.querySelector('.title');
let textEndGame = document.querySelector('.textEndGame');

if(inforPlayer[1] == true) {
    title.classList.add('text-success');
    textEndGame.classList.add('text-success');

    title.innerHTML = `Você Ganhou ${inforPlayer[0]}`;
    textEndGame.innerHTML = 'Parabens soldado, você neutralizou o barco inimigo.';
} else {
    document.querySelector('.title').innerHTML = `Você Perdeu ${inforPlayer[0]}`;
    document.querySelector('.textEndGame').innerHTML = 'Infezlimente o barco inimigo fugiu e isso custara caro para nós';
}
