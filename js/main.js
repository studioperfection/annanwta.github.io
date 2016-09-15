$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    adaptiveHeight: true,
    mode: 'fade',
    speed: 3000,
    pause: 1000,


    onSliderLoad: function(currentIndex) {

      $('.menu0').fadeIn(2000);

    },

    onSlideBefore: function(el, prevIndex, currentIndex) {
      if (currentIndex==0){
      $('.menu3').fadeOut(2000)}
      else if(currentIndex==1){
        $('.menu0').fadeOut(2000)}
      else if(currentIndex==2){
        $('.menu1').fadeOut(2000)}
      else {
        $('.menu2').fadeOut(2000)}

    },

    onSlideAfter: function(el, prevIndex, currentIndex) {
       if (currentIndex==0){
      $('.menu0').fadeIn(2000)}
      else if(currentIndex==1){
        $('.menu1').fadeIn(2000)}
      else if(currentIndex==2){
        $('.menu2').fadeIn(2000)}
      else {
        $('.menu3').fadeIn(2000)}
    }

  });
});
