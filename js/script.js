let time = 0;
const areaBarcos = document.querySelector('.area_barcos');
const player = document.querySelector('.player');
let areaTime = document.getElementById('timer');

const idBarcos = [
    'barco1',
    'barco2',
    'barco3',
    'barco4',
    'barco5',
    'barco6',
    'barco7',
    'barco8',
    'barco9',
    'barco10',
    'barco11',
    'barco12',
    'barco13',
    'barco14',
    'barco15',
    'barco16',
    'barco17',
    'barco18',
    'barco19',
    'barco20',
    'barco21',
    'barco22',
    'barco23',
    'barco24',
    'barco25',
    'barco26',
    'barco27',
    'barco28',
    'barco29',
    'barco30',
]

// explosão do barco
const explodirBarco = ({target}) => {
    target.classList.add('explosao');
}

// cria os barcos randomicamente
const criarBarcos = () => {
    const barco = document.createElement('div');
    barco.className = 'barcos'
    areaBarcos.appendChild(barco);

    barco.addEventListener('click', explodirBarco);
    
    return barco;
}

// cronometro
function timer() {
    time++
    areaTime.innerHTML = time;
}


let idInimigo = Math.floor(Math.random() * 29);
console.log(idInimigo);

const loadGame = () => {
    // insere os barcos na tela
    idBarcos.forEach((barcoN) => {
        const navio = criarBarcos();
        areaBarcos.appendChild(navio);

        navio.addEventListener('click', () => {
            if (parseInt(navio.getAttribute('data-id')) === idInimigo) {
                window.location.href = 'win.html'
            }
 
        })
    });

    // adicionar uma data-id a cada barco.
    let numberBarco = document.querySelectorAll('.barcos');
    for (let i = 0; i < 30; i++) {
        numberBarco[i].setAttribute('data-id', i)
    }

    // retorna na tela o nome do Player e o tempo decorrido
    setInterval(timer, 1000)
    timer();
    player.innerHTML = localStorage.getItem('player');


}

loadGame();
