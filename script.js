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
jQuery(document).ready(function() {
    $('.tab_menu > ul > li > a').click(function () {
        $(this).parent().addClass('active')
        .siblings()
        .removeClass('active');
        return false;
    })
})
jQuery(document).ready(function() {
    $('.notice a').click(function () {
        $(".layer").addClass('active')
    })
})
jQuery(document).ready(function() {
    $('.layer button').click(function () {
        $(".layer").removeClass('active')
    })
})