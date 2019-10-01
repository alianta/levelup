/* Каруселька */ 

const CarouselImgWidth = 948; // ширина одного изображения в карусели
const CarouselImgCount = 5; // количество изображений в карусели
const MaxImgWidth = -(CarouselImgWidth * CarouselImgCount) + CarouselImgWidth; //максимальнй сдвиг, после которого двигать не надо
const carousel = document.getElementById('carousel');
const list = carousel.querySelector('.images');

let position = 0; // текущий сдвиг влево

carousel.querySelector('.carousel-button-prev').onclick = function() {
    // сдвиг влево
    position = (position < 0)? (position + CarouselImgWidth):position;
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.carousel-button-next').onclick = function() {
    // сдвиг вправо
    position = (position > MaxImgWidth)? (position - CarouselImgWidth):position;
    list.style.marginLeft = position + 'px';
};