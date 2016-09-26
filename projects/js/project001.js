$(function() {

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

  setInterval(function() {

  }, 1000);
  setInterval(function() {

    fadeRed();

  }, 1000);

})


fadeRed();

function fadeRed() {
  $('#red').fadeTo(10000, 1, function() {
    // Animation complete.
  });

  blinkBoxes();

  // Show the animals
  function blinkBoxes() {

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
      blinkBoxes();
    }, 1000)

  }

};
