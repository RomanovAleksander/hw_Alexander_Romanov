// import * as React from 'react';
// import {Ajax} from "../utils/ajax";
//
// import '../../styles/page-gallery.scss';
//
// export class Gallery extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             actorImgs: []
//         };
//     }
//
//     load() {
//         Ajax.get('http://5b744cf8a5837400141908e4.mockapi.io/tomImgs',
//             (resp) => {
//                 this.setState({
//                     actorImgs: resp
//                 });
//                 console.log(this.state.actorImgs);
//             },
//             (e) => {
//                 console.log(e);
//             }
//         );
//     }
//
//     componentDidMount() {
//         let btn = document.querySelector(".page-gallery__btn");
//         let item = document.querySelector(".page-content");
//         btn.addEventListener('click', () => {
//             item.classList.toggle("page-content_active")
//         });
//         this.load();
//     }
//
//     render() {
//         return (
//             <div className="page-gallery">
//                 <div className="page-gallery__header">
//                     <div className="page-gallery__caption">
//                         <div className="page-gallery__name">Photos</div>
//                         <div className="page-gallery__number"> • {this.state.actorImgs.length}</div>
//                     </div>
//                     <button className="page-gallery__btn"></button>
//                 </div>
//                 <div className="page-gallery__photos">
//                     {this.state.actorImgs.map((index) => {
//                         return <img src={index.img} alt="img" key={index.id}/>
//                     })}
//                 </div>
//             </div>
//         )
//     }
//
//     render() {
//         return (
//             <div className="page-gallery">
//                 <div className="page-gallery__header">
//                     <div className="page-gallery__caption">
//                         <div className="page-gallery__name">Photos</div>
//                         <div className="page-gallery__number">{this.props.quantity}</div>
//                     </div>
//                     <button className="page-gallery__btn"></button>
//                 </div>
//                 <div className="page-gallery__photos">
//
//                     < img
//                         src={this.props.img1}
//                         alt="img"/>
//                     < img
//                         src={this.props.img2}
//                         alt="img"/>
//                     < img
//                         src={this.props.img3}
//                         alt="img"/>
//                     < img
//                         src={this.props.img4}
//                         alt="img"/>
//                     < img
//                         src={this.props.img5}
//                         alt="img"/>
//                     < img
//                         src={this.props.img6}
//                         alt="img"/>
//                     < img
//                         src={this.props.img7}
//                         alt="img"/>
//                     < img
//                         src={this.props.img8}
//                         alt="img"/>
//                     < img
//                         src={this.props.img9}
//                         alt="img"/>
//                 </div>
//             </div>
//         )
//     }
// }