// YOU HAVE TO DECLARE THE VARIABLES HERE BECAUSE IF YOU DON'T THEY YOU CAN'T USE THEM OUTSIDE OF THE LOOP

var jsonData, select;

function typetag(tag) {
	 $('#profile').html('');		
	 	
	 $.each(jsonData, function(key, obj) {
		 
		if (obj.typetag == tag) {
			obj.name = obj.name.replace(/\s+/g, '-').toLowerCase();
			obj.iveNeverSinceIGotHere = obj.iveNeverSinceIGotHere ? obj.iveNeverSinceIGotHere : 'iveNeverSinceIGotHere';
			obj.oneCoolPlaceIWantedCheckOut = obj.oneCoolPlaceIWantedCheckOut ? obj.oneCoolPlaceIWantedCheckOut : 'oneCoolPlaceIWantedCheckOut';
			obj.favoritePets = obj.favoritePets ? obj.favoritePets : 'favoritePets';
			obj.favoriteColor = obj.favoriteColor ? obj.favoriteColor : 'favoriteColor';
			obj.foreignWhereDidYouComeFrom = obj.foreignWhereDidYouComeFrom ? obj.foreignWhereDidYouComeFrom : 'foreignWhereDidYouComeFrom';
			obj.school = obj.school ? obj.school : 'school';
			obj.shareASocialLink = obj.shareASocialLink ? obj.shareASocialLink : 'shareASocialLink';
			obj.socialLinkFrom = obj.socialLinkFrom ? obj.socialLinkFrom : 'socialLinkFrom';
			obj.willingToMeetNewPeopleStrangers = obj.willingToMeetNewPeopleStrangers ? obj.willingToMeetNewPeopleStrangers : 'willingToMeetNewPeopleStrangers';
			obj.whatsYourFavoriteFood = obj.whatsYourFavoriteFood ? obj.whatsYourFavoriteFood : 'whatsYourFavoriteFood';
			obj.thingYouWantToDo = obj.thingYouWantToDo ? obj.thingYouWantToDo : 'thingYouWantToDo';
			obj.thingYouWantToDoanswer = obj.thingYouWantToDoanswer ? obj.thingYouWantToDoanswer : 'thingYouWantToDoanswer';
			
			var related = [];
			$.each(jsonData, function(key2, obj2) {
				if(obj2.thingYouWantToDo == obj.thingYouWantToDo && key != key2)
				{	  
					related.push(obj2.name);
				}		
			});
			
			$("#profile").append(
				'<div id="' + name + key + '" class="name">' + obj.name + '</div>' +
				'<div id="' + name + key + '" class="age">' + obj.age + '</div>' +
				'<div id="' + name + key + '" class="gothere">' + obj.iveNeverSinceIGotHere + '</div>' +
				'<div id="' + name + key + '" class="checkout">' + obj.oneCoolPlaceIWantedCheckOut + '</div> ' +
				'<div id="' + name + key + '" class="pets">' + obj.favoritePets + '</div>' +
				'<div id="' + name + key + '" class="color">' + obj.favoriteColor + '</div>' +
				'<div id="' + name + key + '" class="comefrom">' + obj.foreignWhereDidYouComeFrom + '</div>' +
				'<div id="' + name + key + '" class="school">' + obj.school + '</div>' +
				'<div id="' + name + key + '" class="sharesocial">' + obj.shareASocialLink + '</div>' +
				'<div id="' + name + key + '" class="socialfrom">' + obj.socialLinkFrom + '</div>' +
				'<div id="' + name + key + '" class="meetnew">' + obj.willingToMeetNewPeopleStrangers + '</div>' +
				'<div id="' + name + key + '" class="food">' + obj.whatsYourFavoriteFood + '</div>' +
				'<div id="' + name + key + '" class="todo">' + obj.thingYouWantToDo + '</div>' +
				'<div id="' + name + key + '" class="todo">' + obj.thingYouWantToDoanswer + '</div>' +
				'<div id="related' + key + '" class="related">' + related.join(", ") + '</div>' +
				'<span>-----------------------------------------------</span>'
			);
		}
	});
}



$(document).ready(function() {
	$("#Adventurer").click(function() {	
		typetag("adventurer");	
	});		
	$("#Foodie").click(function() {
		typetag("foodie");
	});
	$("#Traveler").click(function() {
		typetag("traveler");
	});
	$("#Doglover").click(function() {
		typetag("doglover");
	});
	$("#Fishmen").click(function() {
		typetag("fishmen");
	});
	$("#Artist").click(function() {
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