(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('menu--show');
      });

      $('.menu--show').on('click', function() {
        // do something

        $(this).closest('.menu')
          .removeClass('menu--show');
      });
    });
  })(jQuery);


