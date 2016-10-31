$(document).ready(function() {

    // Get JSON file
    console.log('document pass')

    $.ajax({
        type: 'GET',
        url: 'scripts/data.json',
        success: function(data) {

            var jsonData = data;
            var $select = $('#related');


            // YOU HAVE TO DECLARE THE VARIABLES HERE BECAUSE IF YOU DON'T THEY YOU CAN'T USE THEM OUTSIDE OF THE LOOP 

            var formattedId, formattedId2, formattedId3, formattedId4, formattedId5, formattedId6, formattedId7, formattedId8, formattedId9, formattedId10, formattedId11, formattedId12, formattedId13;

            console.log('ajax pass');
            alert("hello");


            $.each(data, function(i, jsonData) {

                formattedId = jsonData.name.replace(/\s+/g, '-').toLowerCase();

                formattedId2 = jsonData.age;

                jsonData.iveNeverSinceIGotHere = jsonData.iveNeverSinceIGotHere ? jsonData.iveNeverSinceIGotHere : 'iveNeverSinceIGotHere';
                formattedId3 = jsonData.iveNeverSinceIGotHere.replace(/\s+/g, '-').toLowerCase();

                jsonData.oneCoolPlaceIWantedCheckOut = jsonData.oneCoolPlaceIWantedCheckOut ? jsonData.oneCoolPlaceIWantedCheckOut : 'oneCoolPlaceIWantedCheckOut';
                formattedId4 = jsonData.oneCoolPlaceIWantedCheckOut.replace(/\s+/g, '-').toLowerCase();

                jsonData.favoritePets = jsonData.favoritePets ? jsonData.favoritePets : 'favoritePets';
                formattedId5 = jsonData.favoritePets.replace(/\s+/g, '-').toLowerCase();

                jsonData.favoriteColor = jsonData.favoriteColor ? jsonData.favoriteColor : 'favoriteColor';
                formattedId6 = jsonData.favoriteColor.replace(/\s+/g, '-').toLowerCase();

                jsonData.foreignWhereDidYouComeFrom = jsonData.foreignWhereDidYouComeFrom ? jsonData.foreignWhereDidYouComeFrom : 'foreignWhereDidYouComeFrom';
                formattedId7 = jsonData.foreignWhereDidYouComeFrom.replace(/\s+/g, '-').toLowerCase();

                jsonData.school = jsonData.school ? jsonData.school : 'school';
                formattedId8 = jsonData.school.replace(/\s+/g, '-').toLowerCase();

                jsonData.shareASocialLink = jsonData.shareASocialLink ? jsonData.shareASocialLink : 'shareASocialLink';
                formattedId9 = jsonData.shareASocialLink.replace(/\s+/g, '-').toLowerCase();

                jsonData.socialLinkFrom = jsonData.socialLinkFrom ? jsonData.socialLinkFrom : 'socialLinkFrom';
                formattedId10 = jsonData.socialLinkFrom.replace(/\s+/g, '-').toLowerCase();

                jsonData.willingToMeetNewPeopleStrangers = jsonData.willingToMeetNewPeopleStrangers ? jsonData.willingToMeetNewPeopleStrangers : 'willingToMeetNewPeopleStrangers';
                formattedId11 = jsonData.willingToMeetNewPeopleStrangers.replace(/\s+/g, '-').toLowerCase();

                jsonData.thingYouWantToDoanswer = jsonData.thingYouWantToDoanswer ? jsonData.thingYouWantToDoanswer : 'thingYouWantToDoanswer';
                formattedId13 = jsonData.thingYouWantToDoanswer.replace(/\s+/g, '-').toLowerCase();

                jsonData.whatsYourFavoriteFood = jsonData.whatsYourFavoriteFood ? jsonData.whatsYourFavoriteFood : 'whatsYourFavoriteFood';
                formattedId12 = jsonData.whatsYourFavoriteFood.replace(/\s+/g, '-').toLowerCase();

                $("#profile").append(
                    '<div id="' + formattedId + '" class="name">' + jsonData.name + '</div> <br/>' +
                    '<div id="' + formattedId2 + '" class="age">' + jsonData.age + '</div> <br/>' +
                    '<div id="' + formattedId3 + '" class="gothere">' + jsonData.iveNeverSinceIGotHere + '</div> <br/>' +
                    '<div id="' + formattedId4 + '" class="checkout">' + jsonData.oneCoolPlaceIWantedCheckOut + '</div> <br/>' +
                    '<div id="' + formattedId5 + '" class="pets">' + jsonData.favoritePets + '</div> <br/>' +
                    '<div id="' + formattedId6 + '" class="color">' + jsonData.favoriteColor + '</div> <br/>' +
                    '<div id="' + formattedId7 + '" class="comefrom">' + jsonData.foreignWhereDidYouComeFrom + '</div> <br/>' +
                    '<div id="' + formattedId8 + '" class="school">' + jsonData.school + '</div> <br/>' +
                    '<div id="' + formattedId9 + '" class="sharesocial">' + jsonData.shareASocialLink + '</div> <br/>' +
                    '<div id="' + formattedId10 + '" class="socialfrom">' + jsonData.socialLinkFrom + '</div> <br/>' +
                    '<div id="' + formattedId11 + '" class="meetnew">' + jsonData.willingToMeetNewPeopleStrangers + '</div> <br/>' +
                    '<div id="' + formattedId12 + '" class="food">' + jsonData.whatsYourFavoriteFood + '</div> <br/>' +
                    '<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div> <br/><span>-----------------------------------------------</span>'
                );

                ///THIS ONE DOWN HERE                           

                $("#Adventurer").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {
                        if (jsonData.typetag == 'adventurer') {
                            $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                        };
                    });
                });

                $("#Foodie").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {

                        $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                    });
                });
                $("#Traveler").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {

                        $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                    });
                });
                $("#Doglover").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {

                        $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                    });
                });
                $("#Fishmen").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {

                        $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                    });
                });
                $("#Adventurer").click(function() {
                    $select.html('');
                    $.each(data, function(i, jsonData) {

                        $("#related").append('<div id="' + formattedId13 + '" class="todo">' + jsonData.thingYouWantToDoanswer + '</div>');
                    });
                });



            });

        }
    });
});