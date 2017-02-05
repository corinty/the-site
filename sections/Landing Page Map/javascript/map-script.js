



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

/*---- Event listeners-----*/
/*--var mapContainer = document.querySelector("#map-container");
mapContainer.addEventListener("click", expandCallout, false);

function expandCallout(e) {
    if (e.target !== e.currentTarget) {
        var clickedCountry = e.target.id;
          console.log(e.target.id);
    }
    e.stopPropagation();
}
--*/



/*----old Event Listeners*/
//costa rica
mapCostaRica.addEventListener('click', function() {
  expand(calloutCostaRica);
});
//china
mapChina.addEventListener('click', function() {
  expand(calloutChina);
});


//Expand and Collapse functions
function expand (callout) {
  callout.style.transform = 'scale(1)';
};
//Collapse all open callouts
function collapse (callout) {
  for (var i = 0; i < callout.length; i++) {
    callout[i].style.transform = 'scale(0)';
    //map[i].style.transform = 'scale(1)';
  };
};
