$('#textarea').bind('input', function(){
  $('.result').html(Math.ceil($(this).val().length/153));
});

$('#textarea').bind('input', function(){
  $('#result2').html($(this).val().length);
});

$('#textarea').bind('input', function(){
  $('.resultr').html(Math.ceil($(this).val().length/67));
});
