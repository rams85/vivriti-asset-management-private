// jQuery(document).ready(function () {
//     jQuery('.menu > li').hover(function() {
//         if(jQuery(this).closest("li").children("ul").length) {
//             jQuery(this).closest("li").addClass('vv-menu-bg');
//         }
//     });
// });

jQuery(window).on("load", function () {
    // alert('23wew');
    jQuery(".menu li").each(function(){
        if(jQuery(this).has("ul").length){
            // do stuff
            jQuery(this).closest("li").addClass('vv-menu-bg');
        }
    });

    // vv-cf-form select
    jQuery("#vv-cf-select").on("mousedown",function(){
        jQuery(this).addClass('open');
        console.log("triggered");
    });

});