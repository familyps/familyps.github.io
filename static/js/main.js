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


//- /////////////////////////////////////////////////////////////////////////////////
//- 
//- 
//- Меню с прокруткой scss
//- 
//- 
//- /////////////////////////////////////////////////////////////////////////////////





//- /////////////////////////////////////////////////////////////////////////////////
//- 
//- 
//- Меню с прокруткой 
//- 
//- 
//- /////////////////////////////////////////////////////////////////////////////////

// jQuery(document).ready(function($){
// redrawDotNav();
// $(window).bind('scroll',function(e){redrawDotNav();});
// $('.n_1').click(function(){$('html, body').animate({scrollTop:0}, 1000);return false;});
// $('.n_2').click(function(){$('html, body').animate({scrollTop:$('#b_2').offset().top}, 1000);return false;});
// $('.n_3').click(function(){$('html, body').animate({scrollTop:$('#b_3').offset().top}, 1000);return false;});

 
// $('#fix_nv a').hover(
// function(){$(this).prev('span').show();},
// function(){$(this).prev('span').hide();});
// });
// function redrawDotNav(){
// var section1Top =  0;
// var section2Top =  $('#b_2').offset().top - (($('#b_3').offset().top - $('#b_2').offset().top) / 2);
// var section6Top =  $('#b_6').offset().top - (($(document).height() - $('#b_6').offset().top) / 2);
// $('#fix_nv a').removeClass('actv_b');
// if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
// $('#fix_nv a.n_1').addClass('actv_b');
// } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
// $('#fix_nv .n_2').addClass('actv_b');
// } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
// $('#fix_nv .n_3').addClass('actv_b');
// } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
// $('#fix_nv .n_4').addClass('actv_b');
// } else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
// $('#fix_nv .n_5').addClass('actv_b');
// } else if ($(document).scrollTop() >= section6Top){
// $('#fix_nv .n_6').addClass('actv_b');}  
// }


//- /////////////////////////////////////////////////////////////////////////////////
//- 
//- 
//- Меню с прокруткой ---НЕ ПОДСВЕЧИВАЕТ, КОГДА НА СРЕДНЕМ БЛОКЕ
//- 
//- 
//- /////////////////////////////////////////////////////////////////////////////////
// jQuery(document).ready(function($){
// redrawDotNav();
// $(window).bind('scroll',function(e){redrawDotNav();});
// $('.n_1').click(function(){$('html, body').animate({scrollTop:$('#headway').offset().top}, 1000);return false;});
// $('.n_2').click(function(){$('html, body').animate({scrollTop:$('#familyway').offset().top}, 1000);return false;});
// $('.n_3').click(function(){$('html, body').animate({scrollTop:$('#escort').offset().top}, 1000);return false;});

// $('#fix_nv a').hover(
// function(){$(this).prev('span').show();},
// function(){$(this).prev('span').hide();});
// });
// function redrawDotNav(){
// var section1Top =  $('#headway').offset().top - (($('#familyway').offset().top - $('#headway').offset().top) / 2);
// var section2Top =  $('#familyway').offset().top - (($('#escort').offset().top - $('#familyway').offset().top) / 2);
// var section3Top =  $('#escort').offset().top - (($(document).height() - $('#escort').offset().top) / 2);
// $('#fix_nv a').removeClass('actv_b');
// if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
// $('#fix_nv a.n_1').addClass('actv_b');
// } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
// $('#fix_nv .n_2').addClass('actv_b');
// } else if ($(document).scrollTop() >= section3Top){
// $('#fix_nv .n_3').addClass('actv_b');}
// }

//  