$('p').hover(
  function () {
    $(this).addClass('flag');
    $(this).click(
      function() {
        $('.box').show();
      });
  },

  function () {
    $(this).click(
      function() {
        $('.box').hide();
      });
    $(this).removeClass('flag');
  }
);
