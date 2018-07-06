import { Lighter } from './components/lighter/lighter';

const firstLighter = new Lighter(document.querySelector('#lighter1'));


class LighterManager {
    constructor(button, arrayOfLighters) {
        this.button = button;
        this.lighters = arrayOfLighters;
        this.button.addEventListener('click', () => {
            if ( this.lighters[0].isEnabled === true) {
                console.log('hello');
                this.lighters.forEach((light) => {
                        light.style.opacity = "0";
                    }
                );
            }
            console.log(this.lighters[0].isEnabled);
        })
    }
}

const u = new LighterManager(document.querySelector('button'), [firstLighter]);