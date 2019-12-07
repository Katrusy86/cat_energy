(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('show');
      });

      $('.show').on('click', function() {
        // do something

        $(this).closest('.menu')
          .removeClass('show');
      });
    });
  })(jQuery);


