import * as React from 'react';

export class SliderStatic extends React.Component {
    render() {
        return (
            <div className="page-slider-static" key={this.props.id}>
                <div className="page-slider-static__header">
                    <div className="page-slider-static__caption">Known for</div>
                    <div className="page-slider__dots"></div>
                </div>
                <div className="page-slider-static__slides-container">
                    <div className="page-slider-static__slide">
                        <div className="page-slider-static__slides">
                            <img src={this.props.slideImg1} alt="img"
                                 className="img"/>
                            <div className="page-slider-static__info-block">
                                <div className="page-slider-static__name">{this.props.slideName1}</div>
                                <div className="page-slider-static__date">{this.props.slideDate1}</div>
                            </div>
                        </div>
                        <div className="page-slider-static__slides">
                            <img
                                src={this.props.slideImg2}
                                alt="img" className="img"/>
                            <div className="page-slider-static__info-block">
                                <div className="page-slider-static__name">{this.props.slideName2}</div>
                                <div className="page-slider-static__date">{this.props.slideDate2}</div>
                            </div>
                        </div>
                        <div className="page-slider-static__slides">
                            <img
                                src={this.props.slideImg3}
                                alt="img" className="img"/>
                            <div className="page-slider-static__info-block">
                                <div className="page-slider-static__name">{this.props.slideName3}</div>
                                <div className="page-slider-static__date">{this.props.slideDate3}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}