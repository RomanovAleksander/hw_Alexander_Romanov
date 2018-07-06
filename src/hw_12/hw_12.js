import { Lamps } from './components/lamps/lamps.js';
// import { LampsBtn } from './components/lamps/lamps.js';

const firstLamps = new Lamps(document.querySelector('#lamps1'));
// const firstButtons = new LampsBtn(document.querySelector('#lamps1'));

class LampsManager {
    constructor(button, arrayOfLamps) {
        this.button = button;
        this.lampsArr = arrayOfLamps;
        this.button.addEventListener('click', () => {
            if ( this.lampsArr[0].isEnabled === true) {
                this.lampsArr[0].switchOffLamp();
            }
            else {
                this.lampsArr[0].switchOnAllLamp();
            }
            console.log(this.lampsArr[0].isEnabled);
        });
    }
}

const u = new LampsManager(document.querySelector('#toggle_all'), [firstLamps]);
// const f = new LampsManager(document.querySelector('#toggle_all'), [firstButtons]);