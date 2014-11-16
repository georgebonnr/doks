$('p').hover(
  function () {
    console.log ("you got it");
    $(this).addClass('flag');
  },

  function () {
    $(this).removeClass('flag');
  }
);
