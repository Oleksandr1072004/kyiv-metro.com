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
$('#p').html('<p>Подільсько-Вигурівська лінія (з 1997, попередні назви — Подільсько-Воскресенська або Вокзально-Воскресенська) — майбутня нова лінія Київського метрополітену. Станом на 2012 рік планувалося, що після закінчення будівництва лінія матиме 12+6 станцій і понад 20 км довжини. Проектний термін будівництва першої черги — 62 місяці.</p>');
$('#e').text('English');}
else if ($('#e').text() == "English") {
$('#p').html('<p> Podilsko-Vygurovskaya line (since 1997, previous names - Podolsk-Voskresenskaya or Voskresenskaya) - a future new line of the Kiev subway. As of 2012 it was planned that after the construction of the line will have 12 + 6 stations and more than 20 km in length. The design phase of the first phase is 62 months. </ P>');
$('#e').text('Русский');}
else if ($('#e').text() == "Русский") {
$('#p').html('<P> Подольско-Воскресенская линия (с 1997, предыдущие названия - Подольско-Воскресенская или вокзальных-Воскресенская) - будущая новая линия Киевского метрополитена. По состоянию на 2012 год планировалось, что после окончания строительства линия будет 12 + 6 станций и более 20 км длины. Проектный срок строительства первой очереди - 62 месяца. </ P>');
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
