<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Batalha Naval</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link rel="stylesheet" href="/css/style.css">
</head>

<body>
    <main>
        <audio src="/music/Música de Suspense.mp3"></audio>
        <div class="informations">
            <h1 class="player"></h1>
            <p>
                Há uma embarcação inimiga infiltrada em nossas instalações, mas temos a capacidade de localizá-la e
                neutralizá-la. Se não agirmos rapidamente, eles conseguirão escapar em apenas 30 segundos. A missão é
                abater a embarcação inimiga antes que o tempo se esgote.
            </p>

            <button type="button">Começar</button>
        </div>
    </main>

    <script>
        window.addEventListener('load', () => {
            let audio = document.querySelector('audio');
            audio.volume = 0.2;
            audio.play();
        });

        document.querySelector('.player').innerHTML = `Anteção ${JSON.parse(localStorage.getItem('Player'))}`;

        document.querySelector('button').addEventListener('click', () => {
            window.location.href = 'game.php';
        })
    </script>
</body>

</html>