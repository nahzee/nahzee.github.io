$(document).ready(function() {

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

            var $select = $('#related');

            //    });

            $.each(data, function(i, jsonData){
                $("#profile").append(
                      jsonData.name + "<br/>" 
                    + jsonData.age + "<br/>" 
                    + jsonData.iveNeverSinceIGotHere + "<br/>" 
                    + jsonData.oneCoolPlaceIWantedCheckOut + "<br/>" 
                    + jsonData.favoritePets + "<br/>" 
                    + jsonData.favoriteColor + "<br/>" 
                    + jsonData.foreignWhereDidYouComeFrom + "<br/>" 
                    + jsonData.school + "<br/>" 
                    + jsonData.shareASocialLink + "<br/>" 
                    + jsonData.socialLinkFrom + "<br/>" 
                    + jsonData.willingToMeetNewPeopleStrangers + "<br/>"
                    + jsonData.whatsYourFavoriteFood + "<br/>" 
                    + jsonData.thingYouWantToDoanswer + "<br/>");
             }); 


            $("#Adventurer").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'adventurer') {

                        // replaced spaces with dashes so that you can have a valid ID name
                formattedId = jsonData[i].thingYouWantToDoanswer.replace(/\s+/g, '-').toLowerCase();
                   


                   /*     $("#related").prepend('<div class="answers">'+ jsonData[i].thingYouWantToDoanswer +'</div>');
                        $(".answers").data("jsonData"
                        {
                            nameanswer: jsonData.name,
                            ageanswer: jsonData.age, 
                            gotHereanswer: jsonData.iveNeverSinceIGotHere, 
                            coolPlaceanswer: jsonData.oneCoolPlaceIWantedCheckOut, 
                            petsanswer: jsonData.favoritePets,
                            coloranswer: jsonData.favoriteColor, 
                            comeFromanswer: jsonData.foreignWhereDidYouComeFrom, 
                            schoolanswer: jsonData.school, 
                            shareSocialanswer: jsonData.shareASocialLink,
                            socialLinkanswer: jsonData.socialLinkFrom,
                            meetNewanswer: jsonData.willingToMeetNewPeopleStrangers, 
                            wantToDoanswer: jsonData.thingYouWantToDoanswer,
                        })*/
                        
                    }
                }
            })
        }
    })
})
// var whatColor
// colors.["red","orange","yellow","green","blue","purple","black","gray","white","gold","silver"]

// var skydiveObjects = _.where(objects, {thingYouWantToDo: "skydive"});

// _.map(skydiveObjects, function(obj) {
//    $("related").append(objects.name);
// })