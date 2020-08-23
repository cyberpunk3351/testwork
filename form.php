<?php
$text = mb_detect_encoding($_POST['text']);
$textstr = mb_strlen($_POST['text']);


if ($text === 'UTF-8') {
  $text2 = ceil($textstr/67);
}else {
  $text2 =  ceil($textstr/153);
}

try
{
  $pdo = new PDO('mysql:host=192.168.1.39;dbname=table01', 'root6', 'drummer');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
  $error = 'Не могу соеденится к БД.';
  include 'error.php';
  exit();
}

if (isset($_POST['text']))
{
  try
  {
    $sql = 'INSERT INTO messages SET
        message = :text,
        sms = :sms';
    $s = $pdo->prepare($sql);
    $s->bindValue(':sms', $text2);
    $s->bindValue(':text', $_POST['text']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Ошибка добавления: ' . $e->getMessage();
    include 'error.php';
    exit();
  }

  header('Location: .');
  exit();
}

include 'form.php';