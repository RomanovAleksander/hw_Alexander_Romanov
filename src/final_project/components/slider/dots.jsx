// import React from 'react'
// import Dot from './dot'

// const Dots = ({ index, slides, dotClick, visible }) => {
//     if(!visible) return null;
//
//     const dotsGroup = slides.map((slide, i) => {
//         let active = ( i === index) ? true : false;
//         return (
//             <Dot
//                 key={i}
//                 id={i}
//                 active={active}
//                 dotClick={dotClick}
//             />
//         )
//     });
//
//     return (
//         <div className="page-slider__dots">
//             { dotsGroup }
//         </div>
//     )
// };
//
// export default Dots