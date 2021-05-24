        $(function() {
            "use strict";
            $('[data-toggle="offcanvas"]').on("click", function() {
                $(".offcanvas-collapse").toggleClass("open");
            });
        });
        $(document).ready(function() {
            bsCustomFileInput.init();
        });
        $(window).scroll(function() {
            var fromTop = $(window).scrollTop();
            if (fromTop <= 85) {
                $(".offcanvas-collapse.open").css(
                    "margin",
                    "-" + fromTop + "px 0px 0px 0px"
                );
            } else {
                $(".offcanvas-collapse.open").css(
                    "margin",
                    "-" + "85px 0px 0px 0px"
                );
            }
        });

        var btn = $("#backtotop");

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.addClass("show");
            } else {
                btn.removeClass("show");
            }
        });

        btn.on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "300");
        });


const ele = '.promotion-carousel';
const $window = $(window);
const viewportHeight = $window.height();

let ui = {
  promo: ele + ' .promotion',
  promoText: ele + ' .promo-text',
  navigationItems: '.navigation a' };


function isOnScreen(el) {
  const viewport = {
    top: $window.scrollTop() };


  viewport.bottom = viewport.top + viewportHeight;

  const bounds = el.offset();
  bounds.bottom = el.offset().top + el.outerHeight();

  return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
}

class ScrollEvents {

  run() {
    const $promo = $('.promotion');
    const $promoText = $('.promo-text');

    function smoothScroll(target) {
      $('body, html').animate({ 'scrollTop': target.offset().top }, 600);
    }

    $(ui.navigationItems).on('click', e => {
      e.preventDefault();
      smoothScroll($(e.currentTarget.hash));
    });

    $window.on('scroll', () => {

      $(ui.promo).toArray().forEach(el => {
        const $el = $(el);
        if (isOnScreen($el)) {
          this.scrolly($el);
        }
      });
      this.updateNavigation();
      this.fadeAtTop($(ui.promoText));
    });

    this.updateNavigation();
  }

  scrolly(el) {
    const topOffset = el.offset().top;
    const height = el.height();
    let scrollTop = $window.scrollTop();
    const maxPixels = height / 4;
    const percentageScrolled = (scrollTop - topOffset) / height;
    let backgroundOffset = maxPixels * percentageScrolled;

    backgroundOffset = Math.round(Math.min(maxPixels, Math.max(0, backgroundOffset)));

    el.css(`background-position`, `right 0px top ${backgroundOffset}px`);
  }

  fadeAtTop(el) {
    const startPos = 0.25;

    el.toArray().forEach(el => {
      const $el = $(el);
      let position = $el.offset().top - $window.scrollTop() + viewportHeight / 6;
      let opacity = position < viewportHeight * startPos ? position / (viewportHeight * startPos) * 1 : 1;

      $el.css('opacity', opacity);
    });
  }

  updateNavigation() {
    $(ui.promo).toArray().forEach(el => {
      let $el = $(el);
      let activeSection = $(`.navigation a[href="#${$el.attr('id')}"]`).data('number') - 1;

      if ($el.offset().top - $window.height() / 2 < $window.scrollTop() && $el.offset().top + $el.height() - $window.height() / 2 > $window.scrollTop()) {
        $(ui.navigationItems).eq(activeSection).addClass('active');
      } else {
        $(ui.navigationItems).eq(activeSection).removeClass('active');
      }
    });
  }}
;

const scrollEvents = new ScrollEvents();

scrollEvents.run();

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).bsCustomFileInput=t()}(this,function(){"use strict";var s={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},l=function(e){if(0<e.childNodes.length)for(var t=[].slice.call(e.childNodes),n=0;n<t.length;n++){var l=t[n];if(3!==l.nodeType)return l}return e},u=function(e){var t=e.bsCustomFileInput.defaultText,n=e.parentNode.querySelector(s.CUSTOMFILELABEL);n&&(l(n).textContent=t)},n=!!window.File,r=function(e){if(e.hasAttribute("multiple")&&n)return[].slice.call(e.files).map(function(e){return e.name}).join(", ");if(-1===e.value.indexOf("fakepath"))return e.value;var t=e.value.split("\\");return t[t.length-1]};function d(){var e=this.parentNode.querySelector(s.CUSTOMFILELABEL);if(e){var t=l(e),n=r(this);n.length?t.textContent=n:u(this)}}function v(){for(var e=[].slice.call(this.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),t=0,n=e.length;t<n;t++)u(e[t])}var p="bsCustomFileInput",m="reset",h="change";return{init:function(e,t){void 0===e&&(e=s.CUSTOMFILE),void 0===t&&(t=s.FORM);for(var n,l,r=[].slice.call(document.querySelectorAll(e)),i=[].slice.call(document.querySelectorAll(t)),o=0,u=r.length;o<u;o++){var c=r[o];Object.defineProperty(c,p,{value:{defaultText:(n=void 0,n="",(l=c.parentNode.querySelector(s.CUSTOMFILELABEL))&&(n=l.textContent),n)},writable:!0}),d.call(c),c.addEventListener(h,d)}for(var f=0,a=i.length;f<a;f++)i[f].addEventListener(m,v),Object.defineProperty(i[f],p,{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(s.FORM)).filter(function(e){return!!e.bsCustomFileInput}),t=[].slice.call(document.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),n=0,l=t.length;n<l;n++){var r=t[n];u(r),r[p]=void 0,r.removeEventListener(h,d)}for(var i=0,o=e.length;i<o;i++)e[i].removeEventListener(m,v),e[i][p]=void 0}}});
