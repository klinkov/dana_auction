<?php

$email = $_POST['email']; // Принимаем данные
$email = htmlspecialchars($email); // Преобразуем все символы которые пользователь пытается добавить в форму
$email = urldecode($email); // Декодируем url, если пользователь пытается его добавить в форму
$email = trim($email); // Удалим пробелы в начале и конце если такие имеются

mail('anastasia@dana.auction', "Test message", $email);

header('Location: /index.html?sacses',true, 302);