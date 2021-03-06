(function ($, magnifyingLevel, mouseOverImgWidth, imgPath, cursorWidth, cursorHeight) {

  //some variable we'll need throughout.

  var mouseOverImgWidthWithPx = mouseOverImgWidth + "px"; 
  var magnifiedImgWidth = (mouseOverImgWidth * magnifyingLevel) + "px";
  
  
  // This next variable stores the coordinates of the mouseover div in relation to the document. 
  // We'll use it to calculate the position of the user's mouse within that div in our getCoordinates function.
  var pictureOffset = $('.mouseover').offset(); 
  
  
  function getCoordinates(event) {
    "use strict;"
    // the coordinates of the mouse in relation to the mouseover div.
    var mouseXCoord = -(event.pageX - pictureOffset.left);  
    var mouseYCoord = -(event.pageY - pictureOffset.top);

    // The crucial bit. We take the coordinates of our mouse on the smaller image and multiply it by the
    // magnifying level, giving us the corresponding coordinates on the 'magnified image'.
    var bigImageXCoord = (mouseXCoord * magnifyingLevel) + "px";
    var bigImageYCoord = (mouseYCoord * magnifyingLevel) + "px";
    displayMagnifiedImage(bigImageXCoord, bigImageYCoord);
  };


  
  function loadMouseOverImg () {
    $('.mouseover').attr({
      src: imgPath,
      width: mouseOverImgWidthWithPx,
      height: "auto"
      });
    };

  function setMagnifyingOutputSize () {
      var magnifiedOutputWidth = (magnifyingLevel * cursorWidth) + "px";
      var magnifiedOutputHeight = (magnifyingLevel * cursorHeight) + "px";
      $('#magnified-img').css({"width": magnifiedOutputWidth, "height": magnifiedOutputHeight});
    };


  function displayMagnifiedImage(x, y) {
     "use strict;"
    $('#magnified-img').css({"background-image": "url(" + imgPath + ")", "background-size": magnifiedImgWidth + " auto", "background-position": x + " " + y});
  };

  
  function hideMagnifiedImage () {
      "use strict;"
      $('#magnified-img').css({"background-image": "none"});
    };

 


  $('.mouseover').on( "mousemove", function( event ) {
    getCoordinates(event);
  });

  $('.mouseover').on( "mouseleave", function( event ) {
    hideMagnifiedImage();
  });


  loadMouseOverImg();
  setMagnifyingOutputSize();


// Pass in your parameters here to customize to your liking.
//PARAMETERS:
//1. The script uses jQuery, so you'll need to pass it in.
//2. The magnifying level--the factor by which you want your image to be magnified by.
//3. The width that you want your 'mouseover' image to be displayed at. This is the image
//   the user will mouse over.
//4. The path to your image.
//5. The width of your custom cursor image.
//6. The height of your custom cursor image.


}(jQuery, 5, 400, "gnome.jpg", 32, 32));  







