 $("document").ready(function(){

/*  For the sticky navigation*/
$('.js--section-features').waypoint(function(direction){
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
  offset: '60px'
});

     /* Scroll on buttons*/
     $('.js--scroll-to-plans').click(function() {
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
     });

     $('.js--scroll-to-start').click(function() {
         $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
     });



       /*Navigation scroll*/


   var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
    return false;
});

      /*Animations on scroll*/
     $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeIn');
     }, {
         offset: '55%'
     });

     $('.js--wp-2').waypoint(function(direction){
         $('.js--wp-2').addClass('animated fadeInUp');
     }, {
         offset: '55%'
     });


     $('.js--wp-3').waypoint(function(direction){
             $('.js--wp-3').addClass('animated fadeIn');
         }, {
             offset: '55%'
         });


     $('.js--wp-4').waypoint(function(direction){
             $('.js--wp-4').addClass('animated pulse');
         }, {
             offset: '55%'
       });


     $(function(){
        $(".element").typed({
            strings: ["Goodbye junk food.", "Hello super healthy meals."],
            typeSpeed: 130,
            startDelay: 1800,

        });
    });

           /*Mobile Navigation*/
     $('.ion-navicon').click(function() {
         var nav = $('.js--main-nav');
         var icon = $('.js--nav-icon i');
         nav.slideToggle(200);
         if (icon.hasClass('ion-navicon')) {
             icon.addClass('ion-close');
             icon.removeClass('ion-navicon');
         } else {
              icon.addClass('ion-navicon');
             icon.removeClass('ion-close');
         }



     });
      /*Maps*/
     var map = new GMaps({
          div: '.map',
          lat: 33.4604767,
          lng: -94.25,
         zoom: 11
        });

     map.addMarker({
  lat: 33.4604767,
  lng: -94.4222401,
  title: 'New Boston',
         infoWindow: {
          content: '<p>Our New Boston Franchise</p>'
        }

});
     
     
     $('.covervid-video').coverVid(1920, 1080);


 });
