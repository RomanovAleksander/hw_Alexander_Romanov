import {Lighter} from './components/lighter/lighter';
import {Bulb} from './components/bulb/bulb';
import {Garland} from './components/garland/garland';

const firstLighter = new Lighter(document.querySelector('#lighter1'));

const bulb = new Bulb(document.querySelector('#bulb1'));
const bulb2 = new Bulb(document.querySelector('#bulb2'));
const garland = new Garland(document.querySelector('#garland1'),
    [
        new Bulb(document.querySelector('#bulb3')),
        new Bulb(document.querySelector('#bulb4'))
    ]
);


















// class LighterManager {
//     constructor(button, arrayOfLighters) {
//         this.button = button;
//         this.lighters = arrayOfLighters;
//         this.button.addEventListener('click', () => {
//             if ( this.lighters[0].isEnabled === true) {
//                 console.log('hello');
//                 this.lighters.forEach((light) => {
//                         light.style.opacity = "0";
//                     }
//                 );
//             }
//             console.log(this.lighters[0].isEnabled);
//         })
//     }
// }
//
// const u = new LighterManager(document.querySelector('button'), [firstLighter]);