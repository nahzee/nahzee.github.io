$(document).ready(function(){     

	var buttonValue;

	/* Buttons functions */
	$('#btnRed').click(function(e){ 
		/* Change the value of buttonValue */
		buttonValue = 'RED WAS PRESSED.';
		/* Run Ajax script */		
		sendData();
		return false;
    });

	$('#btnOrange').click(function(e){ 
		buttonValue = 'ORANGE WAS PRESSED.';
		sendData();
		return false;
    });
    $('#btnYellow').click(function(e){ 
		buttonValue = 'YELLOW WAS PRESSED.';
		sendData();
		return false;
    });
    $('#btnGreen').click(function(e){ 
		buttonValue = 'GREEN WAS PRESSED.';
		sendData();
		return false;
    });
    $('#btnBlue').click(function(e){ 
		buttonValue = 'BLUE WAS PRESSED.';
		sendData();
		return false;
    });
     $('#btnPurple').click(function(e){ 
		buttonValue = 'PURPLE WAS PRESSED.';
		sendData();
		return false;
    });

	/* Function to send buttonValue to the PHP file */
	function sendData() {
		$.ajax({
			type: 'POST',
			url: 'scripts/save.php',
			data: {
				'buttonValue': buttonValue
			},
			success: function() {
				window.console.log("success");
			}
		});
	}
});


