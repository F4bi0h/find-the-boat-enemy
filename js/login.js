const form = document.querySelector('.form')
const namePlayer = document.querySelector('.input')


const iniciarjogo = (event) =>{
    event.preventDefault();

    localStorage.setItem('player', namePlayer.value);
    window.location = 'game.html'
}

form.addEventListener('submit', iniciarjogo);