$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'scripts/data.json',
    dataType: 'json',
    success: function(data) {

      $.each(data, function(i, player) {
var nametag = player.nametag.replace(/\s+/g, '')

        // Creating Main Nav 2nd level
        if (player.typetag == "adventurer") {
          $("#rAdventurer").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        } else if (player.typetag == "foodie") {
          $("#rFoodie").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        } else if (player.typetag == "traveler") {
          $("#rTraveler").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        } else if (player.typetag == "fishing") {
          $("#rFishmen").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        } else if (player.typetag == "pets") {
          $("#rDogLover").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        } else if (player.typetag == "artist") {
          $("#rArtist").append('<p class="name-link" data-link="' + player.name + '">' + player.thingYouWantToDoanswer + '</p>');
        }
        // Creating all the Player Pages 3rd level
        $("#players").append('<div id="' + nametag + '" class="player">' +
        
        //Ying for names images, please Replace the next line with '<div id="name"> <img src="name-assect/' + player.name + '.png"></div>' + '</br>' +
          '<div id="name"> <img src="name-assect/' + nametag + '.png"></div>' + '</br>' +
          '<div id="fwdycf">' + player.foreignWhereDidYouComeFrom + '</div>' + '</br>' +
          '<div id="insigh">' + player.iveNeverSinceIGotHere + '</div>' + '</br>' +
          '<div id="oncpiwco">' + player.oneCoolPlaceIWantedCheckOut + '</div>' + '</br>' +
          '<div id="pets">' + player.favoritePets + '</div>' + '</br>' +
          '<div id="color">' + player.favoriteColor + '</div>' + '</br>' +
          '<div id="age">' + player.age + '</div>' + '</br>' +
          '<div id="school">' + player.school + '</div>' + '</br>' +
          '<div id="slf">' + player.socialLinkFrom + '</div>' + '</br>' +
          '<div id="sasl">' + player.shareASocialLink + '</div>' + '</br>' +
          '<div id="wtmnps">' + player.willingToMeetNewPeopleStrangers + '</div>' + '</br>' +
          '<div id="tywtda">' + player.thingYouWantToDoanswer + '</div>' + '</div>');


      });

      $('.name-link').click(function() {
        var playerName = '#' + $(this).data('link');
        $(".player").hide();
        $(playerName).show();
      })

    }
  });

  $("#Adventurer").click(function() {
    $(".results").html('');
    $("#rAdventurer").show();
  });
  $("#Foodie").click(function() {
    $(".results").html('');
    $("#rFoodie").show();
  });
  $("#Fishmen").click(function() {
    $(".results").html('');
    $("#rFishmen").show();
  });
  $("#DogLover").click(function() {
    $(".results").html('');
    $("#rDogLover").show();
  });
  $("#Traveler").click(function() {
    $(".results").html('');
    $("#rTraveler").show();
  });
  $("#Artist").click(function() {
    $(".results").html('');
    $("#rArtist").show();
  });
});
