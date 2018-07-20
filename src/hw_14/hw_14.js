import './hw_14.scss';

import './components/accordion/accordion';

import {Accordion} from "./components/accordion/accordion";

const accordeon = new Accordion(document.querySelector('.content'), [
    {
        title: 'Section 1',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '                ex\n' +
        '                ea commodo consequat.'
    },
    {
        title: 'Section 2',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '                ex\n' +
        '                ea commodo consequat.'
    },
    {
        title: 'Section 3',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
        '                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '                ex\n' +
        '                ea commodo consequat.'
    }
]);