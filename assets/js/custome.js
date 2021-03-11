
    // document.getElementById('homepgvideo').play();

  var swiper = new Swiper('.bannersection .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper('.certificatelogo .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.partnercompany .swiper-container', {
      slidesPerView: 7,
      spaceBetween: 50,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

    // jQuery(document).ready(function($){
    //   // Get current path and find target link
    //   var path = window.location.pathname.split("/").pop();
    //
    //   // Account for home page with empty path
    //   if ( path == '' ) {
    //     path = 'index.php';
    //   }
    //
    //   var target = $('menu ul li a[href="'+path+'"]');
    //   // Add active class to target link
    //   target.addClass('active');
    // });


    // menu-section

    (function($) {
        // Begin jQuery
        $(function() {
        // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $("nav ul li a:not(:only-child)").click(function(e) {
          $(this)
            .siblings(".nav-dropdown")
            .toggle();
          // Close one dropdown when selecting another
          $(".nav-dropdown")
            .not($(this).siblings())
            .hide();
          e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $("html").click(function() {
          $(".nav-dropdown").hide();
        });
        // Toggle open and close nav styles on click
        $("#nav-toggle").click(function() {
          $("nav ul").slideToggle();
        });
        // Hamburger to X toggle
        $("#nav-toggle").on("click", function() {
          this.classList.toggle("active");
        });
        }); // end DOM ready
        })(jQuery); // end jQuery

    // menu-section
    // Script for smooth scrolling to div
        /*  var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();
          return elementBottom > viewportTop && elementTop < viewportBottom;
        };*/


        $(document).on('click', 'a[href^="#"]', function(e) {
            var id = $(this).attr('href');
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }
            e.preventDefault();
            var pos = $id.offset().top - 30;
            $('body, html').animate({scrollTop: pos});
        });





//          var nodes  = document.querySelectorAll('li'),
//     _nodes = [].slice.call(nodes, 0);
//
// var getDirection = function (ev, obj) {
//     var w = obj.offsetWidth,
//         h = obj.offsetHeight,
//         x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
//         y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
//         d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
//
//     return d;
// };
//
// var addClass = function ( ev, obj, state ) {
//     var direction = getDirection( ev, obj ),
//         class_suffix = "";
//
//     obj.className = "";
//
//     switch ( direction ) {
//         case 0 : class_suffix = '-top';    break;
//         case 1 : class_suffix = '-right';  break;
//         case 2 : class_suffix = '-bottom'; break;
//         case 3 : class_suffix = '-left';   break;
//     }
//
//     obj.classList.add( state + class_suffix );
// };

// bind events
// _nodes.forEach(function (el) {
//     el.addEventListener('mouseover', function (ev) {
//         addClass( ev, this, 'in' );
//     }, false);
//
//     el.addEventListener('mouseout', function (ev) {
//         addClass( ev, this, 'out' );
//     }, false);
// });
//scroll to top button script

$(document).ready(function(){
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('#scroll').fadeIn();
       } else {
           $('#scroll').fadeOut();
       }
   });
   $('#scroll').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 600);
       return false;
   });
});

$(document).ready(function($) {
 var url = window.location.href;
 var activePage = url;
 $('.nav-list li a').each(function () {
   var linkPage = this.href;
   if (activePage == linkPage) {
     $(this).closest("li").addClass("active");
   }
 });
$(".breadcrumb-home-img ,.breadcrumb-img").mouseover( function(){
        var abc = $(this).closest('.business-bread-link').find('.bread-tooltip').show();
    }
);
$(".breadcrumb-home-img ,.breadcrumb-img").mouseout( function(){
      $('.bread-tooltip').hide();
    }
   );
});
