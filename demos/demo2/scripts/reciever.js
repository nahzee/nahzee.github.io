var getData = function() {
	$.ajax({
		type: 'GET',
		url: 'scripts/omg.txt',
		data: 'text',
		success: function(data) {
			$('#message').prepend(data+' ');
			if (data == 'RED WAS PRESSED.') {
				$('body').css({
					'background-color': 'red',
					'color': 'black'
				});
				$('#imageBox').show();
			} else if (data == 'ORANGE WAS PRESSED.') {
				$('body').css({
					'background-color': 'orange',
					'color': 'black'
				});	
			} else if (data == 'YELLOW WAS PRESSED.') {
				$('body').css({
					'background-color': 'yellow',
					'color': 'black'
				});	
			} else if (data == 'GREEN WAS PRESSED.') {
				$('body').css({
					'background-color': 'green',
					'color': 'white'
				});	
			} else if (data == 'BLUE WAS PRESSED.') {
				$('body').css({
					'background-color': 'blue',
					'color': 'white'
				});	
			} else if (data == 'PURPLE WAS PRESSED.') {
				$('body').css({
					'background-color': 'purple',
					'color': 'black'
				});	
			}
		},
		/* Repeats every 200 millisecons */
		complete: function() {
			setTimeout(function() {
				getData();
			}, 500);
		}		
	});
}

$(document).ready(function(){     
	getData();
});


