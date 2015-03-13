
$(function() {

    if ($('.isotopeWrapper').length) {
      var $container = $('.isotopeWrapper');
      // initialize isotope
      $container.isotope({
        itemSelector: '.isotopeItem',
        layoutMode: 'fitRows',
        resizable: false, // disable normal resizing
      });
      $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

      $('#filter a').click(function () {
        $('#filter a').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 1000,
            easing: 'easeOutQuart',
            queue: false
          }
        });
        return false;
      });

    }

    window.onresize = function(){ location.reload(); }

});
