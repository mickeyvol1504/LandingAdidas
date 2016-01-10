<?php

$recepient = "mihavol@mail.ru";
$sitename = "http://adidasko.esy.es/";

$gender = trim($_GET["gender"]);
$foot_size = trim($_GET["foot_size"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Пол: $gender \nРазмер обуви: $foot_size \nТелефон: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");