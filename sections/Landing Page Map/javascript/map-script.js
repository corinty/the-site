//Map IDs
var mapCostaRica = document.getElementById('Costa_Rica');
var mapChina = document.getElementById('China');
//Map Array
var mapArray = [mapCostaRica, mapChina];

// Callout IDs
var calloutCostaRica = document.getElementById('callout-costaRica');
var calloutChina = document.getElementById('callout-china');
//Callout Array
var calloutArray = [calloutChina, calloutCostaRica];

//jquery stuff
$(document).ready(function(){
        //When the X is pressed close callout
        $(".close-x").click(function() {
            collapse(calloutArray)
        });
        //When anywhere outside of current callout is pressed collapse all
        $(document).mouseup(function(e) {
            var subject = $(calloutArray);
            if(e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                collapse(calloutArray)
            }
        });
});

/*----old Event Listeners--*/
//costa rica
mapCostaRica.addEventListener('click', function() {
  expand(calloutCostaRica, this);
});
//china
mapChina.addEventListener('click', function() {
  expand(calloutChina, this);
});

//Expand and Collapse functions
function expand (callout, e) {
    var x = $(e).offset().top
    var y = $(e).offset().left

  callout.style.transform = 'scale(1)';
  //callout.style.left = (y)+"px";
  //callout.style.top = (x)+"px";
};
//Collapse all open callouts
function collapse (callout) {
  for (var i = 0; i < callout.length; i++) {
    callout[i].style.transform = 'scale(0)';

  };
};

//Scrolling functions
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  var test =  $('.logo').offset().top;
  console.log(test);






  if(wScroll > $('.main-container').offset().top ){
      $('.logo').addClass("logo-fixed");

  } else {
      $('.logo').removeClass("logo-fixed");

  };



  });
