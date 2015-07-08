
$(document).ready(function() {
    // HEROI
    if ($(".heroi").first()) {
        if ($(".nav.extravagante").first()) {
            $(".nav.extravagante").addClass("transparente");
        }
    }
    $(".heroi").each(function () {
        $(this).css("background-image", "url('"+$(this).attr("data-imagem")+"')");
    });
    // -----
    // MENU-ATRAS
    $(".menu-atras").find(".abrir-menu").each(function() {
        $(this).click(function(e) {
            var v = $(this).parent();
            while(v !== undefined) {
                console.log('aa');
                if(v.hasClass("menu-atras")) {
                    v.toggleClass("abrir");
                    break;                
                }
                v = v.parent();
            }
        });
    });
    // -----
});
