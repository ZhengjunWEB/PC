$(function() {
  $('.user-login').click  = function() {
    console.log(1);
  }
  let height = $('.header-top').height() + $('.header-middle').height()
  // console.log(height);
  $(window).scroll(function() {
    let topValue = ($('html').scrollTop());
    // if(topValue >= height) {
    //   $('.header-top').removeClass('d-lg-block')
    //   $('.header-middle').slideUp(200)
    // } else {
    //   $('.header-top').addClass('d-lg-block')
    //   $('.header-middle').slideDown(200)
    // }
  })
})
