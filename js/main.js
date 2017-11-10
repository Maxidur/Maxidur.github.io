$(".buttom_menu").click(function(){
  	$(this).toggleClass("active");
  	$(".top_menu").fadeToggle(600);
  });

$('.parallax-window').parallax({imageSrc: 'images/web.jpg'});

var containerEl = document.getElementById("portfolio_work")
var mixer = mixitup(containerEl, {
	animation: {
		effects: "fade translateZ(-100px)"
	}
});
mixer.filter(".bologna");


// COMPUTER
$(".fa-power-off").click(function(){
	$(".fa-power-off").css("color","#8c0808");
	$(".computer_wrapper").css("visibility","visible");
	$(".computer_noise").css("display","block").animate({'opacity': 0}, 6000, function(){
		$(".computer_noise").css("display","none")
	});
});

// RESUME Сhange Class
function bootstrapClass() {
	if($(window).width() < 450) {
		$(".work").removeClass("col-xs-6");
		$(".work").addClass("col-xs-12");
		$(".education").removeClass("col-xs-6")
		$(".education").addClass("col-xs-12")
	}  else {
		$(".work").removeClass("col-xs-12");
		$(".work").addClass("col-xs-6");
		$(".education").removeClass("col-xs-12");
		$(".education").addClass("col-xs-6");
	}
}

bootstrapClass();

$(window).resize(function(){
	bootstrapClass();
});

// validate
// $("form").validate({
// 	rules: {
// 		name:{
// 			required: true,
// 			maxlength: 14
// 		}
// 	}
// });

// animate при скролее
new WOW().init();

// menu скролл
$(document).ready(function() {
	$("#menu").on("click","a", function(event) {
		event.preventDefault();
		$(".buttom_menu").removeClass("active");
		$(".top_menu").fadeOut(400);

		var id = $(this).attr("href");
		var top = $(id).offset().top;

		$("body,html").animate({scrollTop: top}, 1500);
	});
});






