class Game {
    constructor() {
        this.timer = 30;
        this.areaGame = document.querySelector('.area-game');
        this.boats = [];
        this.enemy = Math.floor(Math.random() * 83);
        this.checkVictory = false;
        this.inforPlayer = [];

        this.loadGame();
    }

    showNamePlayer() {
        document.querySelector('.player').innerHTML = JSON.parse(localStorage.getItem('Player'));
    }

    createBoat(idBoat) {
        let boat = document.createElement('img');
        boat.src = '/img/barco1.png';
        boat.classList.add('boat');
        boat.id = idBoat;

        boat.addEventListener('click', () => {
            boat.src = '/img/Explosion.png';
            let audio = document.querySelector('audio');
            audio.src = '/music/Som de explosão.mp3';
            audio.volume = 0.1;
            audio.play();
        });

        this.areaGame.append(boat);
    }

    createRandomBoats() {
        for(let i = 0; i < 83; i++) {
            this.boats.push(i);
        }
        this.boats.forEach(b => {
            this.createBoat(b);
        });
    }

    boatEnemy() {
        let allBoats = document.querySelectorAll('img');

        allBoats.forEach(b => {
            b.addEventListener('click', () => {
                if(b.id == this.enemy) {
                    this.getInforPlayer(true);
                    alert('Barco inimigo encontrado!!!');
                    window.location.href = 'endGame.php';
                }
            });
        });
    }

    getInforPlayer(value) {
        this.checkVictory = value;

        this.inforPlayer.push(JSON.parse(localStorage.getItem('Player')), this.checkVictory)
        localStorage.setItem('inforPlayer', JSON.stringify(this.inforPlayer))
    }

    timerGame() {
        setInterval(() => {
            this.timer--;
            document.querySelector('.timer').innerHTML = this.timer;

            if(this.timer == 0) {
                this.getInforPlayer(false);
                alert('O barco inimigo escapou!!!');
                window.location.href = 'endGame.php';
            }
        }, 1000);
    }

    loadGame() {
        this.createBoat();
        this.createRandomBoats();
        this.boatEnemy();
        this.timerGame();
        this.showNamePlayer();
    }
}

let game = new Game();