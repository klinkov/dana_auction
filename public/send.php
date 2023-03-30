<?php

$email = $_POST['email']; // Принимаем данные
$email = htmlspecialchars($email); // Преобразуем все символы которые пользователь пытается добавить в форму
$email = urldecode($email); // Декодируем url, если пользователь пытается его добавить в форму
$email = trim($email); // Удалим пробелы в начале и конце если такие имеются

$post_data = array(
    "entry.175484913"=>$email,
    "entry.150908741"=>$_SERVER['HTTP_REFERER'],
    "fbzx" => "884104856041944219"
);


$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://docs.google.com/forms/d/e/1FAIpQLSerI5z96cOF0-N8-tki498-NkheoiyDamPt-Gs813aLa-dFNQ/formResponse",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/x-www-form-urlencoded"
  ],
]);

curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    header('Location: /index.html?sacerr',true, 302);
} else {
    header('Location: /index.html?sacses',true, 302);
}

