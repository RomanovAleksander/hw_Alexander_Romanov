import * as React from 'react';
// import '../../styles/control-button.scss'

export class ControlButton extends React.Component {
    componentDidMount() {
        let btn = document.querySelector(".control-block__switcher");
        let item = document.querySelector(".control-block");
        btn.addEventListener('click', ()=>{
            item.classList.toggle("control-block_active")
        })
    }

    ChoseTom() {
        this.props.onChoseT();
    }

    ChoseEmma() {
        this.props.onChoseE();
    }

    ChoseRyan() {
        this.props.onChoseR();
    }

    ChoseMeryl() {
        this.props.onChoseM();
    }

    render() {
        return (
            <div className="control-block">
                <div className="control-block__controls">
                    <button className="control-block__btn" onClick={this.ChoseTom.bind(this)}>Tom Hardy</button>
                    <button className="control-block__btn" onClick={this.ChoseEmma.bind(this)}>Emma Stone</button>
                    <button className="control-block__btn" onClick={this.ChoseRyan.bind(this)}>Ryan Gosling</button>
                    <button className="control-block__btn" onClick={this.ChoseMeryl.bind(this)}>Meryl Streep</button>
                </div>
                <button className="control-block__switcher"></button>
            </div>
        )
    }
}