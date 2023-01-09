/*
    Encontre o barco inimigo
    1 pagina de login -> inserir nome do jogador
    2 criar barcos randomicamente
    3 ao clicar no barco, ele explode
    4 mostrar nome do player e tempo decorrido
    5 ao clicar no barco inimigo o jogo acaba
*/

class Game {
    constructor() {
        this.timer = 30;
        this.areaGame = document.querySelector('.area-game');
        this.boats = [
            1,2,3,4,5,6,7,8,9,10,11,12,
            13,14,15,16,17,18,19,20,21,22,
            23,24,25,26,27,28,29,30,31,32,
            33,34,35,36,37,38,39,40,41,42,
            43,44,45,46,47,48,49,50,51,52,
            53,54,55,56,57,58,59,60,61,62,63,64,
            65,66,67,68,69,70,71,72,73,74,75,76,
            77,78,79,80,81,82,83,84,85,86,
            87,88,89,90,91
        ];

        this.loadGame();
    }

    showInformations() {
        document.querySelector('.player').innerHTML = JSON.parse(localStorage.getItem('Player'));
    }

    createBoats() {
        this.boat = document.createElement('img');
        this.boat.src = '/img/barco1.png';
        this.boat.classList.add('boat');

        document.querySelector('.area-game').append(this.boat);

        this.boat.addEventListener('click', function() {
            this.src = '/img/Explosion.png';
            let audio = document.querySelector('audio');
            audio.src = '/music/Som de explosão.mp3';
            audio.volume = 0.1;
            audio.play();
        })
    }

    time() {
        setInterval(() => {
            this.timer--
            document.querySelector('.timer').innerHTML = this.timer;
            if(this.timer == 0) {
                this.timer = 30;
            }
        }, 1000);
    }

    randomBoats() {
        this.boats.forEach(b => {
            this.createBoats();
        });
    }

    checkWin() {
        
    }

    loadGame() {
        this.showInformations();
        this.randomBoats();
        this.time();
        this.checkWin();
    }
}

let game = new Game();























// let areaJogo = document.querySelector('.areaJogo');
// let idEnemy = Math.round(Math.random() * 84);
// let idEnemy2 = Math.round(Math.random() * 84);
// let time = 30;
// let enemys = [
//     1,2,3,4,5,6,7,8,9,10,11,
//     12,13,14,15,16,17,18,19,20,
//     21,22,23,24,25,26,27,28,29,30,
//     31,32,33,34,35,36,37,38,39,40,
//     41,42,43,44,45,46,47,48,49,50,
//     51,52,53,54,55,56,57,58,59,60,
//     61,62,63,64,65,66,67,68,69,
//     70,71,72,73,74,75,76,77,78,
//     79,80,81,82,83,84,85,
//     86,87,88,89,90,91
// ];

// function createEnemys(e) {
//     let enemy = document.createElement('img');
//     enemy.className = 'enemy';
//     enemy.src = '../img/barco1.png';

//     enemy.setAttribute('id', e);

//     areaJogo.append(enemy);

//     enemy.addEventListener('click', function() {
//         enemy.className = 'explosao';
//         enemy.src = '../img/Explosion.png';
//     });
// }

// function randomEnemys() {
//     enemys.forEach((e) => {
//         createEnemys(e);
//     });
//     checkVictory();
// }

// function randomTime() {
//     setInterval(() => {
//         time--;
//         document.querySelector('.time').innerHTML = time;

//         if(time == 0) {
//             time = 30;
//             //faltar terminar está lógica
//         }
//     }, 1000);
    

// }

// function checkVictory() {
//     let enemy = document.querySelectorAll('img');
    
//     enemy.forEach((e) => {
//         e.addEventListener('click', () => {
//             console.log(e.id);

//             let enemy1;
//             let enemy2;
//             let checkEnemy = [];

//             if(e.id == idEnemy) {
//                 enemy1 = e;
//                 enemy1.classList.add('encontrado');
//                 alert('Barco Nª 1 encontrado');
//             } 
            
//             if(e.id == idEnemy2) {
//                 enemy2 = e;
//                 enemy2.classList.add('encontrado');
//                 alert('Barco Nª 2 encontrado');
//             } 

            
//         });
//     });
// }

// console.log(idEnemy);
// console.log(idEnemy2);

// randomTime();
// randomEnemys();