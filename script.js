jQuery(document).ready(function (){
    setInterval(function (){
        $(".img_slide").delay(2000);
        $(".img_slide").animate({marginLeft : -1200});
        $(".img_slide").delay(2000);
        $(".img_slide").animate({marginLeft : -2400});
        $(".img_slide").delay(2000);
        $(".img_slide").animate({marginLeft : +0});
    });
});
