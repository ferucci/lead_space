<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Подключение Bootstrap5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- Подключение owlCarousel -->
    <link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css">

    <!-- Подключение Slick -->
    <link rel="stylesheet" href="vendor/slick/slick.css">
    <!-- <link rel="stylesheet" href="/vendor/slick/slick-theme.css"> -->

    <!-- Подключение Шрифтов -->
    <link rel="stylesheet" href="fonts/stylesheet.css">


    <!-- Подключение основных стилей -->
    <link rel="stylesheet" href="assets/css/dop.css">
    <link rel="stylesheet" href="assets/css/style.css?rnd=<?= rand(0, 9999) ?>">
    <link rel="stylesheet" href="assets/css/style2.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <title>LeadSpace</title>
</head>

<body>
    <header id="header_desctop">
        <div class="container">
            <div id="header_items">
                <a href="/"><img src="upload/logo.svg" alt=""></a>
                <ul class="menu">
                    <li><a href="company.php">Компания</a></li>
                    <li><a href="cases.php">Кейсы</a></li>
                    <li><a href="blog.php">Блог</a></li>
                    <li><a href="contacts.php">Контакты</a></li>
                </ul>
                <div class="d-flex align-items-center phone">
                    <img src="upload/icon/phone.svg" alt="" style="margin-right: 8px;">
                    <a href="tel:+79391112043">+7 939 111-20-43</a>
                </div>
                <div class="d-flex align-items-center email">
                    <img src="upload/icon/email.svg" alt="" style="margin-right: 8px;">
                    <a href="mailto:info@lead-space.ru">info@lead-space.ru</a>
                </div>
                <a class="btn btn-primary" data-fancybox href="#hidden">Начать проект</a>
            </div>

            <div id="top_menu" class="bg-color">
                <div class="d-flex align-items-center">
                    <img src="upload/icon/star.svg" alt="" class="star">
                    <ul class="menu">
                        <li><a href="">Услуги</a></li>
                        <li></li>
                        <li><a href="crm.php">Внедрение CRM</a></li>
                        <li><a href="websites.php">Разработка сайтов</a></li>
                        <li><a href="context.php">Контекстная реклама</a></li>
                    </ul>
                </div>
                <div class="soc">
                    <a href="#" style="margin-right: 12px;"><img src="upload/telegram.svg" alt=""></a>
                    <a href="#"><img src="upload/whatsapp.svg" alt=""></a>
                </div>
            </div>

        </div>
    </header>

    <div id="header_mobile">
        <div class="container">
            <div class="header_nav">
                <a href="/"><img src="upload/logo.svg" alt=""></a>
                <div class="d-flex align-items-center">
                    <div class="soc">
                        <a href="#" style="margin-right: 12px;"><img src="upload/telegram.svg" alt=""></a>
                        <a href="#" style="margin-right: 12px;"><img src="upload/whatsapp.svg" alt=""></a>
                        <a href="#"><img src="upload/phone.png" alt=""></a>
                    </div>
                    <div class="burger">
                        <span></span>

                    </div>
                </div>
            </div>

            <div class="hide_menu">
                <ul class="mb-5 main">
                    <div class="title mb-4">Меню</div>
                    <li><a href="#">Компания</a></li>
                    <li>
                        <a href="#" class="parent">Услуги</a>
                        <ul class="dropdown">
                            <div class="title mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none" style="margin-right: 20px;">
                                    <path d="M11 2L2 11.5L11 21" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Услуги
                            </div>
                            <li><a href="crm.php">Внедрение CRM</a></li>
                            <li><a href="websites.php">Разработка сайтов</a></li>
                            <li><a href="context.php">Контекстная реклама</a></li>
                        </ul>
                    </li>
                    <li><a href="cases.php">Кейсы</a></li>
                    <li><a href="blog.php">Блог</a></li>
                    <li><a href="contacts.php">Контакты</a></li>
                </ul>

                <div class="mt-a">
                    <div class="d-flex align-items-center phone mb-3">
                        <a href="tel:+79391112043">+7 939 111-20-43</a>
                    </div>
                    <div class="d-flex align-items-center email mb-4">
                        <img src="upload/icon/email.svg" alt="" style="margin-right: 8px;">
                        <a href="mailto:info@lead-space.ru">info@lead-space.ru</a>
                    </div>
                    <a data-fancybox href="#hidden" class="btn btn-primary">Начать проект</a>
                </div>
            </div>
        </div>
    </div>

    <main>
        <div class="container">