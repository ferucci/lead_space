</div>
</main>

<footer>
    <div class="footer">
        <div class="container">
            <div class="footer__inner d-flex flex-column gap-5">
                <div class="footer__items d-flex justify-content-between h-100 flex-wrap flex-xl-nowrap gap-xl-0 gap-3" id="footer_items">
                    <div class="footer__grid-lg d-flex flex-column justify-content-around mt-n4 gap-xl-0 gap-3">
                        <img class="footer__logo" src="upload/logo.svg" alt="logo company">
                        <div class="desc">LeadSpace – компания <br>разработчик с фокусом на <br>внедрение CRM Битрик</div>
                        <div class="info d-flex flex-column">
                            <span>ИНН 481201837970</span>
                            <span>ОГРНИП 320482700003462</span>
                        </div>
                    </div>
                    <div class="d-grid">
                        <ul class="menu">
                            <li><a href="company.php">Компания</a></li>
                            <li><a href="cases.php">Кейсы</a></li>
                            <li><a href="blog.php">Блог</a></li>
                            <li><a href="contacts.php">Контакты</a></li>
                        </ul>
                        <ul class="menu">
                            <li><a href="" class="text-primary">Услуги</a></li>
                            <li><a href="websites.php">Разработка сайтов</a></li>
                            <li><a href="">Контекстная реклама</a></li>
                        </ul>
                        <ul class="menu">
                            <li><a href="#" class="text-primary">Битрикс24</a></li>
                            <li><a href="crm.php">Внедрение CRM</a></li>
                            <li><a href="#">Лицензии и тарифы</a></li>
                        </ul>
                        <!-- Блок контактов и кнопки -->
                        <div class="footer__actions gap-2">
                            <div class="d-flex align-items-end flex-column-reverse gap-2 mb-1">
                                <a data-fancybox href="#hidden" class="btn btn-primary">Начать проект</a>
                            </div>
                        </div>

                        <div class="footer__contacts gap-2">
                            <a href="tel:+79391112043" class="phone">+7 939 111-20-43</a>
                            <div class="d-flex align-items-center justify-content-end email">
                                <img src="upload/icon/email.svg" alt="">
                                <a href="mailto:info@lead-space.ru">info@lead-space.ru</a>
                            </div>
                            <div class="footer__social d-flex align-items-end justify-content-end gap-2">
                                <a href="#"><img src="upload/telegram.svg" alt="telegram icon"></a>
                                <a href="#"><img src="upload/whatsapp.svg" alt="whatsapp icon"></a>
                            </div>
                        </div>
                        <div id="footer__partners">
                            <div class="d-flex align-items-center gap-1 gap-sm-4 flex-wrap flex-sm-nowrap">
                                <div class="parnter bitrix">
                                    <img src="upload/footer/1cbitrix.svg" alt="">
                                    <div class="title">Партнер <br>1С Битрикс</div>
                                </div>
                                <div class="parnter bitrix24">
                                    <img src="upload/footer/bitrix24.svg" alt="">
                                    <div class="title">Партнер <br>Битрикс24</div>
                                </div>
                                <div class="parnter yandex">
                                    <img src="upload/footer/yandex.svg" alt="">
                                    <div class="title">Рейтинг <br>орг. в Янд</div>
                                </div>
                            </div>
                            <div class="footer__readme d-flex align-items-center gap-2 fs-6 me-sm-2 me-lg-0">
                                <span>Читайте нас:</span>
                                <a href="#"><img src="./upload/footer/dzen-icon.svg" alt=""></a>
                                <a href="#"><img src="./upload/footer/vk-icon.svg" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="author">
                    <div>© 2025 «LeadSpace» Все права защищены.</div>
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">LeadSpace на портале Битрикс24</a>
                </div>
            </div>

        </div>
    </div>
</footer>


<!-- Подключение jQuery -->
<script src="vendor/jquery/jquery3.6.0.min.js"></script>

<!-- Подключение Bootstrap5 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<!-- Подключение лайтбокса -->

<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css">

<!-- Подключение owlCarousel -->
<script src="vendor/owlcarousel/owl.carousel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/owl.carousel2.thumbs@0.1.8/dist/owl.carousel2.thumbs.min.js"></script>
<!-- Подключение Slick -->
<script src="vendor/slick/slick.min.js"></script>

<!-- Подключение основных скриптов -->
<script src="assets/js/jquery.mask.js"></script>
<script src="assets/js/dop.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/process.js"></script>
<div class="btn-up btn-up_hide"></div>
<script>
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
            // удалим у кнопки класс btn-up_hide
            this.el.classList.remove('btn-up_hide');
        },
        hide() {
            // добавим к кнопке класс btn-up_hide
            this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
            // при прокрутке содержимого страницы
            window.addEventListener('scroll', () => {
                // определяем величину прокрутки
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                scrollY > 400 ? this.show() : this.hide();
            });
            // при нажатии на кнопку .btn-up
            document.querySelector('.btn-up').onclick = () => {
                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();
</script>

<div style="display: none; width: 500px;height:auto" id="hidden" class="modal">

    <form action="#" class="needs-validation" method="post" enctype="multipart/form-data">
        <button type="button" data-fancybox-close="" class="fancybox-close" title="Close"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
            </svg></button>

        <div class="title">Свяжитесь с нами</div>

        <div class="wrap-input">
            <div class="position-relative">
                <input type="text" name="name" placeholder=" ">
                <label for="name">Имя</label>
            </div>
            <div class="position-relative">
                <input type="text" name="email" placeholder=" ">
                <label for="email">Электронная почта</label>
            </div>
            <div class="position-relative">
                <input type="tel" name="phone" placeholder=" ">
                <label for="phone">Номер телефона</label>
            </div>
        </div>
        <div class="position-relative">
            <input type="text" placeholder=" " name="message" class="w-100">
            <label for="phone">Расскажите про вашу задачу</label>
        </div>
        <label class="input-file">
            <input type="file" name="file">
            <span>Прикрепить файл</span>
        </label>

        <button type="submit" name="submit" class="btn btn-primary">
            Отправить заявку
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4107 0.457031H4.01069C3.13548 0.457031 2.29611 0.804709 1.67724 1.42358C1.05837 2.04245 0.710693 2.88182 0.710693 3.75703V14.757C0.710693 15.6322 1.05837 16.4716 1.67724 17.0905C2.29611 17.7094 3.13548 18.057 4.01069 18.057H19.4107C20.2859 18.057 21.1253 17.7094 21.7441 17.0905C22.363 16.4716 22.7107 15.6322 22.7107 14.757V3.75703C22.7107 2.88182 22.363 2.04245 21.7441 1.42358C21.1253 0.804709 20.2859 0.457031 19.4107 0.457031ZM19.4107 2.65703L12.2607 7.57403C12.0935 7.67058 11.9038 7.7214 11.7107 7.7214C11.5176 7.7214 11.3279 7.67058 11.1607 7.57403L4.01069 2.65703H19.4107Z" fill="white" />
            </svg>
        </button>
        <div class="checkbox" style="width: 100%;margin-top: 30px">
            <input type="checkbox" class="checked" checked="checked" name="politic">
            <div class="politic_text" style="width: 100%"> Нажимая кнопку «Отправить заявку», вы соглашаетесь с условиями Политики конфиденциальности</div>
        </div>

    </form>
</div>
</body>

</html>