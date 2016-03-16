$(window).on('scroll', function(e) {

  if ($(window).scrollTop() > 50) {

    $('.navbar-tom ').addClass('.has-background')
  } else {

    $('.navbar-tom').removeClass('has-background')
  }
})