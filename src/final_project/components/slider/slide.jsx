import React from 'react'
import '../../styles/slider.scss'

export class Slide extends React.Component {
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
