var $clas_new="font_middle";
var $clas_action="font_middle";
$('document').ready(function(){
$(function(){
$('#logo').slideUp(0000);
$('#logo').slideDown(3000);
})
$(function(){
$('#logo_M1').slideUp(0000);
$('#logo_M1').slideDown(1500);
})
$(function(){
$('#logo_M2').slideUp(0000);
$('#logo_M2').slideDown(2000);
})
$(function(){
$('#logo_M3').slideUp(0000);
$('#logo_M3').slideDown(3000);
})
$(function(){
$('#logo_M4').slideUp(0000);
$('#logo_M4').slideDown(4000);
})
$(function(){
$('#logo_M5').slideUp(0000);
$('#logo_M5').slideDown(5000);
})
$(function(){
$('#gallery').fadeOut(0000);
$('#gallery').fadeIn(3000);
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

	function help_metro(){
	$("#div_for_metro img").hover(
		function(){
			$metro_name=$(this).attr("id");
			if($metro_name=="M1"){
				$metro_text="<p>Святошинсько-Броварська лінія (також Святошино-Броварська лінія або Червона лінія метро) — історично перша лінія Київського метрополітену. Кількість станцій — 18, довжина лінії — 22,7 км, час проїзду — 38,5 хв.</p><p>Нумерація колій: «Академмістечко» — «Лісова» — I, «Лісова» — «Академмістечко» — II.</p>";
			}
			if($metro_name=="M2"){
				$metro_text="<p>Оболонсько-Теремківська лінія — історично друга лінія Київського метрополітену. Кількість станцій — 18, довжина лінії — 20,9 км, тривалість поїздки — 34 хв.</p><p>Нумерація колій: «Теремки» — «Героїв Дніпра» — I, «Героїв Дніпра» — «Теремки» — II.</p>";
			}
			if($metro_name=="M3"){
				$metro_text="<p>Сирецько-Печерська лінія — історично третя лінія Київського метрополітену. Кількість станцій — 16, довжина лінії — 23,9 км.</p><p>Нумерація колій: Сирець — Червоний хутір-I, Червоний хутір — Сирець-II.</p>";
			}
			if($metro_name=="M4"){
				$metro_text="<p>Подільсько-Вигурівська лінія (з 1997, попередні назви — Подільсько-Воскресенська або Вокзально-Воскресенська) — майбутня нова лінія Київського метрополітену. Станом на 2012 рік планувалося, що після закінчення будівництва лінія матиме 12+6 станцій і понад 20 км довжини. Проектний термін будівництва першої черги — 62 місяці.</p>";
			}
			if($metro_name=="M5"){
				$metro_text="<p>Лівобережна лінія — майбутня нова лінія Київського метрополітену. Розташована у Деснянському і Дніпровському районах м. Києва. Протяжність першої черги — 4,96 км, 6 станцій. Траса Лівобережної лінії за планом пролягатиме по вісі вул. Оноре де Бальзака від вул. Милославської до проспекту Генерала Ватутіна, вздовж залізниці до Броварського проспекту з підключенням до Святошинсько-Броварської лінії біля ст. «Лівобережна».</p><p>У районі лінії розташовані масиви Воскресенський, Сєрова-Райдужний, Лівобережний, промисловий район «Воскресенський», Воскресенські та Русанівські сади, село Троєщина, Вигурівщина-Троєщина (найбільший житловий масив м. Києва з населенням 240 тисяч осіб). У районі розташовано близько 600 торгових місць.</p><p>У перспективі Лівобережна лінія буде продовжена до житлового масиву Позняки і може у майбутньому стати частиною київської кільцевої лінії метрополітену.</p><p>За останніми планами будівництво Лівобережної лінії метро не планується. Замість неї повинні спорудити швидкісний трамвай,</p>";
			}
			$("#help_metro").html($metro_text);
		},function(){
			$("#help_metro").html("")
		}
	)
}
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
$('#p').html('<p>Київський метрополітен — швидкісна позавулична транспортна система Києва. Діють три лінії, експлуатаційна довжина яких становить 69,648 км. До послуг пасажирів — 52 станції з трьома підземними пересадочними вузлами в центрі міста. Після відкриття 6 листопада 1960 року став третім метрополітеном в СРСР після московського і ленінградського.</p><p>Власником метрополітену є багатопрофільне комунальне підприємство «Київський метрополітен», створене у 1990 році. Компанія працевлаштовує майже 8 тисяч робітників (станом на 2011 рік), у його складі діють 17 експлуатаційних служб, в тому числі три електродепо метрополітену (ТЧ-1 «Дарниця», ТЧ-2 «Оболонь» і ТЧ-3 «Харківське»), вагоноремонтний завод (ВРЗ), дирекція будівництва метрополітену. Фінансові надходження поступають від основної діяльності — перевезення пасажирів, а також непрофільних доходів — надання в оренду площ та рекламомісць, реклами (метролайти, монітори на станціях, вагонах, оформлення станцій) та субвенції і компенсації з міського та державного бюджету.</p><p id=`Arseanlna`>Станція «Арсенальна» Святошинсько-Броварської лінії є найглибшою станцією метрополітену у світі й розташовується на глибині 105,5 метрів (відстань від поверхні землі до платформи), а наступна станція «Дніпро» є надземною, тому цей перегін є ще й світовим рекордсменом з перепаду глибин.</p><p>За радянських часів метрополітен мав присвяту Володимиру Леніну, однак зараз на вивісках при входах на станції це не вказано (слова «імені В. І. Леніна» демонтовані в 1990-х роках). У 1981 році нагороджений орденом Трудового Червоного Прапора.</p><p>Чотири станції першої черги будівництва («Вокзальна»[п 1], «Університет»[п 2], «Хрещатик»[п 3], «Арсенальна»[п 4]) визнані пам`ятками архітектури місцевого значення, ще три станції («Дніпро»[п 5], «Либідська»[п 6], «Золоті ворота»[п 7]) мають статус «щойно виявлений об`єкт культурної спадщини».</p><p>Автори станції «Золоті ворота» 1991 року були відзначені Державною премією України по архітектурі[п 8].</p><p>На всіх станціях Київського метрополітену присутнє 2G покриття операторів мобільного зв`язку Vodafone, Київстар, lifecell.</p><p>18–20 лютого 2014 року, вперше за усі роки роботи, за дорученням голови КМДА Володимира Макеєнка робота метрополітену була припинена під приводом «загрози терористичних актів у місті».</p>');
$('#e').text('English');}
else if ($('#e').text() == "English") {
$('#p').html('<p> Kiev underground - high-speed non-volatile transport system of Kiev. There are three lines with an operating length of 69,648 km. For the services of passengers - 52 stations with three underground transfer centers in the city center. After the discovery of November 6, 1960, it became the third subway in the USSR after the Moscow and Leningrad. </ P><p> The owner of the subway is a multifunctional utility company "Kyiv Metro", established in 1990. The company employs almost 8 thousand workers (as of 2011), it has 17 operational services, including three subway electrodes (PM-1 Darnitsa, PM-2 Obolon and PM-3 Kharkivske) Wagon Repair Factory (HRC), Directorate of Metro Construction. Financial revenues come from the main activities - transportation of passengers, as well as non-core income - renting space and advertising, advertising (metrolays, monitors at stations, cars, station registration) and subventions and compensation from the city and state budget. </ P><p id = `Arseanlna`> Arsenal`s station of the Svyatoshinsky-Brovarskaya line is the deepest subway station in the world and is located at a depth of 105.5 meters (distance from the surface of the earth to the platform), and the next station "Dnepr" is above ground, so this Perein is also a world record breaking point. </ p><p> During the Soviet era, the subway was devoted to Vladimir Lenin, but now it is not indicated on signboards at the entrances to the station (the words "on behalf of VI Lenin" were dismantled in the 1990s). In 1981 he was awarded the Order of the Red Banner of Labor. </ P<p> Four stations of the first stage of construction ("Vokzalna" [p 1], "University" [p 2], "Khreshchatyk" [p 3], "Arsenal" [p. 4]) are recognized as monuments of local architecture, yet three stations (Dnipro [5], Lybidska [6], «Golden Gate» [7]) have the status of "the newly discovered cultural heritage object". </ p><p> The authors of the Golden Gate station in 1991 were awarded the State Prize of Ukraine in architecture [p. 8]. </ p><p> At all stations of the Kyiv Metro there is a 2G coverage of mobile operators Vodafone, Kyivstar, lifecell. </ p><p> February 18-20, 2014, for the first time in all years of work, on behalf of the head of the KSCA, Vladimir Makeyenko, the subway was suspended on the pretext of "the threat of terrorist acts in the city." </ p>');
$('#e').text('Русский');}
else if ($('#e').text() == "Русский") {
$('#p').html('<P> Киевский метрополитен - скоростная внеуличного транспортная система Киева. Действуют три линии, эксплуатационная длина которых составляет 69,648 км. К услугам пассажиров - 52 станции с тремя подземными пересадочными узлами в центре города. После открытия 6 ноября 1960 стал третьим метрополитеном в СССР после московского и ленинградского. </ P><P> Владельцем метрополитена является многопрофильное коммунальное предприятие «Киевский метрополитен», созданное в 1990 году. Компания трудоустраивает почти 8000 рабочих (по состоянию на 2011 год), в его составе действуют 17 эксплуатационных служб, в том числе три электродепо метрополитена (ТЧ-1 "Дарница", ТВ-2 «Оболонь» и ТЧ-3 «Харьковское»), вагоноремонтный завод (ВРЗ), дирекция строительства метрополитена. Финансовые поступления поступают от основной деятельности - перевозки пассажиров, а также непрофильных доходов - предоставление в аренду площадей и рекламомисць, рекламы (метролайты, мониторы на станциях, вагонах, оформление станций) и субвенции и компенсации из городского и государственного бюджета. </ P><P id = "Arseanlna"> Станция «Арсенальная» Святошинско-Броварской линии является самой глубокой станцией метрополитена в мире и располагается на глубине 105,5 метров (расстояние от поверхности земли до платформы), а следующая станция «Днепр» является надземной, поэтому этот перегон еще и мировым рекордсменом по перепада глубин. </ p><P> В советское время метрополитен имел посвящение Владимиру Ленину, однако сейчас на вывесках при входах на станции это не указал (слова «имени В. И. Ленина» демонтированы в 1990-х годах). В 1981 году награжден орденом Трудового Красного Знамени. </ P><P> Четыре станции первой очереди строительства ( «Вокзальная» [п 1], «Университет» [п 2], «Крещатик» [п 3], «Арсенальная» [п 4]) признаны памятниками архитектуры местного значения, еще три станции ( «Днепр» [п 5], «Лыбидская» [п 6], «Золотые ворота» [п 7]) имеют статус «только выявленный объект культурного наследия». </ p><P> Авторы станции «Золотые ворота» в 1991 году были отмечены Государственной премией Украины по архитектуре [п 8]. </ P><P> На всех станциях Киевского метрополитена присутствует 2G покрытия операторов мобильной связи Vodafone, Киевстар, lifecell. </ P><P> 18-20 февраля 2014 года, впервые за все годы работы, по поручению председателя КГГА Владимира Макеенко работа метрополитена была прекращена под предлогом «угрозы террористических актов в городе». </ P>');
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
	$('#div_for_metro img').each(function(){
		$(this).attr('title','');
		$(this).click(function(){
change_width(this,1.5);
});
});
})
;
});