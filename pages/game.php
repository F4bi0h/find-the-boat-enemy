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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/game.js" defer></script>

</head>
<body>
    <header>
        <nav>
            <p class="player"></p>
            <p class="timer">30</p>
        </nav>
    </header>

    <main>
        <audio></audio>
        <div class="area-game"></div>
    </main>
</body>
</html>