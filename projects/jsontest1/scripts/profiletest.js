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
		  $("#name").append(jsonData[0].name);
		  $("#age").append(jsonData[0].age);
		  $("#insigh").append(jsonData[0].iveNeverSinceIGotHere);
		  $("#oncpiwco").append(jsonData[0].oneCoolPlaceIWantedCheckOut);
		  $("#pets").append(jsonData[0].favoritePets);
		  $("#color").append(jsonData[0].favoriteColor);
		  $("#fwdycf").append(jsonData[0].foreignWhereDidYouComeFrom);
		  $("#school").append(jsonData[0].school);
		  $("#sasl").append(jsonData[0].shareASocialLink);
		  $("#slf").append(jsonData[0].socialLinkFrom);
		  $("#wtmns").append(jsonData[0].willingToMeetNewPeopleStrangers);
		  $("#food").append(jsonData[0].whatsYourFavoriteFood);
		  $("#tywtd").append(jsonData[0].thingYouWantToDoanswer); 

	}})})

	// var whatColor
	// colors.["red","orange","yellow","green","blue","purple","black","gray","white","gold","silver"]




// var skydiveObjects = _.where(objects, {thingYouWantToDo: "skydive"});

// _.map(skydiveObjects, function(obj) {
//    $("related").append(objects.name);
// })



