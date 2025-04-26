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
  let isApplyingMargins = false;

  // Функция для установки позиций элементов
  function updateItemPositions() {
    $processItems.each(function () {
      const $this = $(this);
      const processNumber = $this.data('process');
      let pos = $window.width() < 1200 ?
        positionsConfig.mobile :
        (positionsConfig.desktop[processNumber - 1] || { left: '0', top: '0' });

      $this.find('.wrap').css({
        '--process-number': `"${processNumber}"`,
        '--pos-left': pos.left,
        '--pos-top': pos.top
      });
    });
  }

  // // Функция для установки отступов в слайдере
  // function applySliderMargins() {
  //   if (isApplyingMargins) return;
  //   isApplyingMargins = true;

  //   const $slider = $('.process-items__slider.owl-carousel');
  //   if (!$slider.length) {
  //     isApplyingMargins = false;
  //     return;
  //   }

  //   const owl = $slider.data('owl.carousel');
  //   if (!owl) {
  //     isApplyingMargins = false;
  //     return;
  //   }

  //   // 1. Получаю реальную ширину элемента слайдера
  //   const $firstItem = $slider.find('.owl-item:not(.cloned)').first();
  //   const itemWidth = $firstItem.width();

  //   // 2. Задаю желаемый процент (например, 10%)
  //   const marginPercent = -16.5;
  //   const marginValue = itemWidth * marginPercent / 100;

  //   // Применяю margin ко всем элементам, кроме первого
  //   $slider.find('.owl-item').each(function (index) {
  //     if (index === 0) {
  //       // Для первого элемента - сбрасываем margin
  //       $(this).css({
  //         'margin-left': '0',
  //       });
  //     } else {
  //       // Для остальных элементов - устанавливаю margin
  //       $(this).css({
  //         'margin-left': marginValue + 'px'
  //       });
  //     }
  //   });

  //   // Обновляю слайдер без триггера событий
  //   setTimeout(() => {
  //     owl.onResize();
  //     isApplyingMargins = false;
  //   }, 50);
  // }

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
            // setTimeout(applySliderMargins, 100);
          }// Вызываем после инициализации
        });
      // Обработчики событий слайдера
      // $slider
      //   .on('changed.owl.carousel', function () {
      //     setTimeout(applySliderMargins, 50);
      //   })
      //   .on('resized.owl.carousel', function () {
      //     setTimeout(applySliderMargins, 50);
      //   });
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
      // applySliderMargins();
    }, 200);
  }

  // Первоначальная инициализация
  updateItemPositions();
  initProcessSlider();
  $window.on('resize', handleResize);
});