function f_goToHash(){$('a[href*="#"]:not([href="#"])').click(function(o){if(o.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var l=$(this.hash);if(console.log(l),(l=l.length?l:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:l.offset().top},500),!1}})}function f_modal__trigger(o,l){var e=o.data("modal");console.log("Cerrando todos los modal abiertos..."),$(".c-modal").removeClass("is-visible"),$(".c-modal").css("width",$(window).width()),!0===l?($("body").css("overflow","hidden"),$(".c-modal.c-modal_"+e).addClass("is-visible"),$(".c-modal__container").scrollTop(0),$(window).width(),console.log("Abriendo modal .c-modal_"+e+"...")):($("body").css("overflow","auto"),$(".c-modal").removeClass("is-visible"),$(".c-modal").css("width",$(window).width()),console.log("Cerrando todos los modal..."))}function f_modal__resize(o){var l=$(window).width(),e=$(".c-modal__title").innerWidth(),i=l-e,s=l-i;return console.log("Viewport "+l),console.log("Element "+e),console.log("Operation "+i),console.log("Offset "+s),$(".c-modal").css("width",l+s+"px")}$(window).on("resize",function(){$(".c-modal").css("width",$(window).width()),f_setNavVisibility()}),$(document).on("scroll",function(){});
function f_detectPageAndApplyToNav(i){$(".c-navigation__item").removeClass("is-active"),$(".c-navigation__item_"+i+" .c-navigation__label").slideDown(300),$(".c-navigation__item_"+i).addClass("is-active")}function f_setBiginputValidation(i){""!==$.trim(i.val())?$(".c-biginput__ok").addClass("is-enabled"):$(".c-biginput__ok").removeClass("is-enabled")}function f_animateBiginputToTop(){$(".c-biginput").addClass("is-active"),$(".c-logo_home").addClass("is-disabled")}function f_setNavVisibility(){$(window).height()<390?$(".c-navigation").hide().addClass("has-keyboard"):$(".c-navigation").show().removeClass("has-keyboard")}
function f_social__share(t){var e="/"+t,o=window.location.href.split(e),c=$(document).find("title").text(),i="https://www.facebook.com/sharer/sharer.php?u="+o,n="https://twitter.com/intent/tweet?text="+c+"%20"+o;$(".c-social__button_facebook").on("click",function(t){console.log("Url a compartir: "+o),t.preventDefault(),window.open(i,"Compartir en Facebook","width=500,height=500,resizable=1")}),$(".c-social__button_twitter").on("click",function(t){console.log("Url a compartir: "+o),t.preventDefault(),window.open(n,"Compartir en Twitter","width=500,height=500,resizable=1")}),$(".c-social__button_whatsapp").attr("href","whatsapp://send?text="+c+"%20"+o)}function f_on__events(){$(".c-product__var").on("click",function(){f_variants__select($(this))}),$(".c-product__select").on("change",function(){f_selects__status($(this)),f_selects__validation($(this))}),$(".c-product__select").each(function(t,e){f_selects__status($(this)),f_selects__validation($(this))})}
function f_ga__bounce_scroll(){var a=$(window).scrollTop(),o=a+$(window).height(),i=$(document).height(),c=i/2,n=$(".js-gaActivity__bounce_scroll");end=$(".js-gaActivity__bounce_end"),a>c&&(n.hasClass("is-active")||(console.log("Tu usuario ha navegado a traves de la página."),n.addClass("is-active").click())),o===i&&(end.hasClass("is-active")||(console.log("Tu usuario ha navegado hasta el final de la página."),end.addClass("is-active").click()))}function f_ga__bounce_time(a,o,i){setTimeout(function(){console.log(o),$(".js-gaActivity__bounce_"+a+"Time").click()},i)}$(window).on("scroll",function(){f_ga__bounce_scroll()});
function hasScrolled(){var i=$(this).scrollTop(),a=$(".c-navigation__bars");Math.abs(lastScrollTop-i)<=delta||(i>lastScrollTop&&i>navbarHeight?($(window).width()<=839?($(".c-navigation__menu").slideUp(),a.removeClass("is-opened"),$(".c-navigation__trigger").removeClass("is-visible")):($(".c-navigation__menu").slideDown(),a.addClass("is-opened"),$(".c-navigation__trigger").addClass("is-visible"),$(".c-cart").removeClass("is-visible")),$(".autoHideNav").addClass("is-hidden")):i+$(window).height()<$(document).height()&&$(".autoHideNav").removeClass("is-hidden"),lastScrollTop=i)}var didScroll,lastScrollTop=0,delta=5,navbarHeight=$(".autoHideNav").outerHeight();$(window).on("resize",function(){var i=$(".c-navigation__bars");$(window).width()>839?($(".c-navigation__menu").slideDown(),i.removeClass("is-opened"),$(".c-navigation__trigger").addClass("is-visible"),$(".c-cart").removeClass("is-visible")):($(".c-navigation__menu").slideUp(),i.removeClass("is-opened"),$(".c-navigation__trigger").removeClass("is-visible"))}),$(window).on("scroll",function(){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250);
$(document).ready(function(){f_social__share("landing"),f_on__events(),f_goToHash(),$("#price_original").blur(function(){""===$.trim($("#price_original").val())&&($(".c-biginput").removeClass("is-active"),$(".c-logo_home").removeClass("is-disabled"))}),f_ga__bounce_time("short","(10s) Tu usuario ha estado aquí por al menos 10 seg.",1e4),f_ga__bounce_time("medium","(30s) Tu usuario ha estado aquí por al menos 30 seg.",3e4),f_ga__bounce_time("long","(1m) Genial! Tu usuario ha estado aquí más de 1 min.",6e4),f_ga__bounce_time("cautive","(3m) Increible! Parece que tu usuario está interesado por tu página, ha pasado aquí más de 3 min.",18e4),f_ga__bounce_time("forgetful","(10m) Mmm.. bueno! Tal vez tu usuario haya olvidado el navegador abierto, está aquí hace más de 10 min.",9e5)});