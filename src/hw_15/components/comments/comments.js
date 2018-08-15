import './comments.scss';
import {Ajax} from "../utilits/ajax";

const COMMENT_GENERAL_CLASS = 'item';
const COMMENT_BTN_CLASS = `${COMMENT_GENERAL_CLASS}__comment`;
const COMMENT_TEXT_CLASS = `${COMMENT_GENERAL_CLASS}__text`;
const COMMENT_ACTIVE_CLASS = `${COMMENT_GENERAL_CLASS}_active`;
const TEXT = `text`;
const DATE = 'date';

export class Comment {
    constructor(targetElement) {
        this.targetEl = targetElement;
        this.itemArray = [];
        Ajax.get(
            'http://localhost:4001/comments',
            (obj) => {
                this.renderList(obj);
                this.toggle();
            },
            (xhr) => {
                console.error(xhr.status);
            }
        );
        // Ajax.post(
        //     'http://localhost:4001/list',
        //     {
        //         author: 'HELLO WORLD'
        //     },
        //     (resp) => {
        //         console.log(resp);
        //     },
        //     (e) => {
        //         console.error(e);
        //     }
        // )
    }

    render() {
        this.item = document.createElement('div');
        this.titleElement = document.createElement('button');
        this.listElement = document.createElement('div');
        this.text = document.createElement('p');
        this.data = document.createElement('p');

        this.item.classList.add(COMMENT_GENERAL_CLASS);
        this.titleElement.classList.add(COMMENT_BTN_CLASS);
        this.listElement.classList.add(COMMENT_TEXT_CLASS);
        this.text.classList.add(TEXT);
        this.data.classList.add(DATE);

        this.item.appendChild(this.titleElement);
        this.item.appendChild(this.listElement);
        this.listElement.appendChild(this.text);
        this.listElement.appendChild(this.data);

        this.itemArray.push(this.item);
    }

    renderList(obj) {
        obj.forEach((item) => {
            this.render();
            this.targetEl.appendChild(this.item);
            this.titleElement.textContent = item.author;
            this.text.textContent = item.text;
            this.data.textContent = item.data;
        });
    }

    toggle() {
        this.itemArray.forEach(item => {
            item.addEventListener('click', () => {
                    item.classList.toggle(COMMENT_ACTIVE_CLASS);
                }
            )
        });
    }
}
