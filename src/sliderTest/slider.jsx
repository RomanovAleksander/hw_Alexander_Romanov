import * as React from 'react';
// import {render} from 'react-dom';
// import {Slide} from './slide.jsx'
// // import Dots from './dots'
// import '../../styles/slider.scss';
import {Ajax} from "../final_project/components/utils/ajax.js";
// import {SliderItem} from './slide.jsx'
let timer,
time;


export class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            slider: [],
            activeIndex: 1,
            left: 0,
            sliderWidth: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.clickIndicator = this.clickIndicator.bind(this);
        this.onElementWidthChange = this.onElementWidthChange.bind(this);
        this.autoSlider = this.autoSlider.bind(this);
    }

    componentDidMount() {
        this.onElementWidthChange();
        this.autoSlider();
        this.load();
    }

    onElementWidthChange() {
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const {width} = entry.contentRect;
                this.setState({
                    sliderWidth: width
                });
            }
        });

        ro.observe(document.querySelector('.page-slider'));
    }


    load() {
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/tomSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
    }

    nextSlide() {
            this.setState({
                activeIndex: this.state.activeIndex + 1,
                left: this.state.left - this.state.sliderWidth
            });
            if (this.state.activeIndex === this.state.slider.length + 1) {
                this.setState({
                    activeIndex: this.state.activeIndex - this.state.slider.length,
                    left: 0
                });
            }
            console.log(this.state.activeIndex);
            this.autoSlider();
    }

    clickIndicator(e) {
        this.setState({
            activeIndex: parseInt(e.target.textContent),
            left: this.state.sliderWidth - parseInt(e.target.textContent) * this.state.sliderWidth
        });
        clearInterval(timer);
        this.autoSlider();
    }

    autoSlider() {
        clearInterval(timer);
        timer = setInterval(() => {
            this.nextSlide();
        }, 3000);

    }

    // onElementWidthChange() {
    //         let Width = document.querySelector('.page-slider');
    //         let lastWidth = Width.clientWidth, newWidth;
    //         (function run() {
    //             newWidth = Width.clientWidth;
    //             if (lastWidth !== newWidth) {
    //                 lastWidth = newWidth;
    //             }
    //             if (Width.onElementWidthChangeTimer) {
    //                 clearTimeout(Width.onElementWidthChangeTimer);
    //             }
    //             Width.onElementWidthChangeTimer = setTimeout(run, 200);
    //         })();
    //         this.setState({
    //             sliderWidth: lastWidth
    //         });
    // }

    render() {
        let style = {
            left: this.state.left,
        };
        return (
            <div className="page-slider">
                <div className="page-slider__header">
                    <div className="page-slider__caption">Known for</div>
                    <div className="page-slider__dots">
                        {this.state.slider.map(function (item, index) {
                            return (
                                <div className={index + 1 === this.state.activeIndex ? 'active' : ''}
                                     onClick={this.clickIndicator}
                                     key={index}
                                >{index + 1}</div>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="page-slider__slides-container">
                    <div className="page-slider__inner" style={style}>
                        {this.state.slider.map(function (item) {
                            return (
                                <div className="page-slider__slide" key={item.id}>
                                    <div className="page-slider__slides">
                                        <img src={item.slideImg1}
                                             className="img"
                                             alt="img"
                                        />
                                        <div className="page-slider__info-block">
                                            <div className="page-slider__name">{item.slideName1}</div>
                                            <div className="page-slider__date">{item.slideDate1}</div>
                                        </div>
                                    </div>
                                    <div className="page-slider__slides">
                                        <img src={item.slideImg2}
                                             className="img"
                                             alt="img"
                                        />
                                        <div className="page-slider__info-block">
                                            <div className="page-slider__name">Inception</div>
                                            <div className="page-slider__date">2010 - Eames</div>
                                        </div>
                                    </div>
                                    <div className="page-slider__slides">
                                        <img src={item.slideImg3}
                                             className="img"
                                             alt="img"
                                        />
                                        <div className="page-slider__info-block">
                                            <div className="page-slider__name">The Dark Knight Rises</div>
                                            <div className="page-slider__date">2012 - Bane</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }, this)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

import ResizeObserver from 'resize-observer-polyfill';



// export class Slider extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             slider: []
//         };
//     }
//
//     componentDidMount(){
//         Ajax.get('http://localhost:4001/tomSlider',
//             (resp) => {
//                 this.setState({
//                     slider: resp
//                 });
//                 console.log(this.state.slider);
//             },
//             (e) => {
//                 console.log(e);
//             }
//         );
//     }
//
//     goToNextSlide() {
//         const banner = document.querySelector('.inner');
//         let a = 0;
//         let timer = setInterval(() => {
//             a -= 40;
//             if (a === -(40 * this.state.slider.length)) {
//                 a = 0;
//                 clearInterval(timer);
//                 this.goToNextSlide()
//             }
//             banner.style.transform = `translateX(${a}px)`
//         }, 3000);
//     };
//
//     render() {
//         const slider = [];
//         this.state.slider.forEach((item) => {
//             const div = <SliderItem
//                 key={item.id}
//                 img1={item.img1}
//                 name1={item.name1}
//                 date1={item.date1}
//             />;
//             slider.push(div);
//         });
//
//         return (
//             <div>
//                 {slider}
//             </div>
//         )
//     }
//
//
//
//
//     // slideWidth = () => document.querySelector('.slide').clientWidth
//
// }
