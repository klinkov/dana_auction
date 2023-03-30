<?php

$email = $_POST['email']; // Принимаем данные
$email = htmlspecialchars($email); // Преобразуем все символы которые пользователь пытается добавить в форму
$email = urldecode($email); // Декодируем url, если пользователь пытается его добавить в форму
$email = trim($email); // Удалим пробелы в начале и конце если такие имеются


$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://docs.google.com/forms/d/e/1FAIpQLSerI5z96cOF0-N8-tki498-NkheoiyDamPt-Gs813aLa-dFNQ/formResponse",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "entry.175484913="+$_POST["email"]+"&entry.150908741="+$_REQUEST["HTTP_REFERER"]+"&fbzx=4985693244102912634&partialResponse=%5Bnull%2Cnull%2C%224985693244102912634%22%5D",
  CURLOPT_COOKIE => "S=spreadsheet_forms%3DTPOgEOT7-kz5vysns939L7GbH2tyiYwskAF24zM2hpo; COMPASS=spreadsheet_forms%3DCjIACWuJVzailvltnDewjNjsoVIZb7xceiCmiCMf-b6hcn30OHqnlfrsyNJVUnvFNrEsDhCUtpWhBho0AAlriVdkhpdoaR9KpQ7Eag2VQAKWjb8_dWpFhslYXyPc_BdPNveY0wnescN1h0lY4bPWYA%3D%3D; NID=511%3DvD5dC6ceGIQvhNnUBpyhNJfl8GFupoWLTP6SDNovupZr2RrTo-rENaob1MLdam3vEOjHwev4fYroZzn9PO0RKWeCSJr7bVRxPK5O73-uZgTAO_ODiU05cAjMw2_PxCyj8TUXjOiUGOqzd4YxVYYvvM50dcA38RGHZ8MY-0CC-1A",
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/x-www-form-urlencoded"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}

// if ($err) {
//     header('Location: /index.html?sacerr' + err,true, 302);
// } else {
//     header('Location: /index.html?sacses',true, 302);
// }

