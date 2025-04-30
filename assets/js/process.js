$(document).ready(function () {
  // Конфигурация позиций
  const positionsConfig = {
    desktop: [
      { left: '9%', top: '45%' },
      { left: '5%', top: '47%' },
      { left: '264%', top: '4%' },
      { left: '93%', top: '38%' },
      { left: '-118%', top: '38%' }
    ],
    mobile: { left: '8%', top: '50%' }
  };

  // Инициализация оригинальных параметров SVG
  let originalSvgSizes = [];
  let originalHrefs = [];

  // Основные элементы
  const $window = $(window);
  const $processItems = $('.process-item');
  const $puzzleSvgs = $('.item__puzzle');

  function setValueInnerItems(item, text, href) {
    const $wrap = item.prevObject[0].querySelector('.wrap')
    const $title = $wrap.querySelector('.subtitle')
    const $svg = $wrap.querySelector('.main-svg > use')

    $title.innerText = text
    $svg.setAttribute('href', href);
  }

  // Функция для установки позиций элементов
  function updateItemPositions() {
    const mobile = $window.width() < 1200;

    const $item3 = $('.process-item[data-process="3"]').closest('.owl-item');
    const $item5 = $('.process-item[data-process="5"]').closest('.owl-item');

    if (mobile) {
      setValueInnerItems($item3, "Разработка", "#dev-svg")
      setValueInnerItems($item5, "Запуск", "#start-svg")
    } else {
      setValueInnerItems($item5, "Разработка", "#dev-svg")
      setValueInnerItems($item3, "Запуск", "#start-svg")
    }


    $processItems.each(function () {
      const $this = $(this);
      const processNumber = $this.data('process');
      let pos = mobile ?
        positionsConfig.mobile :
        (positionsConfig.desktop[processNumber - 1] || { left: '0', top: '0' });

      $this.find('.wrap').css({
        '--process-number': `"${processNumber}"`,
        '--pos-left': pos.left,
        '--pos-top': pos.top
      });
    });
  }

  // Функция инициализации/уничтожения слайдера
  function initProcessSlider() {
    const $sliderContainer = $('.process-items__slider');

    // Сохраняем оригинальные параметры при первой инициализации
    if (originalSvgSizes.length === 0) {
      $puzzleSvgs.each(function (index) {
        originalSvgSizes[index] = {
          width: $(this).attr('width'),
          height: $(this).attr('height'),
          viewBox: $(this).attr('viewBox')
        };
      });

      $('.item__puzzle > use').each(function (index) {
        originalHrefs[index] = $(this).attr('href');
      });
    }

    if ($window.width() <= (1200 - 16)) {
      // Если слайдер уже инициализирован - ничего не делаем
      if ($sliderContainer.hasClass('owl-carousel')) return;

      // Удаляем старую обертку, если есть
      if ($sliderContainer.length) {
        $sliderContainer.children().unwrap();
        return;
      }

      // Устанавливаем фиксированные размеры для SVG
      $puzzleSvgs.attr({
        'width': '100%',
        'height': '100%',
        'viewBox': '0 0 456 286'
      });

      // Изменяем href на "puzzle" для мобильного вида
      $('.item__puzzle > use').attr('href', '#puzzle');

      // Создаем новую обертку и инициализируем слайдер
      $processItems.wrapAll('<div class="process-items__slider"></div>');
      const $slider = $('.process-items__slider')
        .addClass('owl-carousel owl-theme')
        .owlCarousel({
          loop: false,
          nav: true,
          dots: false,
          navText: ['<div class="prev"></div>', '<div class="next"></div>'],
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            860: { items: 3 }
          },
          onInitialized: function () {
            $('.owl-thumbs').remove();
          }// Вызываем после инициализации
        });

    } else {
      // Если есть активный слайдер - уничтожаем его
      if ($sliderContainer.hasClass('owl-carousel')) {
        const owl = $sliderContainer;
        owl.trigger('destroy.owl.carousel');
        owl.removeClass('owl-carousel owl-theme owl-loaded owl-drag');
        owl.children().unwrap();

        // Восстанавливаем оригинальные параметры SVG
        $puzzleSvgs.each(function (index) {
          if (originalSvgSizes[index]) {
            $(this).attr({
              'width': originalSvgSizes[index].width,
              'height': originalSvgSizes[index].height,
              'viewBox': originalSvgSizes[index].viewBox
            });
          }
        });

        $('.item__puzzle > use').each(function (index) {
          if (originalHrefs[index]) {
            $(this).attr('href', originalHrefs[index]);
          }
        });

        // Очищаем оставшиеся стили
        $processItems.removeClass('owl-item').removeAttr('style');
      }
    }
  }

  // Обработчик ресайза с троттлингом
  let resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      updateItemPositions();
      initProcessSlider();
    }, 200);
  }

  // Первоначальная инициализация
  updateItemPositions();
  initProcessSlider();
  $window.on('resize', handleResize);
});