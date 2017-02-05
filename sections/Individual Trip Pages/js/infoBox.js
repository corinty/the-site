

var infoBoxContainer = document.querySelector("#info-box-container");
infoBoxContainer.addEventListener("click", expandBox, false);

var close  =document.querySelector(".info-title");
close.addEventListener("click", closeBox, false);


function expandBox(e) {
    if (e.target !== e.currentTarget) {
        //Box Variables
        var currentBox = e.target;
        var currentBoxId = e.target.id.charAt(3);
        var boxOrder = currentBoxId-2;
        //Content Variables.  Selects correct content div for each box.
        var contentSelector = currentBoxId-1;
        var currentContent = document.querySelectorAll(".content")[contentSelector];

        //Styles changes to expand box
          //box changes
            currentBox.style.width = "100%";
            currentBox.style.height ="auto";
            isEven(currentBoxId)
            //content changes
            currentContent.className += " expanded";
            //currentContent.style.left="0%";
            //currentContent.style.transform="scaleY(1)";

        //Check if an even numbered box selected.  If it is then it rearranges the flex order to avoid blank space on the right
      function isEven(value) {
                    if (value%2 == 0)
                       currentBox.style.order = boxOrder;
                     };
         console.log('Expand function run');
    };

    e.stopPropagation();

  };

function closeBox(e) {
  console.log('info title clicked ' + e.target);


};








/*//Expanding boxes
$(document).ready(function(){
    $("#box1").click(function(){
        $(" .content").toggle(500);
    });
});*/
