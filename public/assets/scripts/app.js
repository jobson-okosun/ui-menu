
// demo scripting, all in jquery

$(document).ready(function(){

	// toggle between the show/hide form view


	// show function 

	$("#form-toggler-show").click( function(){

			$(this).addClass('d-none');

			$("#form-toggler-hide").removeClass("d-none");
			$("#form-toggler-hide").addClass("d-flex d-block");


			// form container show animation'

			$(".form-view-container").animate({

				width: '80%',
				height: '70%',
				padding: '45px 20px 20px 20px',
				border: '2px solid white',
				left: '10%'

			}, 500);


	})


	// hide function

	$("#form-toggler-hide").click(function(){

		$(this).removeClass('d-flex d-block');
		$(this).addClass('d-none');

	
		$("#form-toggler-show").removeClass("d-none");
		$("#form-toggler-show").addClass("d-flex d-block");

		// form container hide animation
		
		$(".form-view-container").animate({

			width: '0',
			height: '0',
			padding: '0',
			border: '0',
			left: '50%'

		}, 1000);
		 
	})
	
})