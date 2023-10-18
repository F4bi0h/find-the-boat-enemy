let inforPlayer = JSON.parse(localStorage.getItem('inforPlayer'));

if(inforPlayer[1] == true) {
    document.querySelector('.title').innerHTML = `Você Ganhou ${inforPlayer[0]}`;
    document.querySelector('.textEndGame').innerHTML = 'Parabens soldado, você neutralizou o barco inimigo.';
} else {
    document.querySelector('.title').innerHTML = `Você Perdeu ${inforPlayer[0]}`;
    document.querySelector('.textEndGame').innerHTML = 'Infezlimente o barco inimigo fugiu e isso custara caro para nós';
}
