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