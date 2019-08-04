$(document).ready(function(){
    /* sticky header*/
    $('#feat').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
            $('nav i').removeClass('fa-5x');
            $('nav i').addClass('fa-3x');
        }
        else{
            $('nav').removeClass('sticky');
             $('nav i').removeClass('fa-3x');
            $('nav i').addClass('fa-5x');
        }
    },{
        offset:'60px;'
    })
    /* scrolling on click of buttons*/
    
    $('#prime').click(function(){
        $('html,body').animate({scrollTop:$('#plans').offset().top},1000);
    })
    
    $('#second').click(function(){
        $('html,body').animate({scrollTop:$('#feat').offset().top},1000);
    })
    
   /* main nav scrolings this is a plugin code taken from css tricks*/
  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    /* animations on scroll*/
    $('.animate-1').waypoint(function(direction){
            $('.animate-1').addClass('animated fadeIn');
    },{
        offset:'50%;'
    }); 
    $('.animate-2').waypoint(function(direction){
            $('.animate-2').addClass('animated bounceInUp');
    },{
        offset:'50%;'
    }); 
    $('.animate-3').waypoint(function(direction){
            $('.animate-3').addClass('animated fadeIn');
    },{
        offset:'50%;'
    }); 
    $('.animate-4').waypoint(function(direction){
            $('.animate-4').addClass('animated pulse');
    },{
        offset:'50%;'
    });
    /* navigation button
     //slide down the navigation bar on clicking the button and 
     change of the button also on clicking on itself
    */
    $('.mobile-nav-icon').click(function(){
        $('.main-nav').slideToggle(200);
        var icon=$('.mobile-nav-icon i');
        if(icon.hasClass('fas fa-5x fa-bars')){
            icon.removeClass('fas fa-5x fa-bars');
            icon.addClass('fas fa-5x fa-times');
        }
        else if(icon.hasClass('fas fa-3x fa-bars')){
                icon.removeClass('fas fa-3x fa-bars');
                icon.addClass('fas fa-3x fa-times');
            }
        else if(icon.hasClass('fas fa-5x fa-times')){
            icon.removeClass('fas fa-5x fa-times');
            icon.addClass('fas fa-5x fa-bars');  
        }
        else{
                icon.removeClass('fas fa-3x fa-times');
                icon.addClass('fas fa-3x fa-bars');
        }
    });
    /* our gmaps comes here*/
    var map=new GMaps({
        div: '.map',
        lat: 12.849320,
        lng: 77.678127,
        zoom:12
});
map.addMarker({
  lat: 12.849320,
  lng: 77.678127,
  title: ' rock&roll',
  infoWindow: {
  content: '<p>Our headquarters</p>'
        }
});
    
});



