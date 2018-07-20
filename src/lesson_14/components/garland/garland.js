import {Bulb} from '../bulb/bulb';
import './garland.scss';

export class Garland {
    constructor(targetEl) {
        this.targetEl = targetEl;
        this.bulbs = [];
        this.render();
    }

    render() {
        this.output = document.createElement('div');
        this.output.classList.add('garland__output');

        this.targetEl.appendChild(this.output);
        this.targetEl.classList.add('garland');
        this.renderControls();
    }

    renderControls() {
        this.controlAdd = document.createElement('button');
        this.controleSwitchOnAll = document.createElement('button');
        this.controleSwitchOffAll = document.createElement('button');

        this.controlAdd.classList.add('garland__control');
        this.controleSwitchOnAll.classList.add('garland__control');
        this.controleSwitchOffAll.classList.add('garland__control');

        this.controlAdd.textContent = 'Add';
        this.controleSwitchOnAll.textContent = 'Toggle On';
        this.controleSwitchOffAll.textContent = 'Toggle Off';

        this.controlAdd.addEventListener('click', () => this.add());
        this.controleSwitchOnAll.addEventListener('click', () => this.toggleOn());
        this.controleSwitchOffAll.addEventListener('click', () => this.toggleOff());

        this.targetEl.appendChild(this.controlAdd);
        this.targetEl.appendChild(this.controleSwitchOnAll);
        this.targetEl.appendChild(this.controleSwitchOffAll);
    }

    add() {
        const bulbContainer = document.createElement('div');
        const bulb = new Bulb(bulbContainer);

        this.bulbs.push(bulb);
        this.output.appendChild(bulbContainer);
    }

    toggleOn() {
        this.bulbs.forEach((bulb) => {
            bulb.switchOn();
        });
    }

    toggleOff() {
        this.bulbs.forEach((bulb) => {
            bulb.switchOff();
        });
    }
}