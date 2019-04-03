$(document).ready(function(){
	// clicking
	$(".clicking").click(function(){
		$(this).toggleClass("clicked")		
		console.log($(this).css("background-color"))

		if($(this).css("background-color") == "rgb(255, 0, 0)"){
			$(this).css({"background-color" : "green"})
		}else{
			$(this).css({"background-color" : "red"})
		}

	})

	// keypress
	$(document).keypress(function(event){
		console.log(event.key)
		$("#keyspressed").html(event.key)
		$("#allkeyspressed").append(event.key)

		if(event.key == "g"){
			$("#keyspressed").css({"font-family": "helvetica"})
		}
	})

	// scroll
	$(window).scroll(function(event){
		
		var distanceScrolled = $(window).scrollTop();
		var elementsPosition = $("#keyspressed").offset().top;
		var documentHeight = $("body").outerHeight();
		var windowHeight = $(window).innerHeight();

		//console.log(distanceScrolled, elementsPosition, documentHeight, windowHeight)

		// if we've scrolled past an element
		if(distanceScrolled > elementsPosition){
			$("#keyspressed").css({"background-color" : "pink"})
		}

		// how far down the page we've gotten
		var percentageScrolled = distanceScrolled/(documentHeight - windowHeight);
		console.log(percentageScrolled)
		$(".scrollindicator").css({"top" : Math.round(99*percentageScrolled) + "%" })

		// if we've gotten to the bottom of the page
		if(distanceScrolled >= documentHeight - windowHeight){
			console.log("end!")
		}
	})


	// settimeout
	setTimeout(function(){
		console.log("1 second!")
	}, 1000)

	// setinterval && quitting setinterval
	var counter = 0;
	var myInterval = setInterval(function(){
		console.log("every half second")
		counter++;
		if(counter >= 5){
			clearInterval(myInterval)
		}
	}, 500)

})