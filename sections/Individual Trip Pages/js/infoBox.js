$(document).ready(function() {

//Expanding and collapsing Info Boxes
    $('.info-box').click(function(){

        // Variables for Expanding and collapse
        var currentBox = this;
        var currentBoxId = this.id.charAt(3);
        var boxOrder = currentBoxId-2;
        var contentSelector = currentBoxId-1;
        var currentContent = document.querySelectorAll(".content")[contentSelector];
        var icon = document.querySelectorAll(".icon")[contentSelector];

        // Checks if .info-box has box-expand class.
        if( $(this).hasClass('box-expand')){
            // Collapses open box
            currentBox.style.order = "";
            currentContent.style.opacity = "0";
            currentBox.classList.remove("box-expand")
            icon.classList.remove("icon-slide")
            currentContent.classList.remove("content-expand");
            setTimeout(function () {
                $('#info-box-container').css({"justify-content": ""});
            }, 320);
        } else {
        // Expandes current box
             isEven(currentBoxId) //Changes order
             icon.classList.add("icon-slide");
             currentBox.classList.add("box-expand");
             currentContent.style.opacity = "1"
             currentContent.classList.add("content-expand");
         //Check if an even numbered box selected.  If it is then it rearranges the flex order to avoid blank space on the right
     function isEven(value) {
                 if (value%2 == 0)
                    $('#info-box-container').css({"justify-content" : "flex-end"});
                    currentBox.style.order = boxOrder;
                  };
              console.log('jquery expand function run');
        };
    });
});

//Scroll and Paralax Related Functions
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  var tripDis = document.querySelector(".trip-dis");
  var tripImage = $('.trip-image');


  if(wScroll > $('#info-box-container').offset().top - $(window).height() / 1.8){

      tripDis.classList.add('trip-left');
  } else {
      tripDis.classList.remove('trip-left')


  }




  });



function closeBox(e) {
  console.log('info title clicked ' + e.target);


};
