var maxheight;
$('.navbar__link').hover(function () {
        var link = $(this);
        var slider = $(this).find('.navbar__link__slider');
    
        if (slider.length != 0) {

            var slider__wrapper = slider.find(".slider__wrapper");
            maxheight = slider__wrapper.prop('scrollHeight');

            slider__wrapper.css("max-height", maxheight + "px");
        } else {
            return false;
        }
        
    }, function () {
        var link = $(this);
        var slider = $(this).find('.navbar__link__slider');
    
        if (slider.length != 0) {

            var slider__wrapper = slider.find(".slider__wrapper");
            maxheight = slider__wrapper.prop('scrollHeight');

            slider__wrapper.css("max-height", "0px");
        } else {
            return false;
        }
    }
);
$(".menu-toggle").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('active');
    $('.navbar').toggleClass("hide");
    if ($(this).hasClass("active")) {
        document.documentElement.style.setProperty('--navbar', ($('.navbar').width() + 100) + 'px');
    } else {
        document.documentElement.style.setProperty('--navbar', ($('.navbar').width() + 10) + 'px');
    }
});
$(document).ready(function () {
    document.documentElement.style.setProperty('--navbar', ($('.navbar').width() + 50) + 'px');
});
$(window).resize(function () { 
    document.documentElement.style.setProperty('--navbar', ($('.navbar').width() + 50) + 'px');
});