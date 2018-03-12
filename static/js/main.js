;
// Начинать писать отсюда!!!!
// Задумка: по очереди выезжают 4 слова, потом по очереди выезжают 3 стрелки между ними (типа путь указывают)
// Как сделать "старт" не от загрузки страницы, а от прокручивания до данного блока???
// загуглить return -- первый цикл проходит "поочереди", а потом анимируются "синхронно"
// Вначале всем стрелкам задать класс .hide, а через время, за которые покажутся все слова -- удалить класс .hide + выполнить прописанную анимацию 

$(document).ready(function() {
	$('.popup-link').magnificPopup();
});

$('.wayup-item__1').ready(function () {
  $(this).addClass('magictime spaceInLeft');
  setTimeout(function(){
  	$('.wayup-item__1').addClass('magictime spaceInLeft');
}, 0);
  setInterval(function(){ 
	$('.wayup-item__1').toggleClass('magictime spaceInLeft');
}, 4000 );
});

$('.wayup-item__2').ready(function () {
  $(this).addClass('magictime spaceInLeft');
  setTimeout(function(){
  	$('.wayup-item__2').addClass('magictime spaceInLeft');
}, 500);
  setInterval(function(){ 
	$('.wayup-item__2').toggleClass('magictime spaceInLeft');
}, 4000 );
});

$('.wayup-item__3').ready(function () {
  $(this).addClass('magictime spaceInLeft');
  setTimeout(function(){
  	$('.wayup-item__3').addClass('magictime spaceInLeft');
}, 1000);
  setInterval(function(){ 
	$('.wayup-item__3').toggleClass('magictime spaceInLeft');
}, 4000 );
});

$('.wayup-item__4').ready(function () {
  $(this).addClass('magictime spaceInLeft');
  setTimeout(function(){
  	$('.wayup-item__4').addClass('magictime spaceInLeft');
}, 1500);
  setInterval(function(){ 
	$('.wayup-item__4').toggleClass('magictime spaceInLeft');
}, 4000 );
});

$('.wayup-arrow__1').ready(function () {
  $(this).addClass('magictime tinLeftIn');
  setTimeout(function(){
  	$('.wayup-arrow__1').addClass('magictime tinLeftIn');
}, 2000);
  setInterval(function(){ 
	$('.wayup-arrow__1').toggleClass('magictime tinLeftIn');
}, 4000 );
});

$('.wayup-arrow__2').ready(function () {
  $(this).addClass('magictime tinLeftIn');
  setTimeout(function(){
  	$('.wayup-arrow__2').addClass('magictime tinLeftIn');
}, 2500);
  setInterval(function(){ 
	$('.wayup-arrow__2').toggleClass('magictime tinLeftIn');
}, 4000 );
});

$('.wayup-arrow__3').ready(function () {
  $(this).addClass('magictime tinLeftIn');
  setTimeout(function(){
    $('.wayup-arrow__3').addClass('magictime tinLeftIn');
}, 3000);
  setInterval(function(){ 
  $('.wayup-arrow__3').toggleClass('magictime tinLeftIn');
}, 4000 );
});

$('.btn-escort').hover(function () {
  $(this).addClass('magictime swashIn');
  setInterval(function(){ 
  $('.wayup-arrow__3').toggleClass('magictime tinLeftIn');
}, 4000 );
});

