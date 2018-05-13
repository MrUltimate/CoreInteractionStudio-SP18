var images = ["assets/images/photo1.jpg", "assets/images/photo2.jpg", "assets/images/photo3.jpg", "assets/images/photo4.jpg", "assets/images/photo5.jpg", "assets/images/photo6.jpg", "assets/images/photo7.jpg"];
var couter = 0;
$(document).ready(function() {
  var selectImage = Math.floor(Math.random() * images.length);
  $('.bg-img').css('background-image', 'url(' + images[selectImage] + ')');

  $('.nodes').each(function() {
    var docHeight = $(document).height(),
      docWidth = $(document).width(),
      divWidth = $(this).width()+200,
      divHeight = $(this).height()+100,
      heightMax = docHeight - divHeight,
      widthMax = docWidth - divWidth;

    var posLeft = Math.floor(Math.random() * widthMax);
    var posTop = Math.floor(Math.random() * heightMax);

    $(this).css({
      left: posLeft,
      top: posTop,
    });
  });

  $('.bg-img').click(function(e) {
    var errorChecker = [false, false, false, false, true, false, false, false, false, false];
    var errorCheck = Math.floor(Math.random() * errorChecker.length);
    console.log(errorChecker[errorCheck]);
    var imgClasses = ["photo1", "photo2", "photo3", "photo4", "photo5", "photo6", "photo7"];
    var offset = $(this).offset();
    var x = e.clientX - (offset.left + 205);
    var y = e.clientY - (offset.top + 140);
    // console.log(x, y);
    $('.modal-container').append('<div class=\"modal-img ' + imgClasses[Math.floor(Math.random() * imgClasses.length)] + '\" style=\"left: ' + x + '; top: ' + y + '\">' +
      '<div class="top-bar"><div class="close-btn"></div><div class="minimize-btn"></div><div class="maximize-btn"></div></div></div>' +
      '</div>');

    $('.modal-img').draggable({delay: 50});

    if(errorChecker[errorCheck] == true) {
      // console.log("condition met");
      var docHeight = $(document).height(),
        docWidth = $(document).width(),
        divWidth = 500.75,
        divHeight = 179,
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

      var posLeft = Math.floor(Math.random() * widthMax);
      var posTop = Math.floor(Math.random() * heightMax);

      $('.modal-container').append('<div class="error" style="left: '+posLeft+'; top: '+posTop+'"></div>');
    }
  });

  $('.nd-multiply').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('multiply');
    });
  });
  $('.nd-screen').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('screen');
    });
  });
  $('.nd-overlay').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('overlay');
    });
  });
  $('.nd-darken').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('darken');
    });
  });
  $('.nd-lighten').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('lighten');
    });
  });
  $('.nd-color-dodge').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('color-dodge');
    });
  });
  $('.nd-saturation').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('saturation');
    });
  });
  $('.nd-luminosity').click(function() {
    $('.modal-img').each(function() {
      $(this).toggleClass('luminosity');
    });
  });
  $('.modal-container').on('click', '.close-btn', function() {
    // console.log("Click Triggered");
    $(this).parent().parent().hide(250, function(){$(this).remove()});
  });
  $('.modal-container').on('click', '.maximize-btn', function() {
    // console.log("Click Triggered");
    $(this).parent().parent().toggleClass('maximize');
    $('this').parent().parent().removeClass('minimize');
  });
  $('.modal-container').on('click', '.minimize-btn', function() {
    // console.log("Click Triggered");
    $(this).parent().parent().toggleClass('minimize');
    $(this).parent().parent().removeClass('maximize');
  });
});
