$(document).ready(function(){

	var whatButtonWasPressed;

	 // Buttons functions 
	$("#btnRed").click(function(e){ 
		 // Change the value of buttonValue 
		whatButtonWasPressed = "RED WAS PRESSED.";
		 // Run Ajax script 		
		sendData();
    });

	$("#btnOrange").click(function(e){ 
		whatButtonWasPressed = "ORANGE WAS PRESSED.";
		sendData();
    });
    
    	$("#btnYellow").click(function(e){ 
		whatButtonWasPressed = "YELLOW WAS PRESSED.";
		sendData();
    });
    
    	$("#btnGreen").click(function(e){ 
		whatButtonWasPressed = "GREEN WAS PRESSED.";
		sendData();
    });
    
    	$("#btnBlue").click(function(e){ 
		whatButtonWasPressed = "BLUE WAS PRESSED.";
		sendData();
    });
    
    	$("#btnPurple").click(function(e){ 
		whatButtonWasPressed = "PURPLE WAS PRESSED.";
		sendData();
    });
    

	 // Function to send buttonValue to the PHP file 
	function sendData() {
		$.ajax({
			type: 'POST',
			url: 'scripts/save.php',
			data: {
				'tellSeverTheButtonValue': whatButtonWasPressed
			},
			success: function() {
				window.console.log("success");
			}
		});
	}

	// Function to get our textfile data 
	function getData() {
		$.ajax({
			type: 'GET',
			url: 'scripts/data.txt',
			success: function(data) {
				$("#messageBox").html(data);
			},
			complete: function() {
				// Runs the function every .5 seconds
				setTimeout(function() {
					getData();
				}, 500);
			}		
		});
	}

	// Initilize the function above
	getData();

});