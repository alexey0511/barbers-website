//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery to collapse the navbar on scroll
function collapseMenu() {
  $(".navbar-dropdown").removeClass("in");
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function addPhoneNumberLinks() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('#groom1-phone').prop('href', 'tel:+6444725605');
   $('#groom1-mobile').prop('href', 'tel:+64220998780');
   $('#groom2-phone').prop('href', 'tel:+6444993475');
   $('#groom2-mobile').prop('href', 'tel:+64220998780');
  }
}

function addFadeInFunc() {
  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.fadein').each( function(i){
        var bottom_of_object = $(this).offset().top + 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},1500);
        }
    });
});
}

$( document ).ready(function() {
    addPhoneNumberLinks();
    addFadeInFunc();

    $(window).bind("scroll", function() {
      bindScrollAnchor('open-hours-link');
    });
    $(window).bind("scroll", function() {
      bindScrollAnchor('locations-link');
    });
    $(window).bind("scroll", function() {
      bindScrollAnchor('prices-link');
    });
});


function bindScrollAnchor(key) {
  var windowHeight = $(window).height();
  var parent = $('#' + key).parents('section');
  if ($(this).scrollTop() + 100 > parent.offset().top) { //Fade in at a level of height
    $('#' + key).fadeIn();
    checkOffset(key); //Call function
  } else {
    $('#' + key).stop().fadeOut();
  }

}


function checkOffset(key) {
  var parent = $('#' + key).parents('section');
  var elTop = $('#' + key).offset().top;
  var elBottom = $('#' + key).offset().top + $('#' + key).height();
  var parentTop = parent.offset().top;
  var parentBottom = parentTop + parent.height();
  var windowTop = $(window).scrollTop();
  var windowBottom = $(window).scrollTop() + $(window).height();


  if(elBottom > parentBottom || elTop < parentTop) {
    $('#' + key).css('position', 'absolute');
  }

  if(windowBottom > parentBottom - 40 && windowBottom < parentBottom + 100) {
    $('#' + key).css('position', 'fixed');
  }

}
