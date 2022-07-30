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