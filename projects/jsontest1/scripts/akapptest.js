$(document).ready(function() {

    // Get JSON file
    $.ajax({
      type: 'GET',
      url: 'scripts/data.json',
      success: function(data) {

        var jsonData = data;
        var $select = $('#related');

          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'adventurer') {
            
            	// replaced spaces with dashes so that you can have a valid ID name
				var formattedId = jsonData[i].name.replace(/\s+/g, '-').toLowerCase();
				var formattedId2 = jsonData[i].age.replace(/\s+/g, '-').toLowerCase();
				var formattedId3 = jsonData[i].iveNeverSinceIGotHere.replace(/\s+/g, '-').toLowerCase();
				var formattedId4 = jsonData[i].oneCoolPlaceIWantedCheckOut.replace(/\s+/g, '-').toLowerCase();
				var formattedId5 = jsonData[i].favoritePets.replace(/\s+/g, '-').toLowerCase();
				var formattedId6 = jsonData[i].favoriteColor.replace(/\s+/g, '-').toLowerCase();
				var formattedId7 = jsonData[i].foreignWhereDidYouComeFrom.replace(/\s+/g, '-').toLowerCase();
				var formattedId8 = jsonData[i].school.replace(/\s+/g, '-').toLowerCase();
				var formattedId9 = jsonData[i].shareASocialLink.replace(/\s+/g, '-').toLowerCase();
				var formattedId10 = jsonData[i].socialLinkFrom.replace(/\s+/g, '-').toLowerCase();
				var formattedId11 = jsonData[i].willingToMeetNewPeopleStrangers.replace(/\s+/g, '-').toLowerCase();
				var formattedId12 = jsonData[i].thingYouWantToDoanswer.replace(/\s+/g, '-').toLowerCase();
				var formattedId13 = jsonData[i].whatsYourFavoriteFood.replace(/\s+/g, '-').toLowerCase();
        

        $.each(data, function(i, jsonData){
				$("#profile").append(
					  '<div id="' + formattedId + '" class="name">'+ jsonData.name + '</div> <br/>'
					  '<div id="' + formattedId2 + '" class="age">'+ jsonData.age + '</div> <br/>'
					  '<div id="' + formattedId3 + '" class="gotHere">'+ jsonData.iveNeverSinceIGotHere + '</div> <br/>'
					  '<div id="' + formattedId4 + '" class="checkout">'+ jsonData.oneCoolPlaceIWantedCheckOut + '</div> <br/>'
					  '<div id="' + formattedId5 + '" class="pets">'+ jsonData.favoritePets + '</div> <br/>'
					  '<div id="' + formattedId6 + '" class="color">'+ jsonData.favoriteColor + '</div> <br/>'
					  '<div id="' + formattedId7 + '" class="comefrom">'+ jsonData.foreignWhereDidYouComeFrom + '</div> <br/>'
					  '<div id="' + formattedId8 + '" class="school">'+ jsonData.school + '</div> <br/>'
					  '<div id="' + formattedId9 + '" class="sharesocial">'+ jsonData.shareASocialLink + '</div> <br/>'
					  '<div id="' + formattedId10 + '" class="socialfrom">'+ jsonData.socialLinkFrom + '</div> <br/>'
					  '<div id="' + formattedId11 + '" class="meetnew">'+ jsonData.willingToMeetNewPeopleStrangers + '</div> <br/>'
					  '<div id="' + formattedId12 + '" class="food">'+ jsonData.whatsYourFavoriteFood + '</div> <br/>'
					  '<div id="' + formattedId13 + '" class="todo">'+ jsonData.thingYouWantToDoanswer + '</div> <br/>'
					);
		     });
            }
          }
			// VVVVV [close up from there]
           /*});*/
        $("#Adventurer").click(function() {
          $select.html('');
          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'adventurer') {
            
            	// replaced spaces with dashes so that you can have a valid ID name
			

              $("#related").append('<div id="' + formattedId + '" class="">' + jsonData[i].thingYouWantToDoanswer + '</div>');
            }
          }
        });
        
        //<div id="'++'" class="">' +jsonData[i].thingYouWantToDoanswer+ '</div>';

        $("#Foodie").click(function() {
          $select.html('');
          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'foodie') {
              $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
            }
          }
        });

        $("#Traveler").click(function() {
          $select.html('');
          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'traveler') {
              $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
            }
          }
        });

        $("#Fishmen").click(function() {
          $select.html('');
          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'fishmen') {
              $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
            }
          }
        });


        $("#DogLover").click(function() {
          $select.html('');
          for (var i = i; i < jsonData.length; i++) {
            if (jsonData[i].typetag == 'doglove') {
              $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
            }
          }
        });



        ;
      }
    })
  })
  // var whatColor
  // colors.["red","orange","yellow","green","blue","purple","black","gray","white","gold","silver"]

// var skydiveObjects = _.where(objects, {thingYouWantToDo: "skydive"});

// _.map(skydiveObjects, function(obj) {
//    $("related").append(objects.name);
// })
