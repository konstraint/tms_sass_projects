import * as bootstrap from 'bootstrap';
import SimpleBar from 'simpleBar';

new SimpleBar(document.getElementById('accordeon-item1'), {
    autoHide: false
});

new SimpleBar(document.getElementById('accordeon-item2'), {
    autoHide: false
});

new SimpleBar(document.getElementById('accordeon-item3'), {
    autoHide: false
});

const iconMenu = document.querySelector('.menu-icon');  //ищем элемент меню с классом menu-icon, т.е. бургер
if (iconMenu) { //если найден такой объект, то работаем
    const menuMobileBody = document.querySelector('.menu-mobile');  //ищем объект с классом menu-mobile - меню для мобилы
    iconMenu.addEventListener("click", function(e) {    //по событию Нажатие добавляем объектам класс show
        iconMenu.classList.toggle('show')
        menuMobileBody.classList.toggle('show')
    })
}