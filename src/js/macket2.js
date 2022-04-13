import * as bootstrap from 'bootstrap';

$('.mycustom-scroll').mCustomScrollbar({
    axis: 'y',              // вертикальный скролл 
    //theme: 'rounded-dark',  // тема 
    scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
    setHeight: '163px',      // высота блока (переписывает CSS) 
    mouseWheel: {
        deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
    }
});