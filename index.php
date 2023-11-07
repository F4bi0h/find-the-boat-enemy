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
    <script src="/js/index.js" defer></script>

</head>

<body>
    <main>
        <audio src="/music/Música de Suspense.mp3"></audio>
        <div class="area-login">
            <img src="/img/barco1.png" alt="">
            <h1>Find the Enemy</h1>

            <form action="/verificar_player.php" method="post">
                <input type="text" placeholder="Name" name="player">
                <button type="submit">Entrar</button>
            </form>
        </div>
    </main>

    <script>
        window.addEventListener('load', () => {
            let audio = document.querySelector('audio');
            audio.volume = 0.2;
            audio.play();
        });
    </script>
</body>

</html>