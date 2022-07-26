const player = document.querySelector('.winner')
const textWin = document.querySelector('.text-win')
const reiniciar = document.querySelector('.botao-reiniciar')

reiniciar.addEventListener('click', () => {
    window.location.href = 'index.html'
})

function showWin() {
    player.innerHTML = `Parabéns ${localStorage.getItem('player')}, você ganhou.`
    textWin.innerHTML = 'Que tal tentar denovo?!'
}

showWin();
