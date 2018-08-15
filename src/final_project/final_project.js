import './final_project.scss';
// import {Slider} from './components/sliderjs/slider.js'
import './components/page.jsx'
// import './sliderJS.js'

// function toggle() {
//     let item = document.querySelector('.page');
//     item.classList.toggle('page_active');
// }

// function togglePh() {
//     let item = document.querySelector('.page-content');
//     item.classList.toggle('active');
// }
//
// function toggleM() {
//     let item = document.querySelector('.drop-down');
//     item.classList.toggle('drop-down_active');
// }

// document.querySelector('.page-aside__switcher').addEventListener('click', toggle);
// document.querySelector('.page-gallery__btn').addEventListener('click', togglePh);
// document.querySelector('.drop-down__btn').addEventListener('click', toggleM);

let dotsContainer = document.querySelector('.page-slider__dots'),
    inner = document.querySelector('.page-slider__inner'),
    slides = inner.querySelectorAll('.page-slider__slide'),
    currentImageIndex = 0,
    Width = document.querySelector('.page-slider__slide'),
    width,
    dots = [],
    timer;

export class Slider {
    constructor() {
        this.slider();
        this.onElementWidthChange();
        this.switchImg();
        this.autoSlider();
    }

    slider() {
        for (let i = 0; i < slides.length; i++) {
            let b = document.createElement('span');
            b.classList.add('dot');
            dotsContainer.appendChild(b);
            dots.push(b);

            b.addEventListener('click', () => {
                currentImageIndex = i;
                clearInterval(timer);
                this.switchImg();
            });
        }
    }

    onElementWidthChange() {
        let lastWidth = Width.clientWidth, newWidth;
        (function run() {
            newWidth = Width.clientWidth;
            if (lastWidth !== newWidth)
                lastWidth = newWidth;
            width = lastWidth;

            if (Width.onElementHeightChangeTimer)
                clearTimeout(Width.onElementHeightChangeTimer);

            Width.onElementHeightChangeTimer = setTimeout(run, 200);
        })();
    }

    switchImg() {
        inner.style.left = -width * currentImageIndex + 'px';

        dots.forEach(function (b, i) {
            if (i === currentImageIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    autoSlider() {
        timer = setInterval(() => {
            currentImageIndex++;

            if (currentImageIndex >= slides.length) {
                currentImageIndex = 0;
            }

            this.switchImg();
        }, 8000);
    }
}
const slider = new Slider(document.querySelector('.page-slider'));


