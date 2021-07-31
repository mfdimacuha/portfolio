$("#owl-demo").owlCarousel({
    center: true,
    items:1,
    loop:true,
    autoplay:true,
    dots:true,
    margin:50,
    responsive:{
        768:{
            items:2
        },
        1920:{
            items:4
        }
    }
});

// Back To Top

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});