$('p').hover(
  function () {
    $(this).addClass('flag', 400, "easeOutBounce");
  },

  function () {
    $(this).removeClass('flag');
  }
);
