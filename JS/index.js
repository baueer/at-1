<script type="text/javascript">
	$(window).resize(function() {
		var w = window.innerWidth;
		console.log(w);
		if(w < 601) {
			$('h1').addClass('text-center');
			$('.col-lg-5').addClass('text-center');
			$('.col-lg-5').removeClass('col-sm-5');
		} else {
			$('h1').removeClass('text-center');
			$('.col-lg-5').removeClass('text-center');
			$('.col-lg-5').addClass('col-sm-5');
		}
	});
</script>