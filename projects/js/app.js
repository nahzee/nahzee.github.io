$(document).ready(function(){     
	// $("body").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem + ' ' + timer.day);
	setInterval(function() {
		$("body").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem + ' ' + timer.day);
	}, 1000);
});