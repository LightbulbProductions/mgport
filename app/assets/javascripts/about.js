$(document).ready(function(){
    $(".btn-about").click(function(){
        $(".container3, button").fadeOut('slow', function(){
            $("body, html").animate({
                scrollTop: $("#about").offset().top
            }, 2000);
        });
    });
});