// import '../../styles/slider.scss';

// let dotsContainer = document.querySelector('.page-slider__dots'),
//     inner = document.querySelector('.page-slider__inner'),
//     imgs = inner.querySelectorAll('.page-slider__slide'),
//     currentImageIndex = 0,
//     Width = document.querySelector('.page-slider__slide'),
//     width,
//     dots = [],
//     timer;
//
// export class Slider {
//     constructor() {
//         this.slider();
//         this.onElementWidthChange();
//         this.switchImg();
//         this.autoSlider();
//     }
//
//     slider() {
//         for (let i = 0; i < imgs.length; i++) {
//             let b = document.createElement('span');
//             b.classList.add('dot');
//             dotsContainer.appendChild(b);
//             dots.push(b);
//
//             b.addEventListener('click', () => {
//                 currentImageIndex = i;
//                 clearInterval(timer);
//                 this.switchImg();
//             });
//         }
//     }
//
//     onElementWidthChange() {
//         let lastWidth = Width.clientWidth, newWidth;
//         (function run() {
//             newWidth = Width.clientWidth;
//             if (lastWidth !== newWidth)
//                 lastWidth = newWidth;
//             width = lastWidth;
//
//             if (Width.onElementHeightChangeTimer)
//                 clearTimeout(Width.onElementWidthChangeTimer);
//
//             Width.onElementWidthChangeTimer = setTimeout(run, 200);
//         })();
//     }
//
//     switchImg() {
//         inner.style.left = -width * currentImageIndex + 'px';
//
//         dots.forEach(function (b, i) {
//             if (i === currentImageIndex) {
//                 b.classList.add('active');
//             } else {
//                 b.classList.remove('active');
//             }
//         });
//     }
//
//     autoSlider() {
//         timer = setInterval(() => {
//             currentImageIndex++;
//
//             if (currentImageIndex >= imgs.length) {
//                 currentImageIndex = 0;
//             }
//
//             this.switchImg();
//         }, 8000);
//     }
//
//     render() {
//         this.header = document.createElement('div');
//         this.caption = document.createElement('div');
//         this.dots = document.createElement('div');
//         this.caption = document.createElement('div');
//         this.slidesContainer = document.createElement('div');
//         this.inner = document.createElement('div');
//         this.slide = document.createElement('div');
//         this.slidesContainer = document.createElement('div');
//     }
// }




















//
// const carousels = document.getElementsByClassName('page-slider');
//
// [].forEach.call(carousels, function(c) {
//     let dotsContainer = c.getElementsByClassName('page-slider__dots')[0],
//         inner = c.getElementsByClassName('page-slider__inner')[0],
//         imgs = inner.getElementsByClassName('page-slider__slide'),
//         currentImageIndex = 0,
//         Width = document.querySelector('.page-slider__slide'),
//         // oldWidth = document.querySelector('.page-slider__slide').clientWidth,
//         width,
//         dots = [],
//         timer;
//
//     function onElementHeightChange(elm, callback){
//         let lastWidth = elm.clientWidth, newWidth;
//         (function run(){
//             newWidth = elm.clientWidth;
//             if( lastWidth !== newWidth )
//                 callback();
//             lastWidth = newWidth;
//             width = lastWidth;
//
//             if( elm.onElementHeightChangeTimer )
//                 clearTimeout(elm.onElementHeightChangeTimer);
//
//             elm.onElementHeightChangeTimer = setTimeout(run, 200);
//         })();
//     }
//
//     onElementHeightChange(Width, function(){
//         console.log('Slider width change')
//     });
//
//     // window.onresize = function changeWidth() {
//     //     let newWidth = document.querySelector('.page-slider__slide').clientWidth;
//     //     if (newWidth !== oldWidth) {
//     //         callback();
//     //         oldWidth = newWidth;
//     //     }
//     //
//     // };
//
//     // Width.addEventListener('onresize', function(){
//     //     let newWidth = document.querySelector('.page-slider__slide').offsetWidth;
//     //     if (newWidth !== oldWidth) {
//     //         oldWidth = newWidth;
//     //     }
//     // });
//
//
//
//     for (let i = 0; i < imgs.length; i++) {
//         let b = document.createElement('span');
//         b.classList.add('dot');
//         dotsContainer.appendChild(b);
//         dots.push(b);
//
//         b.addEventListener('click', function() {
//             currentImageIndex = i;
//             clearInterval(timer);
//             switchImg();
//         });
//     }
//
//     function switchImg() {
//         inner.style.left = -width * currentImageIndex + 'px';
//
//         dots.forEach(function(b, i) {
//             if (i === currentImageIndex) {
//                 b.classList.add('active');
//             } else {
//                 b.classList.remove('active');
//             }
//         });
//     }
//
//     function showNext() {
//         currentImageIndex++;
//
//         if (currentImageIndex >= imgs.length) {
//             currentImageIndex = 0;
//         }
//
//         switchImg();
//     }
//
//     function autoSlider() {
//             timer = setInterval(showNext, 80000);
//     }
//
//     switchImg();
//     autoSlider();
// });