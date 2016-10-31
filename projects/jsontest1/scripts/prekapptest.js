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
            $("#Adventurer").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'adventurer') {
                        $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
                    }
                }
            })

            $("#Foodie").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'foodie') {
                        $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
                    }
                }
            }, )
            $("#Traveler").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'traveler') {
                        $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
                    }
                }
            }, )
            $("#Fishmen").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'fishmen') {
                        $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
                    }
                }
            }, )
            $("#DogLover").click(function() {
                $select.html('');
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].typetag == 'doglover') {
                        $("#related").append(jsonData[i].thingYouWantToDoanswer + ",");
                    }
                }
            }, )


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