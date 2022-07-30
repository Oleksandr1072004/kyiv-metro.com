var $clas_new="font_middle";
var $clas_action="font_middle";
$('document').ready(function(){
    abzac_color();
    help_moto();

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


function abzac_color(){
    $("#red").click(function(){
        $("#abzac1").attr("style","color:red;");
    })
    $("#blue").click(function(){
        $("#abzac1").attr("style","color:blue;");
    })
    $("#black").click(function(){
        $("#abzac1").attr("style","color:black;");
    })
}
});
;