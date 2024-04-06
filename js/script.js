// let texts = ['text1', 'текст2', 'ТЕКСТ3'];

// let slider = document.querySelector('#slider');
// const left = document.querySelector('#left');
// const right = document.querySelector('#right');

// slider.textContent = texts[0];
// let i = 0;

// right.addEventListener('click', (e) => {
//     e.preventDefault();
//     i++;

//     if (i == texts.length) {
//         i = 0;
//     }
//     slider.textContent = texts[i]
// })

// left.addEventListener('click', (e) => {
//     e.preventDefault();
//     i--;
//     if (i < 0) {
//         i = texts.length - 1;
//     }
//     slider.textContent = texts[i]
// })

/*слайдер картинок*/

let imgSrc = ['img/Donatello_2003.jpg', 'img/Leonard.jpg', 'img/Michelangelo.jpg', 'img/Raphael_2003.jpg'];

// получить ссылки на элементы
const leftControl = document.querySelector('#left');
const rightControl = document.querySelector('#right');
const image = document.querySelector('#image');
const indicators = document.querySelector('#indicators')

// объявить переменные

// индикатор
let indicator

// перебираем массив картинок и создаем такоеже количество индикаторов
imgSrc.forEach(() => {
    indicator = document.createElement('li')
    indicators.appendChild(indicator)
    indicator.classList.add('slider__indicator')
})

// for (let i of imgSrc) {
//     indicator = document.createElement('li')
//     indicators.appendChild(indicator)
//     indicator.classList.add('slider__indicator')
// }

// получить индикаторы созданные динамически
let indicatorList = document.querySelectorAll('.slider__indicator')

// выделить или сделать активным первый индикатор
indicatorList[0].classList.add('active');

// функция подсветки активного индикатора
function addActiveIndicator(index) {
    for (const indicator of indicatorList) {
        indicator.classList.remove('active')
    }
    indicatorList[index].classList.add('active');
}

//  i - текущая картинка
let i = 0;

// изначально отображать первую картинку из списка
image.src = imgSrc[i]

// следующее изображение
rightControl.addEventListener('click', (e) => {
    e.preventDefault;
    i++;

    if (i == imgSrc.length) {
        i = 0;
    }
    image.src = imgSrc[i]
    addActiveIndicator(i)
})


leftControl.addEventListener('click', (e) => {
    e.preventDefault;
    i--;

    if (i < 0) {
        i = imgSrc.length - 1;
    }
    image.src = imgSrc[i]
    addActiveIndicator(i)
})

