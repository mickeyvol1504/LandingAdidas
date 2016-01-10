$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".mainContact").click(function() {
		$.scrollTo($(".footer"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$(".carousel").owlCarousel({
				items: 1,
				navigation: true,
				slideSpeed: 300,
				paginationSpeed: 300
			});
	// var owl = $(".carousel");
	// owl.owlCarousel({
	// 	items : 1
	// });
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });
	// $(".next_button").click(function(){
	// 	owl.trigger("owl.next");
	// });
	// $(".prev_button").click(function(){
	// 	owl.trigger("owl.prev");
		
	// });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	//Блок с описанием доставки
	$('.delivery').on('click', function(){
		var modal = $('#modalDelivery');
		modal.css('top', (window.innerHeight - modal.height()) / 3);
		modal.css('left', (window.innerWidth - modal.width()) / 2);
		modal.show();
	});

	$('.fa-times').on('click', function(){
		var modal = $('#modalDelivery');
		modal.hide();
	});

	//Блок изменения размера обуви
	$('.fa-chevron-left').click(function(){
		$(".foot_number").val(parseInt($(".foot_number").val())-1);		
	});
	$('.fa-chevron-right').click(function(){
		$(".foot_number").val(parseInt($(".foot_number").val())+1);		
	});

	//Блок изменения цвета обуви в форме
	$('#black').on('click', function(){
		document.getElementById("sneaker").style.backgroundImage = 'url(images/black_shoes.png)';
		document.getElementById("sneakerBig").style.backgroundImage = 'url(images/black_shoes_big.png)';
	})
	$('#orange').on('click', function(){
		document.getElementById("sneaker").style.backgroundImage = 'url(images/orange_shoes.png)';
		document.getElementById("sneakerBig").style.backgroundImage = 'url(images/orange_shoes_big.png)';
	})
	$('#green').on('click', function(){
		document.getElementById("sneaker").style.backgroundImage = 'url(images/green_shoes.png)';
		document.getElementById("sneakerBig").style.backgroundImage = 'url(images/green_shoes_big.png)';
	})
	$('#grey').on('click', function(){
		document.getElementById("sneaker").style.backgroundImage = 'url(images/grey_shoes.png)';
		document.getElementById("sneakerBig").style.backgroundImage = 'url(images/grey_shoes_big.png)';
	})

	//Блок увеличения картинки обуви
	$('.fa-search-plus').on('click', function(){
		var sneakering = $('#sneakerBig');
		sneakering.css('top', (window.innerHeight - sneakering.height()) / 2);
		sneakering.css('left', (window.innerWidth - sneakering.width()) / 2);
		sneakering.show();
	});

	$('.fa-times').on('click', function(){
		var sneakering = $('#sneakerBig');
		sneakering.hide();
	});

});
