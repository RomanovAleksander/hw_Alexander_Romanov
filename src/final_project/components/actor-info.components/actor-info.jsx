import * as React from 'react';
// import '../../styles/page-content.scss'
// import '../../styles/header.scss'
import {Ajax} from '../utils/ajax.js'
import {SliderRender} from '../slider/slider.jsx'
import {Gallery} from "../gallery.components/gallery.components.jsx";
import {ActorInfoItem} from './actor-infoItem.jsx';
import {ControlButton} from "../controlbutton.components.jsx/controlButton.components.jsx";
import {SliderStatic} from '../slider/sliderStatic.jsx'


export class Actor extends React.Component {
    constructor() {
        super();
        this.state = {
            actor: [],
            // slider: []
        };
    }

    componentDidMount() {
        this.load();
    }

    load() {
        Ajax.get(
            // 'http://5b744cf8a5837400141908e4.mockapi.io/actor',
            'http://5b744cf8a5837400141908e4.mockapi.io/tom',
            (resp) => {
                this.setState({
                    actor: resp
                });
                console.log(this.state.actor);
            },
            (e) => {
                console.log(e);
            }
        );
        // Ajax.get('http://localhost:4001/tomSlider',
        //     (resp) => {
        //         this.setState({
        //             slider: resp
        //         });
        //         console.log(this.state.slider);
        //     },
        //     (e) => {
        //         console.log(e);
        //     }
        // );
    }

    ChoseTom() {
        this.load();
        this.removeAllChose();
    }

    removeAllChose() {
        document.querySelector('.page').classList.remove('page_tom');
        document.querySelector('.page').classList.remove('page_emma');
        document.querySelector('.page').classList.remove('page_ryan');
        document.querySelector('.page').classList.remove('page_meryl');
    }

    ChoseEmma() {
        Ajax.get(
            // 'http://localhost:4001/emma',
            'http://5b744cf8a5837400141908e4.mockapi.io/emma',
            (resp) => {
                this.setState({
                    actor: resp
                });
                console.log(this.state.actor);
            },
            (e) => {
                console.log(e);
            }
        );
        this.removeAllChose();
        document.querySelector('.page').classList.add('page_emma');
    }

    ChoseRyan() {
        Ajax.get(
            // 'http://localhost:4001/ryan',
            'http://5b744cf8a5837400141908e4.mockapi.io/ryan',
            (resp) => {
                this.setState({
                    actor: resp
                });
                console.log(this.state.actor);
            },
            (e) => {
                console.log(e);
            }
        );
        this.removeAllChose();
        document.querySelector('.page').classList.add('page_ryan');
    }

    ChoseMeryl() {
        Ajax.get(
            // 'http://localhost:4001/meryl',
            'http://5b744cf8a5837400141908e4.mockapi.io/meryl',
            (resp) => {
                this.setState({
                    actor: resp
                });
                console.log(this.state.actor);
            },
            (e) => {
                console.log(e);
            }
        );
        this.removeAllChose();
        document.querySelector('.page').classList.add('page_meryl');
    }



    render() {
        const aboutActor = [];
        const imgActor = [];
        const sliderStatic = [];
        const controls = <ControlButton
            onChoseT={this.ChoseTom.bind(this)}
            onChoseE={this.ChoseEmma.bind(this)}
            onChoseR={this.ChoseRyan.bind(this)}
            onChoseM={this.ChoseMeryl.bind(this)}/>;

        this.state.actor.forEach((item) => {
            const div = <ActorInfoItem
                key={item.id}
                position={item.position}
                name={item.name}
                career={item.career}
                about={item.about}
                date={item.date}/>;

            aboutActor.push(div);
        });

        this.state.actor.forEach((item) => {
            const div = <SliderStatic
                key={item.id}
                slideImg1={item.slideImg1}
                slideName1={item.slideName1}
                slideDate1={item.slideDate1}
                slideImg2={item.slideImg2}
                slideName2={item.slideName2}
                slideDate2={item.slideDate2}
                slideImg3={item.slideImg3}
                slideName3={item.slideName3}
                slideDate3={item.slideDate3}
            />;

            sliderStatic.push(div);
        });

        this.state.actor.forEach((item) => {
            const div = <Gallery
                key={item.id}
                quantity={item.quantity}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                img4={item.img4}
                img5={item.img5}
                img6={item.img6}
                img7={item.img7}
                img8={item.img8}
                img9={item.img9}
            />;

            imgActor.push(div);
        });

        return (
            <div className="page-actor-info">
                {controls}
                {aboutActor}
                <SliderRender/>
                {sliderStatic}
                {imgActor}
            </div>
        )
    }
}

