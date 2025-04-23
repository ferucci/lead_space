
(jQuery)(document).ready(function ($) {

    $(document).on('click touch', '.mod-blog .filters button', function () {
        $('.mod-blog .filters button').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click touch', '.mod-think .link', event => {
        $('.mod-think .link').removeClass('active');
        $(event.currentTarget).addClass('active');
    });
    $(document).on('click touch', '.checkbox input', function () {
        $(this).toggleClass('checked');
    });
    $('.input-file input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).next().html(file.name);
    });

    $('.mod-main-banner .owl-carousel').owlCarousel({
        loop: false,
        items: 1,
        dots: true,
        nav: false,
        margin: 40,
        responsive: {
            320: { items: 1, loop: false, autoWidth: false, dots: false, },
            1200: { items: 2, loop: true, autoWidth: true, },
        }
    });
    $('.mod-websites-banner .owl-carousel').owlCarousel({ loop: true, items: 2, dots: true, nav: false, margin: 40, autoWidth: true, });
    $('.mod-development .owl-carousel').owlCarousel(
        {
            responsive: {
                0: {
                    items: 1,
                    margin: 15
                },
                600: { items: 2 },
                1000: { items: 3 }
            },
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            margin: 25,
            navText: ['<div class="prev"></div>', '<div class="next"></div>']
        }
    );
    $('.mod-context-tarif .owl-carousel').owlCarousel({ loop: true, items: 1, dots: false, autoHeight: true, nav: true, margin: 40, navText: ['<div class="prev"></div>', '<div class="next"></div>'] });
    $('.mod-integration .owl-carousel').owlCarousel({
        loop: false,
        items: 1,
        dots: false,
        stagePadding: 20,
        nav: true,
        margin: -10,
        navText: ['<div class="prev"></div>', '<div class="next"></div>']
    });


    $('.mod-context-business .owl-carousel').owlCarousel({ loop: false, items: 1, dots: false, nav: true, margin: 40, stagePadding: 50, navText: ['<div class="prev"></div>', '<div class="next"></div>'] });
    $('.mod-context-settings .owl-carousel').owlCarousel({
        loop: false,
        items: 1,
        dots: false,
        nav: true,
        margin: 40,
        stagePadding: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>']
    });
    $('.mod-context-client .owl-carousel').owlCarousel({ loop: false, items: 1, dots: false, nav: true, margin: 40, navText: ['<div class="prev"></div>', '<div class="next"></div>'] });
    $('.mod-context-result .owl-carousel').owlCarousel({ loop: true, items: 1, dots: false, nav: true, margin: 40, navText: ['<div class="prev"></div>', '<div class="next"></div>'] });
    $('.mod-services .owl-carousel').owlCarousel({ loop: true, items: 1, dots: false, nav: true, autoHeight: true, margin: 40, navText: ['<div class="prev"></div>', '<div class="next"></div>'] });
    $('.mod-crm-banner .owl-carousel').owlCarousel({ loop: true, items: 2, dots: true, nav: false, margin: 40, autoWidth: true, responsive: { 991: { items: 1, } } });
    $('.mod-context-banner .owl-carousel').owlCarousel({ loop: false, items: 1, dots: true, nav: false, margin: 40, responsive: { 320: { items: 1, loop: false, autoWidth: false }, 1200: { items: 2, loop: true, autoWidth: true, }, } });
    $('.mod-main-cases .owl-carousel').owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        nav: false,
        margin: 30,
        stagePadding: 50,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            0: { items: 1, stagePadding: 0, margin: 10, },
            600: { items: 2, stagePadding: 0, margin: 10, },
            1200: { items: 5, stagePadding: 150, nav: true, }
        }
    });
    $('.mod-main-services .owl-carousel').owlCarousel({ loop: true, items: 1, dots: false, nav: true, margin: 30, navText: ['<div class="prev"></div>', '<div class="next"></div>'], });
    $('.mod-achiev .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: { 768: { items: 2 } }
    });
    $('.mod-cases-detail-solution-two .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: { 992: { items: 2, stagePadding: 320 } }
    });
    $('.mod-cases-detail-solution-four .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: { 992: { items: 2 } }
    });
    $('.mod-cases-detail-solution-five .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 50,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: { 992: { items: 3, stagePadding: 0 } }
    });
    $('.mod-cases-detail-solution-eight .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        stagePadding: 50,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<div class="prev"></div>', '<div class="next"></div>']
    });
    $('.mod-main-company .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: { 768: { items: 2, dots: false }, 1200: { items: 3 } }
    });
    $(".mod-team .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        center: true,
        dots: false,
        stagePadding: 50,
        nav: true,
        margin: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            1200: { items: 3, stagePadding: 0 }, 800: { items: 2, stagePadding: 0 },
            600: { items: 1, stagePadding: 50 },
            0: { items: 1, stagePadding: 20 }
        },
    });

    $('.mod-context-service .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplaySpeed: 1000,

        stagePadding: 30,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            1200: { items: 4, stagePadding: 0 }
        }
    });
    $('.mod-context-cases .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: true,
        margin: 30,
    });

    $('.mod-think .slider1').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: true,
        thumbs: true,
        thumbsPrerendered: true,
        margin: 20, navText: ['', ''],
        autoHeight: true,
        URLhashListener: true,
        startPosition: 'one-hash',
    }
    );

    $('.mod-profit .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: false,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['', ''],
        autoHeight: true,
        stagePadding: 50,
        responsive: { 768: { items: 3 }, 576: { items: 2, }, 0: { items: 1, stagePadding: 0, } }
    });
    $('.mod-problems .owl-carousel').owlCarousel({ items: 1, loop: false, center: false, dots: false, nav: true, margin: 30, navText: ['', ''], autoHeight: true });
    $('.mod-methods .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: false,
        dots: false,
        nav: true,
        margin: 30,
        navText: ['', ''],
        autoHeight: true,
        stagePadding: 50,
        responsive: { 768: { items: 3 }, 576: { items: 2, }, 0: { items: 1, stagePadding: 0 } }
    });
    $('.mod-why .owl-carousel').owlCarousel({ items: 1, loop: false, center: false, dots: false, nav: true, margin: 30, navText: ['', ''], autoHeight: true, stagePadding: 50, responsive: { 768: { items: 3 }, 576: { items: 2, }, 320: { items: 1, } } });
    $('.mod-youget .owl-carousel').owlCarousel({ items: 1, loop: false, center: false, dots: false, nav: true, margin: 30, navText: ['', ''], autoHeight: true, responsive: { 576: { items: 2, }, 320: { items: 1, } } });
    $('.mod-buy #v-pills-home .owl-carousel, .mod-buy #v-pills-profile .owl-carousel ').owlCarousel({ items: 1, loop: false, center: false, dots: false, nav: true, margin: 30, navText: ['', ''], autoHeight: true, responsive: { 768: { items: 2, }, 576: { items: 1, } } });



    // mod-work
    $('.mod-work .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 25,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            0: { items: 1, },
            600: { items: 2, },
            1200: { items: 3 }
        }
    });

    // mod-advantages

    $('.mod-get .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        margin: 40,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            0: { items: 1, },
            600: { items: 2, },
            1200: { items: 3 }
        }
    });

    $('.mod-tarif .owl-carousel').owlCarousel(
        {
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            margin: 40,
            navText: ['<div class="prev"></div>', '<div class="next"></div>'],
            responsive: {
                0: { items: 1, stagePadding: 0, margin: 10, },
                600: { items: 2, stagePadding: 0, margin: 10, },
                1200: { items: 5, stagePadding: 150, nav: true, }
            }
        }
    );

    // Reviews

    $('.mod-reviews .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        margin: 30,
        autoHeight: true,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            992: { nav: true, items: 3, loop: false, },
            576: { nav: false, loop: true, items: 2, },
            0: { items: 1, stagePadding: 0, nav: false, loop: true }
        }
    });

    // -----------


    $(document).ready(function () {
        $('.mod-team .item').hover(
            function () {
                $(this).addClass('on-hover');
                $(this).closest('.wrap').find('.fulltext').addClass('on-hover');
                $(this).closest('.wrap button').addClass('active');
            },
            function () {
                $(this).removeClass('on-hover');
                $(this).closest('.wrap').find('.fulltext').removeClass('on-hover');
                $(this).closest('.wrap button').removeClass('on-hover');
            }
        )
    });

    document.querySelectorAll('.simulated-hover').forEach(element => {
        element.addEventListener('touchstart', () => element.classList.add('on-hover'));
        element.addEventListener('touchend', () => element.classList.remove('on-hover'));
    });

    $(document).on('click touch', '.burger', function () {
        $(this).toggleClass('active');
        $('#header_mobile .hide_menu').toggleClass('active');
    });

    $(document).on('click touch', 'a.parent', function () {
        $('ul.main').css('transform', 'translateX(-375px)');
        $(this).closest('li').find('.dropdown').addClass('active');
    });

    $(document).on('click touch', 'ul.dropdown .title', function () {
        $('ul.dropdown').removeClass('active');
        $('ul.main').css('transform', 'translateX(0)');
    });

    $(document).on('click touch', '.mod-map span', function (event) {
        // e.preventDefault();

        var id = this.id;
        console.log(id);
        //console.log(event.currentTarget);
        var el = document.getElementById(id);
        var x = Number(el.getAttribute('x')) + 15;
        var y = Number(el.getAttribute('y')) + 15;

        $.ajax({
            url: '/assets/js/data.json',
            dataType: 'json',
            success: function (data) {

                var array = data[id];
                $('.wrap-elements').remove();
                html = '<div class="wrap-elements" style="left: ' + y + 'px; top: ' + x + 'px;">'
                html += '<img src="/upload/info.png" alt="" class="remove"/>'
                html += '<div class="city">' + array.city + '</div>'
                array.elements.forEach(element => {
                    html += '<div class="element">'
                    html += '<img src="' + element.imagePath + '" alt="">'
                    html += '<div>'
                    html += '<div class="title">' + element.name + '</div>'
                    html += '<div class="tag">' + element.tags + '</div>'
                    html += '</div>'
                    html += '</div>'

                });
                html += '<button class="btn btn-primary w-100 mt-4">Смотреть все проекты <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none"> <path d="M22.627 10.2751C22.627 10.5171 22.506 10.7747 22.264 11.0479L18.33 15.6844C17.9943 16.0825 17.5241 16.4201 16.9191 16.6972C16.3142 16.9743 15.7541 17.1128 15.239 17.1128H2.50029C2.2349 17.1128 1.99878 17.0621 1.79193 16.9606C1.58509 16.8591 1.48166 16.6913 1.48166 16.4571C1.48166 16.2152 1.60265 15.9576 1.84463 15.6844L5.77862 11.0479C6.11427 10.6498 6.58456 10.3122 7.18948 10.0351C7.79442 9.75802 8.35447 9.61947 8.86964 9.61947H21.6083C21.8737 9.61947 22.1098 9.67021 22.3167 9.77168C22.5235 9.87315 22.627 10.041 22.627 10.2751ZM18.611 6.24747V8.1208H8.86964C8.13591 8.1208 7.36706 8.30618 6.56309 8.67695C5.75912 9.04771 5.11907 9.51409 4.64292 10.0761L0.697201 14.7126L0.638665 14.7829C0.638665 14.7516 0.636713 14.7028 0.632809 14.6365C0.628905 14.5702 0.626953 14.5214 0.626953 14.4902V3.25012C0.626953 2.53201 0.884536 1.91537 1.3997 1.40019C1.91487 0.885025 2.53151 0.627441 3.24963 0.627441H6.9963C7.71441 0.627441 8.33105 0.885025 8.84622 1.40019C9.36139 1.91536 9.61897 2.532 9.61897 3.25012V3.62478H15.9883C16.7064 3.62478 17.3231 3.88236 17.8382 4.39753C18.3534 4.9127 18.611 5.52934 18.611 6.24746V6.24747Z" fill="white"/> </svg></button>'
                html += '</div>'
                $('.mod-map').append(html);
                // $('#cityName').text(data.infoImage.city);
            },
            error: function () {
                console.log('Ошибка загрузки данных');
            }
        });
    })
    $(document).on('click touch', '.wrap-elements .remove', function () {
        $('.wrap-elements').remove();
    });

    /* $(document).on('click touch', '#infoImage', function(event) {
         __this = $(this);
         var modMap = $('.mod-map');
         $.ajax({
             url: '/assets/js/data.json',
             dataType: 'json',
             success: function(data) {
                 // var x = event.pageX - $(__this).offset().left;
                 // var y = event.pageY - $(__this).offset().top; 
                 var modMapOffset = modMap.offset();
                 var x = event.pageX - modMapOffset.left; // Корректировка координаты X
                 var y = event.pageY - modMapOffset.top; // Корректировка координаты Y
 
                 // Убедимся, что элемент не выходит за пределы mod-map
                 x = Math.max(0, Math.min(x, modMap.width()));
                 y = Math.max(0, Math.min(y, modMap.height()));
                 console.log(x);
                 $('.wrap-elements').remove();
                 html = '<div class="wrap-elements" style="left: ' + x + 'px; top: ' + y + 'px;">'
                     html += '<img src="/upload/info.png" alt="" class="remove"/>'
                     html += '<div class="city">'+ data.infoImage.city +'</div>'
                     data.infoImage.elements.forEach(element => {
                         html += '<div class="element">'
                             html += '<img src="'+ element.imagePath +'" alt="">'
                             html += '<div>'
                                 html += '<div class="title">'+ element.name +'</div>'
                                 html += '<div class="tag">'+ element.tags +'</div>'
                             html += '</div>'
                         html += '</div>'
                         
                     });
                     html += '<button class="btn btn-primary w-100 mt-4">Смотреть все проекты <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none"> <path d="M22.627 10.2751C22.627 10.5171 22.506 10.7747 22.264 11.0479L18.33 15.6844C17.9943 16.0825 17.5241 16.4201 16.9191 16.6972C16.3142 16.9743 15.7541 17.1128 15.239 17.1128H2.50029C2.2349 17.1128 1.99878 17.0621 1.79193 16.9606C1.58509 16.8591 1.48166 16.6913 1.48166 16.4571C1.48166 16.2152 1.60265 15.9576 1.84463 15.6844L5.77862 11.0479C6.11427 10.6498 6.58456 10.3122 7.18948 10.0351C7.79442 9.75802 8.35447 9.61947 8.86964 9.61947H21.6083C21.8737 9.61947 22.1098 9.67021 22.3167 9.77168C22.5235 9.87315 22.627 10.041 22.627 10.2751ZM18.611 6.24747V8.1208H8.86964C8.13591 8.1208 7.36706 8.30618 6.56309 8.67695C5.75912 9.04771 5.11907 9.51409 4.64292 10.0761L0.697201 14.7126L0.638665 14.7829C0.638665 14.7516 0.636713 14.7028 0.632809 14.6365C0.628905 14.5702 0.626953 14.5214 0.626953 14.4902V3.25012C0.626953 2.53201 0.884536 1.91537 1.3997 1.40019C1.91487 0.885025 2.53151 0.627441 3.24963 0.627441H6.9963C7.71441 0.627441 8.33105 0.885025 8.84622 1.40019C9.36139 1.91536 9.61897 2.532 9.61897 3.25012V3.62478H15.9883C16.7064 3.62478 17.3231 3.88236 17.8382 4.39753C18.3534 4.9127 18.611 5.52934 18.611 6.24746V6.24747Z" fill="white"/> </svg></button>'
                 html += '</div>'
                 $('.mod-map').append(html);
                 // $('#cityName').text(data.infoImage.city);
             },
             error: function() {
                 console.log('Ошибка загрузки данных');
             }
         });
     });
 
     $(document).on('click touch', '.wrap-elements .remove', function() {
         $('.wrap-elements').remove();
     });*/


    $('[type=tel]').mask('+7 (000) 000 00 00');



    $('form').on('submit', function (event) {
        // Предотвращаем стандартную отправку формы
        event.preventDefault();

        // Удаляем класс 'error' со всех элементов input
        $('input').removeClass('error');

        // Флаг, отслеживающий наличие ошибок
        var hasError = false;

        // Перебираем все элементы input
        $('input').each(function () {
            // Проверяем, пустое ли поле
            if (!$(this).val()) {
                // Добавляем класс 'error'
                $(this).addClass('error');
                hasError = true;
            }
        });

        // Если ошибок нет, отправляем форму программно
        if (!hasError) {
            this.submit();
        }
    });

    $(document).on('click touch', '.filter', function () {
        $(this).closest('.wrap-filter').find('.filter').removeClass('active');
        $(this).addClass('active');
    });

    function applyDNone() {
        if ($(window).width() <= 576) {
            // Добавляем класс 'd-none' всем блокам, начиная с пятого
            $('.mod-spheres .row > div').slice(4).addClass('d-none');
        } else {
            // Удаляем класс 'd-none', если ширина больше 576
            $('.mod-spheres .row > div').slice(4).removeClass('d-none');
        }
    }

    // Вызываем функцию при загрузке и изменении размера окна
    applyDNone();
    $(window).resize(applyDNone);

    // Обработчик клика на кнопку
    $('.show-spheres').click(function () {
        $(this).find('span').remove();
        if ($(window).width() <= 576) {
            $('.mod-spheres .row > div').slice(4).removeClass('d-none');
        }
    });

    $(document).on('click touch', '.dropdown-content a', function (e) {
        e.preventDefault();
        var newText = $(this).text();
        var svgIcon = '1<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0C5ADB"/><path d="M13 18L20 24L27 18" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

        $('.dropbtn').html(newText + ' ' + svgIcon);
    });


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0.5, 0.9, 1.0]
    };

    const observer = new IntersectionObserver((entries) => {
        console.log("Intersection Observer is working");
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('#sidebar a').removeClass('active');
                const activeLink = $(`#sidebar a[href="#${entry.target.id}"]`);
                activeLink.addClass('active');
            }
        });
    }, observerOptions);

    $('section[id]').each(function () {
        observer.observe(this);
    });


});



window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

    const getChildren = (item) => {

        const children = document.querySelector(item);
        if (!children) {
            return
        } else {
            children.addEventListener("click", function (e) {
                e.preventDefault();
                this.closest('.dropdown').classList.toggle('active');
            })
        }

    }

    getChildren("#dropbtn")
});

