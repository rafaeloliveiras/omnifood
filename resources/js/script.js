$(document).ready(function() {

  $('.js-section-features').waypoint(function(direction){
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, { 
    offset:'60px;'
  });


  $('.js-animation').waypoint(function(direction){
    $('.js-animation').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });

  $('.js-animation2').waypoint(function(direction){
    $('.js-animation2').addClass('animated slideInUp');
  }, {
    offset: '90%'
  });

  $('.js-animation3').waypoint(function(direction){
    $('.js-animation3').addClass('animated shake');
  }, {
    offset: '40%'
  });

  $('.js-animation4').waypoint(function(direction){
    $('.js-animation4').addClass('animated flipInX');
  }, {
    offset: '80%'
  })

  $('.js-animation5').waypoint(function(direction){
    $('.js-animation5').addClass('animated fadeIn');
  }, {
    offset: '90%'
  })

});