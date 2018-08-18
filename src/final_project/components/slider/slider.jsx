import * as React from 'react';

export class SliderRender extends React.Component {
    render() {
        return (
            <div className="page-slider">
                <div className="page-slider__header">
                    <div className="page-slider__caption">Known for</div>
                    <div className="page-slider__dots"></div>
                </div>
                <div className="page-slider__slides-container">
                    <div className="page-slider__inner">
                        <div className="page-slider__slide">
                            <div className="page-slider__slides">
                                <img src="https://i.ytimg.com/vi/ggfq7VQmt5I/maxresdefault.jpg" alt="img"
                                     className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Mad Max: Furry Road</div>
                                    <div className="page-slider__date">2015 - Max Rockatansky</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://vignette.wikia.nocookie.net/inception/images/0/0e/Eames.png/revision/latest?cb=20100710031646"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Inception</div>
                                    <div className="page-slider__date">2010 - Eames</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://www.walldevil.com/wallpapers/w03/936876-bane-batman-batman-the-dark-knight-rises-men-movies-snow-tom-hardy.jpg"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">The Dark Knight Rises</div>
                                    <div className="page-slider__date">2012 - Bane</div>
                                </div>
                            </div>
                        </div>
                        <div className="page-slider__slide">
                            <div className="page-slider__slides">
                                <img
                                    src="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5adeab3e758d468e9c390729/1524542278081/tom-hardy-transforms-into-venom-in-a-substantially-better-new-trailer-for-venom-social.jpg?format=2500w"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Venom</div>
                                    <div className="page-slider__date">2018 - Eddie Brock</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://images5.alphacoders.com/806/thumb-1920-806399.jpg"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Legend</div>
                                    <div className="page-slider__date">2015 - Eames</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://www.sbs.com.au/guide/sites/sbs.com.au.guide/files/styles/full/public/tom_hardy.jpg?itok=3uzXn7Y2"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Taboo</div>
                                    <div className="page-slider__date">2017 - James Delaney</div>
                                </div>
                            </div>
                        </div>
                        <div className="page-slider__slide">
                            <div className="page-slider__slides">
                                <img
                                    src="https://i.ytimg.com/vi/w_3Ehh9jw1A/maxresdefault.jpg"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Warrior</div>
                                    <div className="page-slider__date">2011 - Tom Conlon</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://images.askmen.com/720x540/entertainment/galleries/tom-hardy-s-best-characters/3-tuck-this-means-war-1441734039.jpg"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">This means war</div>
                                    <div className="page-slider__date">2012 - Tuck Hansen</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src="https://new.static.tv.nu/18176711?width=720&height=405"
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">Child 44</div>
                                    <div className="page-slider__date">2015 - Leo Demidov</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


//
// // Data for carousel
// const carouselSlidesData = [
//     {
//         content:
//             "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
//         author: "Bane",
//         source: "facebook"
//     }, {
//         content:
//             "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
//         author: "Ra's Al Ghul",
//         source: "Snapchat"
//     }, {
//         content:
//             "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
//         author: "Joker",
//         source: "facebook"
//     }, {
//         content:
//             "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
//         author: "Bruce Wayne",
//         source: "facebook"
//     }
// ];
//
// class CarouselIndicator extends React.Component {
//     render() {
//         return (
//             <li>
//                 <a
//                     className={
//                         this.props.index === this.props.activeIndex
//                             ? "carousel__indicator carousel__indicator--active"
//                             : "carousel__indicator"
//                     }
//                     onClick={this.props.onClick}
//                 />
//             </li>
//         );
//     }
// }
//
// class CarouselSlide extends React.Component {
//     render() {
//         return (
//             <li
//                 className={
//                     this.props.index === this.props.activeIndex
//                         ? "carousel__slide carousel__slide--active"
//                         : "carousel__slide"
//                 }
//             >
//                 <p className="carousel-slide__content">{this.props.content}</p>
//
//                 <p>
//                     <strong className="carousel-slide__author">
//                         {this.props.author}
//                     </strong>,
//                     {" "}
//                     <small className="carousel-slide__source">
//                         {this.props.source}
//                     </small>
//                 </p>
//             </li>
//         );
//     }
// }
//
// // Carousel wrapper component
// class Carousel extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.goToSlide = this.goToSlide.bind(this);
//         this.goToPrevSlide = this.goToPrevSlide.bind(this);
//         this.goToNextSlide = this.goToNextSlide.bind(this);
//
//         this.state = {
//             activeIndex: 0
//         };
//     }
//
//     goToSlide(index) {
//         this.setState({
//             activeIndex: index
//         });
//     }
//
//     goToPrevSlide(e) {
//         e.preventDefault();
//
//         let index = this.state.activeIndex;
//         let { slides } = this.props;
//         let slidesLength = slides.length;
//
//         if (index < 1) {
//             index = slidesLength;
//         }
//
//         --index;
//
//         this.setState({
//             activeIndex: index
//         });
//     }
//
//     goToNextSlide(e) {
//         e.preventDefault();
//
//         let index = this.state.activeIndex;
//         let { slides } = this.props;
//         let slidesLength = slides.length - 1;
//
//         if (index === slidesLength) {
//             index = -1;
//         }
//
//         ++index;
//
//         this.setState({
//             activeIndex: index
//         });
//     }
//
//     render() {
//         return (
//             <div className="carousel">
//                 <CarouselSlide
//                     key={index}
//                     index={index}
//                     activeIndex={this.state.activeIndex}
//
//                 />
//                 )}
//                 <ul className="carousel__indicators">
//                     {this.props.slides.map((slide, index) =>
//                         <CarouselIndicator
//                             key={index}
//                             index={index}
//                             activeIndex={this.state.activeIndex}
//                             isActive={this.state.activeIndex===index}
//                             onClick={(e) => this.goToSlide(index)}
//                         />
//                     )}
//                 </ul>
//             </div>
//         );
//     }
// }
//
//
// render(<Carousel slides={carouselSlidesData} />, document.querySelector('.help'));
//
//
//
// //
// // // let dotsContainer = document.querySelector('.page-slider__dots'),
// // //     inner = document.querySelector('.page-slider__inner'),
// // //     imgs = document.querySelectorAll('.page-slider__slide'),
// // //     currentImageIndex = 0,
// // //     Width = document.querySelector('.page-slider__slide'),
// // //     width,
// // //     dots = [],
// // //     timer;
// //
// // class Slider extends React.Component {
// //     constructor() {
// //         super();
// //     }
//
// // slider() {
// //     for (let i = 0; i < imgs.length; i++) {
// //         let b = document.createElement('span');
// //         b.classList.add('dot');
// //         dotsContainer.appendChild(b);
// //         dots.push(b);
// //
// //         b.addEventListener('click', ()=> {
// //             currentImageIndex = i;
// //             clearInterval(timer);
// //             this.switchImg();
// //         });
// //     }
// // }
// //
// // onElementHeightChange() {
// //     let lastWidth = Width.clientWidth, newWidth;
// //     (function run() {
// //         newWidth = Width.clientWidth;
// //         if (lastWidth !== newWidth)
// //             lastWidth = newWidth;
// //         width = lastWidth;
// //
// //         if (Width.onElementHeightChangeTimer)
// //             clearTimeout(Width.onElementHeightChangeTimer);
// //
// //         Width.onElementHeightChangeTimer = setTimeout(run, 200);
// //     })();
// // }
// //
// // switchImg() {
// //     inner.style.left = -width * currentImageIndex + 'px';
// //
// //     dots.forEach(function (b, i) {
// //         if (i === currentImageIndex) {
// //             b.classList.add('active');
// //         } else {
// //             b.classList.remove('active');
// //         }
// //     });
// // }
// //
// // autoSlider() {
// //     timer = setInterval(() => {
// //         currentImageIndex++;
// //
// //         if (currentImageIndex >= imgs.length) {
// //             currentImageIndex = 0;
// //         }
// //
// //         this.switchImg();
// //     }, 5000);
// // }
// //
// // sliderDidMount() {
// //     this.onElementHeightChange();
// //     this.switchImg();
// //     this.autoSlider();
// // }

