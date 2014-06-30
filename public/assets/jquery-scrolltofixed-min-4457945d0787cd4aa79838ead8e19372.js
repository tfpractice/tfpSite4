!function(o){o.isScrollToFixed=function(i){return!!o(i).data("ScrollToFixed")},o.ScrollToFixed=function(i,e){function t(){h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed"),A=-1,v=h.offset().top,U=h.offset().left,g.options.offsets&&(U+=h.offset().left-h.position().left),-1==z&&(z=U),T=h.css("position"),w=!0,-1!=g.options.bottom&&(h.trigger("preFixed.ScrollToFixed"),d(),h.trigger("fixed.ScrollToFixed"))}function n(){var o=g.options.limit;return o?"function"==typeof o?o.apply(h):o:0}function s(){return"fixed"===T}function l(){return"absolute"===T}function r(){return!(s()||l())}function d(){s()||(C.css({display:h.css("display"),width:h.outerWidth(!0),height:h.outerHeight(!0),"float":h.css("float")}),cssOptions={"z-index":g.options.zIndex,position:"fixed",top:-1==g.options.bottom?f():"",bottom:-1==g.options.bottom?"":g.options.bottom,"margin-left":"0px"},g.options.dontSetWidth||(cssOptions.width=h.width()),h.css(cssOptions),h.addClass(g.options.baseClassName),g.options.className&&h.addClass(g.options.className),T="fixed")}function c(){var o=n(),i=U;g.options.removeOffsets&&(i="",o-=v),cssOptions={position:"absolute",top:o,left:i,"margin-left":"0px",bottom:""},g.options.dontSetWidth||(cssOptions.width=h.width()),h.css(cssOptions),T="absolute"}function p(){r()||(A=-1,C.css("display","none"),h.css({"z-index":m,width:"",position:S,left:"",top:b,"margin-left":""}),h.removeClass("scroll-to-fixed-fixed"),g.options.className&&h.removeClass(g.options.className),T=null)}function x(o){o!=A&&(h.css("left",U-o),A=o)}function f(){var o=g.options.marginTop;return o?"function"==typeof o?o.apply(h):o:0}function u(){if(o.isScrollToFixed(h)){var i=w;w?r()&&(v=h.offset().top,U=h.offset().left):t();var e=o(window).scrollLeft(),u=o(window).scrollTop(),T=n();g.options.minWidth&&o(window).width()<g.options.minWidth?r()&&i||(F(),h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed")):g.options.maxWidth&&o(window).width()>g.options.maxWidth?r()&&i||(F(),h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed")):-1==g.options.bottom?T>0&&u>=T-f()?l()&&i||(F(),h.trigger("preAbsolute.ScrollToFixed"),c(),h.trigger("unfixed.ScrollToFixed")):u>=v-f()?(s()&&i||(F(),h.trigger("preFixed.ScrollToFixed"),d(),A=-1,h.trigger("fixed.ScrollToFixed")),x(e)):r()&&i||(F(),h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed")):T>0?u+o(window).height()-h.outerHeight(!0)>=T-(f()||-a())?s()&&(F(),h.trigger("preUnfixed.ScrollToFixed"),"absolute"===S?c():p(),h.trigger("unfixed.ScrollToFixed")):(s()||(F(),h.trigger("preFixed.ScrollToFixed"),d()),x(e),h.trigger("fixed.ScrollToFixed")):x(e)}}function a(){return g.options.bottom?g.options.bottom:0}function F(){var o=h.css("position");h.trigger("absolute"==o?"postAbsolute.ScrollToFixed":"fixed"==o?"postFixed.ScrollToFixed":"postUnfixed.ScrollToFixed")}var g=this;g.$el=o(i),g.el=i,g.$el.data("ScrollToFixed",g);var T,S,b,m,w=!1,h=g.$el,v=0,U=0,z=-1,A=-1,C=null,O=function(){h.is(":visible")&&(w=!1,u())},y=function(){window.requestAnimationFrame?requestAnimationFrame(u):u()},W=function(o){o=o||window.event,o.preventDefault&&o.preventDefault(),o.returnValue=!1};g.init=function(){g.options=o.extend({},o.ScrollToFixed.defaultOptions,e),m=h.css("z-index"),g.$el.css("z-index",g.options.zIndex),C=o("<div />"),T=h.css("position"),S=h.css("position"),b=h.css("top"),r()&&g.$el.after(C),o(window).bind("resize.ScrollToFixed",O),o(window).bind("scroll.ScrollToFixed",y),"ontouchmove"in window&&o(window).bind("touchmove.ScrollToFixed",u),g.options.preFixed&&h.bind("preFixed.ScrollToFixed",g.options.preFixed),g.options.postFixed&&h.bind("postFixed.ScrollToFixed",g.options.postFixed),g.options.preUnfixed&&h.bind("preUnfixed.ScrollToFixed",g.options.preUnfixed),g.options.postUnfixed&&h.bind("postUnfixed.ScrollToFixed",g.options.postUnfixed),g.options.preAbsolute&&h.bind("preAbsolute.ScrollToFixed",g.options.preAbsolute),g.options.postAbsolute&&h.bind("postAbsolute.ScrollToFixed",g.options.postAbsolute),g.options.fixed&&h.bind("fixed.ScrollToFixed",g.options.fixed),g.options.unfixed&&h.bind("unfixed.ScrollToFixed",g.options.unfixed),g.options.spacerClass&&C.addClass(g.options.spacerClass),h.bind("resize.ScrollToFixed",function(){C.height(h.height())}),h.bind("scroll.ScrollToFixed",function(){h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed"),u()}),h.bind("detach.ScrollToFixed",function(i){W(i),h.trigger("preUnfixed.ScrollToFixed"),p(),h.trigger("unfixed.ScrollToFixed"),o(window).unbind("resize.ScrollToFixed",O),o(window).unbind("scroll.ScrollToFixed",y),h.unbind(".ScrollToFixed"),C.remove(),g.$el.removeData("ScrollToFixed")}),O()},g.init()},o.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1e3,baseClassName:"scroll-to-fixed-fixed"},o.fn.scrollToFixed=function(i){return this.each(function(){new o.ScrollToFixed(this,i)})}}(jQuery);