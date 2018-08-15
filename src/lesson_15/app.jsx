import * as React from 'react';
import {render} from 'react-dom';
import {Ajax} from "../lesson_15/utils/ajax";

class TaskList extends React.Component {
    constructor() {
        super();
        this.render();
        Ajax.get(
            'http://localhost:4001/list',
            (list) => {
                this.renderList(list);
            },
            (xhr) => {
                console.error(xhr.status);
            }
        );
    }

    sendData() {
        event.preventDefault();
        console.log('SUBMITTED');
        Ajax.post(
            'http://localhost:4001/list',
            {
                title: this.input.value
            },
            (resp) => {
                console.log(resp);
                this.renderListItem(resp);
            },
            (e) => {
                console.error(e);
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendData()}>
                    <input>Enter task...</input>
                </form>
                <ul>
                </ul>
            </div>
        )
    }

    renderListItem() {
        return <ul>
            <li></li>
        </ul>
        li.textContent = item.title;
    }

    renderList(list) {
        list.forEach((item) => {
            this.renderListItem(item);
        })
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <TaskList/>
            </div>
        )
    }
}

render(<App/>, document.querySelector('.test'));