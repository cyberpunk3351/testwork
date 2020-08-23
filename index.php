<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
	<form class="box" action="form.php" method="post">
		<p class="text-center"><textarea id="textarea" class="form-control" name="text"></textarea></p>
		<p class="text-center">Кол-во символов – <span class="text-success" id="result2"></span></p>
		<p class="text-center">Кол-во СМС – <span class="text-success res result" name="name" id="name"></span></p>
		<p class="text-center">
		<button id="btn-1" class="btn btn-sm btn-outline-primary" type="submit" value="Add">Сохранить</button>
		<!-- <button id="btn-2" class="btn btn-sm btn-outline-primary" onclick="event.preventDefault()">Транслитерировать</button> -->
		<input class="btn btn-sm btn-outline-primary" type="checkbox" name="option2" value="a2" onclick="send()"> Транслитерировать<Br>
		
		</p>	
	</form>
	

	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="trans.js"></script>
	<script type="text/javascript" src="correct.js"></script>
</body>
</html>