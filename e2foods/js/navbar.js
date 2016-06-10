$(window).scroll(function(e){
    if ($(this).scrollTop() > 450) { // choose the value you want.
        $('#dropmenu:hidden').slideDown();
    } else {
        $('#dropmenu:visible').slideUp();
    }
});