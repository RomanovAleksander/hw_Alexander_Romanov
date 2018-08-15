import * as React from 'react';

export class CommentBoxForm extends React.Component {
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    resetState() {
        this.setState({
            author: '',
            text: ''
        })
    }

    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetState();
    }

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.author = author;
            return newState;
        })
    }

    onTextChange(e) {
        const text = e.target.value;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.text = text;
            return newState;
        })
    }

    render() {
        return <form onSubmit={this.submit.bind(this)} className="comments-box__form">
            <input type="text"
                   value={this.state.author}
                   placeholder='name'
                   defaultValue=''
                   onInput={this.onAuthorChange.bind(this)}/>
            <textarea id="" cols="30" rows="10"
                      value={this.state.text}
                      placeholder='text'
                      defaultValue=''
                      onInput={this.onTextChange.bind(this)}> </textarea>
            <button>Add comment</button>
        </form>
    }
}