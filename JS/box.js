$(document).ready(function() {
	var box = $('.box');
	console.log('hi')

	box.on('click', function(event) {
		var el = $(this);

		el.animate({
			'margin-left': 1000,
			'background-color': 'red'
		}, 3000, 'easeInOutElastic', function(){
			el.css({
				'margin-left': 20,
				'background-color': 'white'
			});
		});
	});
});

/*$(function() {

});
Same as above but not as easy to read*/