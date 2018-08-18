import * as React from 'react';
import {Ajax} from '../utils/ajax.js'
import {ActorInfoItem} from './actor-infoItem.jsx';
import {ControlButton} from "../controlbuttons.components/controlButton.components.jsx";
import {SliderStatic} from '../slider/sliderStatic.jsx'
import ResizeObserver from 'resize-observer-polyfill';

let timer;

export class Actor extends React.Component {
    constructor() {
        super();
        this.state = {
            actor: [],
            actorImgs: [],
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
        this.load();
        let btn = document.querySelector(".page-gallery__btn");
        let item = document.querySelector(".page-content");
        btn.addEventListener('click', () => {
            item.classList.toggle("page-content_active")
        });
        this.onElementWidthChange();
        this.autoSlider();
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
        Ajax.get(
            // 'http://localhost:4001/tom',
            'http://5b744cf8a5837400141908e4.mockapi.io/tom',
            (resp) => {
                this.setState({
                    actor: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/tomImgs',
            (resp) => {
                this.setState({
                    actorImgs: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/tomSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
                console.log(this.state);
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
        }, 8000);

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
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/emmaImgs',
            (resp) => {
                this.setState({
                    actorImgs: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/emmaSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
                console.log(this.state);
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
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/ryanImgs',
            (resp) => {
                this.setState({
                    actorImgs: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/ryanSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
                console.log(this.state);
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
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/merylImgs',
            (resp) => {
                this.setState({
                    actorImgs: resp
                });
            },
            (e) => {
                console.log(e);
            }
        );
        Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/merylSlider',
            (resp) => {
                this.setState({
                    slider: resp
                });
                console.log(this.state);
            },
            (e) => {
                console.log(e);
            }
        );
        this.removeAllChose();
        document.querySelector('.page').classList.add('page_meryl');
    }

    render() {
        let style = {
            left: this.state.left,
        };
        const aboutActor = [];
        // const imgActor = [];
        // const sliderStatic = [];
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

        // this.state.actor.forEach((item) => {
        //     const div = <SliderStatic
        //         key={item.id}
        //         slideImg1={item.slideImg1}
        //         slideName1={item.slideName1}
        //         slideDate1={item.slideDate1}
        //         slideImg2={item.slideImg2}
        //         slideName2={item.slideName2}
        //         slideDate2={item.slideDate2}
        //         slideImg3={item.slideImg3}
        //         slideName3={item.slideName3}
        //         slideDate3={item.slideDate3}
        //     />;
        //
        //     sliderStatic.push(div);
        // });

        // this.state.actor.forEach((item) => {
        //     const div = <Gallery
        //         key={item.id}
        //         quantity={item.quantity}
        //         img1={item.img1}
        //         img2={item.img2}
        //         img3={item.img3}
        //         img4={item.img4}
        //         img5={item.img5}
        //         img6={item.img6}
        //         img7={item.img7}
        //         img8={item.img8}
        //         img9={item.img9}
        //     />;
        //
        //     imgActor.push(div);
        // });

        return (
            <div className="page-actor-info">
                {controls}
                {aboutActor}
                {/*<SliderRender/>*/}
                {/*{sliderStatic}*/}
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
                                            <img src={item.img1}
                                                 className="img"
                                                 alt="img"
                                            />
                                            <div className="page-slider__info-block">
                                                <div className="page-slider__name">{item.name1}</div>
                                                <div className="page-slider__date">{item.date1}</div>
                                            </div>
                                        </div>
                                        <div className="page-slider__slides">
                                            <img src={item.img2}
                                                 className="img"
                                                 alt="img"
                                            />
                                            <div className="page-slider__info-block">
                                                <div className="page-slider__name">{item.name2}</div>
                                                <div className="page-slider__date">{item.date2}</div>
                                            </div>
                                        </div>
                                        <div className="page-slider__slides">
                                            <img src={item.img3}
                                                 className="img"
                                                 alt="img"
                                            />
                                            <div className="page-slider__info-block">
                                                <div className="page-slider__name">{item.name3}</div>
                                                <div className="page-slider__date">{item.date3}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }, this)
                            }
                        </div>
                    </div>
                </div>
                <div className="page-gallery">
                    <div className="page-gallery__header">
                        <div className="page-gallery__caption">
                            <div className="page-gallery__name">Photos</div>
                            <div className="page-gallery__number"> • {this.state.actorImgs.length}</div>
                        </div>
                        <button className="page-gallery__btn"></button>
                    </div>
                    <div className="page-gallery__photos">
                        {this.state.actorImgs.map((index) => {
                            return <img src={index.img} alt="img" key={index.id}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

