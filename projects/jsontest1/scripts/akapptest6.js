// YOU HAVE TO DECLARE THE VARIABLES HERE BECAUSE IF YOU DON'T THEY YOU CAN'T USE THEM OUTSIDE OF THE LOOP

var jsonData, select;

 var $selectre = $('#results');
 var $selectpro = $('#profile');

function typetag(tag) {
	 $('#results').html('');

	 if (obj.typetag = 'adventurer') {

	 $.each(jsonData, function(key, obj) {


		
		$("#results").append(
				'<div id="' + name + key + '" class="todo">' + obj.thingYouWantToDoanswer + '</div>' +
				'<span>--------------------------------------------------</span>'
			);
		}); }



		else if (obj.typetag = 'foodie') {
			$("#results").append(
				'<div id="' + name + key + '" class="food">' + obj.whatsYourFavoriteFood + '</div>' +
				'<span>-----------------------------------------------</span>'
			);
		}

	};
}



$(document).ready(function() {
	$("#Adventurer").click(function() {	
		$('#results').empty('');	
		typetag("adventurer");
	});		
	$("#Foodie").click(function() {
		$('#results').empty('');
		typetag("foodie");

	});
	$("#Traveler").click(function() {
		
		typetag("traveler");
	});
	$("#Doglover").click(function() {
		$selectre.html('')
		typetag("doglover");
	});
	$("#Fishmen").click(function() {
		$selectre.html('')
		typetag("fishmen");
	});
	$("#Artist").click(function() {
		$selectre.html('')
		typetag("artist");
	});
				
    // Get JSON file
    console.log('document pass')

    $.ajax({
        type: 'GET',
        url: 'scripts/data.json',
		dataType: 'json',
        success: function(data) {

			console.log('ajax pass');
			jsonData = data;		
        }
    });
});