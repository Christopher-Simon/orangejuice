$(function(){
	var $activeSlide = $('#slides .slide:first-child');

	//show first slide
	//$activeSlide.addClass("showing");

	//console.log(slides);

	$("#decline").on("click", function(){
	    goToSlide('decline');
	})
	$("#approve").on("click", function(){
	    goToSlide('approve');
	})


	function goToSlide(action) {
			$activeSlide.removeClass("showing")
			$activeSlide = $activeSlide.next(".slide");
		//send data to
		if(action == "approve"){
			console.log(action);
		} else {
			console.log(action);
		}

		$activeSlide.addClass("showing");

	    // slides[currentSlide].className = 'slide';
	    // currentSlide = (n+slides.length)%slides.length;
	    // slides[currentSlide].className = 'slide showing';
	}
});