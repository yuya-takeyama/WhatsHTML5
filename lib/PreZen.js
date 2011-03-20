if (typeof PreZen === 'undefined') {
  var PreZen;
}

PreZen = (function () {
  var config = {
        'show-speed' : 0,
        'hide-speed' : 0,
      },
      $ = jQuery,
      showdownConverter = new Showdown.converter,
      slides,
      slideCount,
      slideIndex,
      init,
      configure,
      initSlide,
      displaySlide,
      next,
      prev,
      keyBindCallback;

  init = function (_config) {
    $(document).ready(function () {
      configure(_config);
      slides = $('#slides .slide');
      slides.each(initSlide);
      slideCount = slides.length;
      if (location.hash === '') {
        slideIndex = 0;
      } else {
        slideIndex = parseInt(location.hash.substr(1));
      }
      displaySlide(slideIndex);
      $(window).keydown(keyBindCallback);
    });
  };

  configure = function (_config) {
    if (typeof _config === 'undefined') {
      _config = {};
    }
    for (var key in _config) {
      config[key] = _config[key];
    }
  };

  initSlide = function () {
    $(this).hide();
    if ($(this).hasClass('wiki')) {
      $(this).html(PreZen.Wiki.convert($(this).html()));
    } else if ($(this).hasClass('markdown')) {
      $(this).html(showdownConverter.makeHtml($(this).html()));
    }
  };

  displaySlide = function (index) {
    $(slides[slideIndex]).hide(config['hide-speed']);
    slideIndex = index;
    $(slides[slideIndex]).show(config['show-speed']);
    location.hash = slideIndex;
  };

  next = function () {
    if ((slideIndex + 1) < slideCount) {
      displaySlide(slideIndex + 1);
    }
  };

  prev = function () {
    if (slideIndex > 0) {
      displaySlide(slideIndex - 1);
    }
  };

  keyBindCallback = function (e) {
    var key = e.keyCode;
    if (key === 37 || key === 38) {
      prev();
    } else if (key === 39 || key === 40) {
      next();
    }
  };

  return {
    init : init,
  };
})();
