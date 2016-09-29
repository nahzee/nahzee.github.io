$(document).ready(function() {

 setInterval(function() {
    if (timer.seconds < 15) {
      tickTock1();
    }  if (timer.seconds > 15) {
      tickTock1(getBig());getRed();
    }  if (timer.seconds > 20) {
      tickTock1(getBigger());getRedder();
    }  if (timer.seconds > 30) {
      tickTock1(getBiggerThanThat());andMoreRedder();
    }  if (timer.seconds > 40) {
      tickTock1(getEvenMoreBigger());andEvenMoreRedder();
    }  if (timer.seconds > 50) {
      tickTock1(getWayBigger());JustgoFullRed();
    } else {
      ;
    }
  }, 1000);

fadeRed()

//clock
 setInterval(function() {
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)";

    $("#sec").css({
      "transform": srotate
    });

  }, 1000);

  setInterval(function() {
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    var hdegree = hours * 30 + (mins / 2);
    var hrotate = "rotate(" + hdegree + "deg)";

    $("#hour").css({
      "transform": hrotate
    });

  }, 1000);



function getRed() {
  $('#red').fadeTo(10000, 1, function() {
    // Animation complete.
  })};

   function nnoRed() {
  $('#red').css("opacity", "0")};

 function getRed() {
  $('#red').css("opacity", ".2")};

 function getRedder() {
  $('#red').css("opacity", ".4")};

 function andMoreRedder() {
  $('#red').css("opacity", ".6")};

 function andEvenMoreRedder() {
  $('#red').css("opacity", ".8")};

 function JustgoFullRed() {
  $('#red').css("opacity", "1")};




function fadeRed() {
  $('#red2').fadeTo(60000, 1, function() {
    // Animation complete.
  })};
  
  function getBig() {
  $('.ticktock').css("font-size", "40px")};


  function getBigger() {
  $('.ticktock').css("font-size", "60px")};


  function getBiggerThanThat() {
  $('.ticktock').css("font-size", "80px")};

  function getEvenMoreBigger() {
  $('.ticktock').css("font-size", "100px")};

  function getWayBigger() {
  $('.ticktock').css("font-size", "120px")};



  // Show the animals
  function tickTock1() {

    // Blinking effects
    $("#tick-1").delay(1000).fadeIn(100).delay(1000).fadeOut(100);
    $("#tock-1").delay(2000).fadeIn(100).delay(1000).fadeOut(100);
    $("#tick-2").delay(1000).fadeIn(100).delay(1000).fadeOut(100);
    $("#tick-2").fadeIn().delay(1000).fadeOut();
    $("#tock-3").delay(1500).fadeIn(100).delay(1000).fadeOut(100);
    $("#tick-3").delay(2000).fadeIn(100).delay(1000).fadeOut(100);
    $("#tock-4").delay(500).fadeIn(100).delay(1000).fadeOut(100);
    $("#tick-4").delay(100).fadeIn(100).delay(1000).fadeOut(100);


    // Run the blinkBoxes function after 5 seconds, creating an infinte loop of itself
    setTimeout(function() {
      tickTock1();
    }, 1000)};
})
