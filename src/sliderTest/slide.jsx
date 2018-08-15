import * as React from 'react';

// export class DotItem extends React.Component {
//     ChoseTom() {
//         this.props.onChoseT();
//     }
//     render() {
//         const names = this.props.active ? 'dot active' : 'dot';
//         return <div className={names} onClick={() => dotClick({this.ChoseTom.bind(this)})}/>
//     }
// }
//
// export class Dots extends React.Component {
//     render() {
//         if(!visible) return null;
//
//         const dotsGroup = this.props.map((image, i) => {
//             let active = (i === this.props.index) ? true : false
//             return (
//                 <DotItem
//                     key={i}
//                     id={i}
//                     active={active}
//                     dotClick={dotClick}
//                 />
//             )
//         });
//
//         return (
//             <div className="dots-container">
//                 { dotsGroup }
//             </div>
//         )
//     }
// }

export class SliderItem extends React.Component {
    render() {
        return (
            <div className="page-slider" id={this.props.id}>
                <div className="page-slider__header">
                    <div className="page-slider__caption">Known for</div>
                    <div className="page-slider__dots"></div>
                </div>
                <div className="page-slider__slides-container">
                    <div className="page-slider__inner">
                        <div className="page-slider__slide">
                            <div className="page-slider__slides">
                                <img src={this.props.img1} alt="img"
                                     className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">{this.props.name1}</div>
                                    <div className="page-slider__date">{this.props.date1}</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src={this.props.img2}
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">{this.props.name2}</div>
                                    <div className="page-slider__date">{this.props.date2}</div>
                                </div>
                            </div>
                            <div className="page-slider__slides">
                                <img
                                    src={this.props.img3}
                                    alt="img" className="img"/>
                                <div className="page-slider__info-block">
                                    <div className="page-slider__name">{this.props.name3}</div>
                                    <div className="page-slider__date">{this.props.date3}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


