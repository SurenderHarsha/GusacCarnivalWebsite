$(document).ready(function() {
   /*$('.anim').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
           
       });
   });
   $('.anim').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
           
       }); 
   });
  /* $('html','body').on('scroll touchmove mousewheel', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
})

   $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});*/
   $('#lol').click(function(){

    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 2000);

    
});
   
   
});