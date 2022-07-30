var $clas_new="font_middle";
var $clas_action="font_middle";
$('document').ready(function(){
$(function(){
$('#logo').slideUp(0000);
$('#logo').slideDown(3000);
$('#menu').slideUp(0000);
$('#menu').slideDown(2000);
})
;
	$("#red").click(function(){
		$("#p").attr("style","color:red;");
	})
	$("#blue").click(function(){
		$("#p").attr("style","color:blue;");
	})
	$("#green").click(function(){
		$("#p").attr("style","color:green;");
	})
	$("#yellow").click(function(){
		$("#p").attr("style","color:yellow;");
	})
	$("#cyan").click(function(){
		$("#p").attr("style","color:#00ffff;");
	})
	$("#white").click(function(){
		$("#p").attr("style","color:#ffffff;");
	})

$("p, h1, h3, li, legend, td, label, option").addClass("font_middle");

	$("#small_text").click(function(){
		$clas_new="font_small";
		$("p, h1, h3, li, legend, td, label, option").removeClass($clas_action).addClass($clas_new);
		$clas_action=$clas_new;
	})
	$("#middle_text").click(function(){
		$clas_new="font_middle";
		$("p, h1, h3, li, legend, td, label, option").removeClass($clas_action).addClass($clas_new);
		$clas_action=$clas_new;
	})
	$("#big_text").click(function(){
		$clas_new="font_big";
		$("p, h1, h3, li, legend, td, label, option").removeClass($clas_action).addClass($clas_new);
		$clas_action=$clas_new;
	})
$(function(){
$('#e').click(function(){
if ($('#e').text()=="Українська") {
$('#p').html('<p>Оболонсько-Теремківська лінія — історично друга лінія Київського метрополітену. Кількість станцій — 18, довжина лінії — 20,9 км, тривалість поїздки — 34 хв.</p><p>Нумерація колій: «Теремки» — «Героїв Дніпра» — I, «Героїв Дніпра» — «Теремки» — II.</p>');
$('#e').text('English');}
else if ($('#e').text() == "English") {
$('#p').html('<p> Obolonsky-Teremkivsky line is historically the second line of the Kiev subway. The number of stations is 18, the length of the line is 20.9 km, the duration of the trip is 34 minutes. </ P><p> Numbering of the tracks: "Teremky" - "Heroes of the Dnieper" - I, "Heroes of the Dnieper" - "Teremok" - II. </ p>');
$('#e').text('Русский');}
else if ($('#e').text() == "Русский") {
$('#p').html('<P> Оболонско-Теремковская линия - исторически вторая линия Киевского метрополитена. Количество станций - 18, длина линии - 20,9 км, продолжительность поездки - 34 мин. </ P><P> Нумерация путей: «Теремки» - «Героев Днепра» - I, «Героев Днепра» - «Теремки» - II. </ P>');
$('#e').text('Українська');}
});
})
;
$(function(){
function change_width(id_obj,x){
	var a=$(id_obj).attr('title');
	var w=$(id_obj).width();
	var h=$(id_obj).height();
	if(a==''){
		w=w*x;
		h=h*x;
		$(id_obj).width(w).height(h);
		$(id_obj).attr('title','фото зменшене в 1.5 раз');
		a=$(id_obj).attr('title');
	}
	else if(a=='фото зменшене в 1.5 раз'){
		w=w/1.5;
		h=h/1.5;
		$(id_obj).width(w).height(h);
		$(id_obj).attr('title','');
		a=$(id_obj).attr('title');
	}
	}
	$('#station img').each(function(){
		$(this).attr('title','');
		$(this).click(function(){
change_width(this,1.5);
});
});
})
;
});
