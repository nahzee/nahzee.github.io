$(document).ready(function(){

	// Get JSON file
	$.ajax({
		type: 'GET',
		url: 'scripts/data.json',
		success: function(data) {
   var jsonData = data; 
			alert("hello");
			//KIKKOS
			// $.each(data, function(i, objects){
			// 	$("#message").append(objects.name);
				
		 //    });



		  $("#message").append("Hi " + jsonData[0].name);
		  $("#message2").append(" You said you want to " + jsonData[0].thingYouWantToDo);
 
       for(var i = 0; i < jsonData.length; i++)
                {
				  if(jsonData[i].thingYouWantToDo == 'Skydive')
				  { 	  	
				     $("#related").append(jsonData[i].name+",");
				  }
				}
		var randomArrayItem = Math.floor(Math.random * myArray.length); 
		},

	});

	// var whatColor
	// colors.["red","orange","yellow","green","blue","purple","black","gray","white","gold","silver"]




// var skydiveObjects = _.where(objects, {thingYouWantToDo: "skydive"});

// _.map(skydiveObjects, function(obj) {
//    $("related").append(objects.name);
// })
});


