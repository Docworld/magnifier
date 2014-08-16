//h3llo yo

var magnifier = (function(magnifyingLevel, mouseOverImgWidth, imgPath, cursorWidth, cursorHeight) {

  var mouseOverImgWidthWithPx = mouseOverImgWidth + "px";
  var magnifiedImgWidth = (mouseOverImgWidth * magnifyingLevel) + "px";
  
  var pictureOffset = $('.mouseover').offset();
  


  
  var displayMagnifiedImage = function (x, y){
     "use strict;"
    $('#magnified-img').css({"background-image": "url(" + imgPath + ")", "background-size": magnifiedImgWidth + " auto", "background-position": x + " " + y});
  };

 
  return {
    
    
    getCoordinates: function(event) {
    "use strict;"
    var xCoord = -(event.pageX - pictureOffset.left);
    var yCoord = -(event.pageY - pictureOffset.top); 
    var bigXCoord = (xCoord * magnifyingLevel) + "px";
    var bigYCoord = (yCoord * magnifyingLevel) + "px";
    displayMagnifiedImage(bigXCoord, bigYCoord);
  },


    init: function(){
      getCoordinates();
    },  

    hideMagnifiedImage: function () {
      "use strict;"
      $('#magnified-img').css({"background-image": "none"});
    },

    loadMouseOverImg: function () {
      $('.mouseover').attr({
        src: imgPath,
        width: mouseOverImgWidthWithPx,
        height: "auto"
      });
    },

    setMagnifyingOutputSize: function () {
        var magnifiedOutputWidth = (magnifyingLevel * cursorWidth) + "px";
        var magnifiedOutputHeight = (magnifyingLevel * cursorHeight) + "px";
        $('#magnified-img').css({"width": magnifiedOutputWidth, "height": magnifiedOutputHeight});
    }

  

  };





})(5, 400, "gnome.jpg", 32, 32);

$('.mouseover').on( "mousemove", function( event ) {
  magnifier.getCoordinates(event);

});

$('.mouseover').on( "mouseleave", function( event ) {
  magnifier.hideMagnifiedImage();

});

(function () {
  magnifier.loadMouseOverImg();
  magnifier.setMagnifyingOutputSize();

})();






