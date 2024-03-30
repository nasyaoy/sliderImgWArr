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

let images = ['img/Leonard.jpg', 'img/Donatello_2003.jpg', 'img/Raphael_2003.jpg', 'img/Michelangelo.jpg']

let slider2 = document.querySelector('#slider2');
let img = slider.querySelectorAll('#img');
const right2 = document.querySelector('#right2');
const left2 = document.querySelector('#left2');

img.src = images[0];
let i = 0;

right2.addEventListener('click', (e) => {
    e.preventDefault();
    i++;

    if (i == images.length) {
        i = 0;
    }
    img.src = images[i];
})

left2.addEventListener('click', (e) => {
    e.preventDefault();
    i--;
    if (i < 0) {
        i = texts.length - 1;
    }
    slider.textContent = texts[i]
})