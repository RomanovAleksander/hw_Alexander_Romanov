import * as React from 'react';
// import '../../styles/page-gallery.scss';

export class Gallery extends React.Component {
    componentDidMount() {
        let btn = document.querySelector(".page-gallery__btn");
        let item = document.querySelector(".page-content");
        btn.addEventListener('click', () => {
            item.classList.toggle("page-content_active")
        })
    }

    render() {
        return (
            <div className="page-gallery">
                <div className="page-gallery__header">
                    <div className="page-gallery__caption">
                        <div className="page-gallery__name">Photos</div>
                        <div className="page-gallery__number">{this.props.quantity}</div>
                    </div>
                    <button className="page-gallery__btn"></button>
                </div>
                <div className="page-gallery__photos">
                    < img
                        src={this.props.img1}
                        alt="img"/>
                    < img
                        src={this.props.img2}
                        alt="img"/>
                    < img
                        src={this.props.img3}
                        alt="img"/>
                    < img
                        src={this.props.img4}
                        alt="img"/>
                    < img
                        src={this.props.img5}
                        alt="img"/>
                    < img
                        src={this.props.img6}
                        alt="img"/>
                    < img
                        src={this.props.img7}
                        alt="img"/>
                    < img
                        src={this.props.img8}
                        alt="img"/>
                    < img
                        src={this.props.img9}
                        alt="img"/>
                </div>
            </div>
        )
    }
}