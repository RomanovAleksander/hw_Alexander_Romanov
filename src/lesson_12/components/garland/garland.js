import './garland.scss';

export class Garland {
    constructor(targetEl, bulbs) {
        this.targetEl = targetEl;
        this.bulbs = bulbs;
        this.control = targetEl.querySelector('.garland__control');
        this.control.addEventListener('click', () => this.toggleAll());
    }


    toggleAll() {
        const enabled = this.bulbs.filter((bulb) => {
            return bulb.isEnabled === true;
        });

        console.log(enabled);
        if (enabled.length > 0) {
            this.bulbs.forEach((bulb) => {
                bulb.switchOff();
            });
        }
        else {
            this.bulbs.forEach((bulb) => {
                bulb.switchOn();
            })
        }
    }
}