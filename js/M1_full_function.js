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
$('#p').html('<p>Святошинсько-Броварська лінія (також Святошино-Броварська лінія або Червона лінія метро) — історично перша лінія Київського метрополітену. Кількість станцій — 18, довжина лінії — 22,7 км, час проїзду — 38,5 хв.</p><p>Нумерація колій: «Академмістечко» — «Лісова» — I, «Лісова» — «Академмістечко» — II.</p>');
$('#e').text('English');}
else if ($('#e').text() == "English") {
$('#p').html('<p> Svyatoshinsky-Brovarskaya line (also Svyatoshin-Brovarskaya line or Red line of the metro) - historically the first line of the Kiev subway. The number of stations is 18, the length of the line is 22.7 km, the time of the journey is 38.5 minutes. </ P><p> Numbering of the tracks: "Akademgorodok" - "Forest" - I, "Forest" - "Akademgorodok" - II. </ p>');
$('#e').text('Русский');}
else if ($('#e').text() == "Русский") {
$('#p').html('<P> Святошинско-Броварская линия (также Святошинско-Броварская линия или Красная линия метро) - исторически первая линия Киевского метрополитена. Количество станций - 18, длина линии - 22,7 км, время проезда - 38,5 мин. </ P><P> Нумерация путей: «Академгородок» - «Лесная» - I, «Лесная» - «Академгородок» - II. </ P>');
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