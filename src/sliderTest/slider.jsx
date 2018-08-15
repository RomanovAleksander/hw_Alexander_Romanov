import * as React from 'react';
// import {render} from 'react-dom';
// import {Slide} from './slide.jsx'
// // import Dots from './dots'
// import '../../styles/slider.scss';
 import {Ajax} from "../final_project/components/utils/ajax.js";
 import {SliderItem} from './slide.jsx'

export class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            slider: []
        };
    }

    componentDidMount(){
        Ajax.get('http://localhost:4001/tomSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
                console.log(this.state.slider);
            },
            (e) => {
                console.log(e);
            }
        );
    }

    goToNextSlide() {
        const banner = document.querySelector('.inner');
        let a = 0;
        let timer = setInterval(() => {
            a -= 40;
            if (a === -(40 * this.state.slider.length)) {
                a = 0;
                clearInterval(timer);
                this.goToNextSlide()
            }
            banner.style.transform = `translateX(${a}px)`
        }, 3000);
    };

    render() {
        const slider = [];
        this.state.slider.forEach((item) => {
            const div = <SliderItem
                key={item.id}
                img1={item.img1}
                name1={item.name1}
                date1={item.date1}
            />;
            slider.push(div);
        });

        return (
            <div>
                {slider}
            </div>
        )
    }




    // slideWidth = () => document.querySelector('.slide').clientWidth

}


