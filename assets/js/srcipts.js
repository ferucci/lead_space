// /аккордеон
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Убираем класс 'active' у всех элементов
            accordionHeaders.forEach(h => h.classList.remove('active'));
            const content = header.nextElementSibling;

            if (content.style.maxHeight) {
                // Если уже открыт, закрываем
                content.style.maxHeight = null;
            } else {
                // Иначе открываем
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
// /аккордеон


// табы для tech
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const items = document.querySelectorAll('.tech__detail-item');

    // Добавляем обработчик событий для каждой кнопки
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Скрываем все элементы
            items.forEach(item => {
                item.classList.remove('hidden');
            });

            // Показываем элементы, соответствующие выбранной категории
            if (filterValue === 'all') {
                items.forEach(item => {
                    item.classList.add('visible');
                });
            } else {
                items.forEach(item => {
                    if (item.getAttribute('data-category') !== filterValue) {
                        item.classList.add('hidden');
                    }
                });
            }
        });
    });
});
// /табы для tech


// табы для cases
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.cases__filter-item');
    const items = document.querySelectorAll('.cases__item');
    const icon = document.querySelector('.cases__filter')
    const iconClick = document.querySelector('.cases__filter-icon')

    // Добавляем обработчик событий для каждой кнопки
    iconClick.addEventListener('click',()=>{
        icon.classList.toggle('opened')    
    })
    filterButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            filterButtons.forEach(button=>{
                button.classList.remove('active')
                
            })
            icon.classList.toggle('opened')
            const filterValue = button.getAttribute('data-case-filter');

            button.classList.add('active')
            // Скрываем все элементы
            items.forEach(item => {
                item.classList.remove('hidden');
            });

            // Показываем элементы, соответствующие выбранной категории
            if (filterValue === 'all') {
                items.forEach(item => {
                    item.classList.add('active');
                });
            } else {
                items.forEach(item => {
                    if (item.getAttribute('data-case') !== filterValue) {
                        item.classList.add('hidden');
                    }
                });
            }
        });
    });
});
// /табы для cases




// бургер в мобилке
burgers = document.querySelectorAll('.burger');
for (let i = 0; i < burgers.length; i++) {
     burgers[i].addEventListener("click", function(){
       this.classList.remove("animate");
       
       var bars = this.querySelectorAll('.burger__bar');
       for (let i = 0; i < bars.length; i++) {
         // Reset span animations - https://css-tricks.com/restart-css-animation/
         void bars[i].offsetWidth;
       }

       if (this.classList.contains("open")){
         this.classList.remove("open");
         this.classList.add("close");
         this.setAttribute('aria-expanded', 'false');
         document.querySelector('.header-mobile__content').classList.remove('show')
       } else {
        document.querySelector('.header-mobile__content').classList.add('show')

         this.classList.remove("close");
         this.classList.add("open");
         this.setAttribute('aria-expanded', 'true');
       }  
       this.classList.add("animate");
    });
};
// /бургер в мобилке



// мобильное меню
document.addEventListener('DOMContentLoaded', () => {
    const multipleItems = document.querySelectorAll('.header-mobile__item.multiple');

    // Добавляем обработчик событий для каждого элемента .multiple
    multipleItems.forEach(item => {
        const link = item.querySelector('.header-mobile__item-link');
        const submenu = item.querySelector('.header-mobile__submenu');
        const titleElement = document.querySelector('.header-mobile__title');

        item.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Изменяем заголовок
            titleElement.textContent = link.textContent;

            // Скрываем все другие подменю
            multipleItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.toggle('active');
                }
            });

            // Переключаем состояние текущего элемента
            item.classList.toggle('active');

            // Если элемент уже активен, скрываем подменю
            if (!item.classList.contains('active')) {
                submenu.style.display = 'none';
            } else {
                // Показываем подменю и скрываем основное меню
                submenu.style.display = 'block';
                const mainMenu = document.querySelectorAll('.header-mobile__item:not(.multiple)');
                mainMenu.forEach(deactiveted =>{
                    deactiveted.style.display = 'none';
                })
                // mainMenu.style.display = 'none';

            }
        });
    });

    // Возвращаемся к основному меню при нажатии на заголовок
    const title = document.querySelector('.header-mobile__menu > .header-mobile__item');
    title.addEventListener('click', () => {
        multipleItems.forEach(item => {
            item.classList.remove('active');
            const submenu = item.querySelector('.header-mobile__submenu');
            submenu.style.display = 'none';
        });

        const mainMenu = document.querySelector('.header-mobile__menu');
        mainMenu.style.display = 'block';
        title.textContent = 'Меню'; // Возвращаем исходный текст заголовка
    });
}); 