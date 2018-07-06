import './lamps.scss';

const LAMP_CLASS_NAME = 'lamps__lamp';
const LAMP_ACTIVE_CLASS_NAME = 'lamps__lamp_active';

class Lamps {
    constructor(targetElement) {
        this.targetElement = targetElement;
        this.lamps = this.targetElement.querySelectorAll('.' + LAMP_CLASS_NAME);
        console.log(this);
        this.isEnabled = false;
        this.attachEvents();
    }

    switchOffLamp() {
        this.lamps.forEach((lamp) => {
                lamp.classList.remove(LAMP_ACTIVE_CLASS_NAME);
                this.isEnabled = false;
            }
        );
    }

    switchOnAllLamp() {
        this.lamps.forEach((lamp) => {
                lamp.classList.add(LAMP_ACTIVE_CLASS_NAME);
                this.isEnabled = true;
            }
        );
    }

    switchOnLamp(element) {
        console.log('ENABLED');
        element.classList.toggle(LAMP_ACTIVE_CLASS_NAME);
        this.isEnabled = true;
    }

    attachEvents() {
        this.lamps.forEach(lamp => {
            lamp.addEventListener('click', () => {
                this.switchOnLamp(lamp);
            });
        });
    }
}

export {Lamps}
//
// const BUTTON_CLASS_NAME = 'lamps__item__btn';
// const BUTTON_ACTIVE_CLASS_NAME = 'lamps__item__btn_active';
// const documento = document.querySelector('.lamps__lamp');
//
//
// class LampsBtn {
//     constructor(target) {
//         this.target = target;
//         this.buttons = this.target.querySelectorAll('.' + BUTTON_CLASS_NAME);
//         console.log(this);
//         this.isEnabled = false;
//         this.attachEventsBtn();
//     }
//
//     switchOffBtn() {
//         this.buttons.forEach((btn) => {
//                 btn.classList.remove(BUTTON_ACTIVE_CLASS_NAME);
//                 documento.classList.remove(LAMP_ACTIVE_CLASS_NAME);
//                 this.isEnabled = false;
//             }
//         );
//     }
//
//     switchOnAllBtn() {
//         this.buttons.forEach((btn) => {
//                 btn.classList.add(BUTTON_ACTIVE_CLASS_NAME);
//                 documento.classList.add(LAMP_ACTIVE_CLASS_NAME);
//                 this.isEnabled = true;
//             }
//         );
//     }
//
//     switchOnBtn(element) {
//         console.log('ENABLED');
//         element.classList.toggle(BUTTON_ACTIVE_CLASS_NAME);
//
//         // this.lamps.classList.toggle(LAMP_ACTIVE_CLASS_NAME);
//         this.isEnabled = true;
//     }
//
//     // switchOnLamp(element) {
//     //     console.log('ENABLED');
//     //     element.classList.toggle(LAMP_ACTIVE_CLASS_NAME);
//     //     this.isEnabled = true;
//     // }
//
//     attachEventsBtn() {
//         this.buttons.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 this.switchOnBtn(btn);
//             });
//         });
//     }
// }
//
// export {LampsBtn}