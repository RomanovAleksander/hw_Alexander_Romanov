// import '../../styles/header.components.scss';
import * as React from 'react';

export class Header extends React.Component {
    componentDidMount(){
        let btn = document.querySelector(".drop-down__btn");
        let item = document.querySelector(".drop-down");
        btn.addEventListener('click', ()=>{
            item.classList.toggle("drop-down_active")
        })
    }

    render() {
        return(
            <header className="page-header">
                <div className="page-aside__logo">
                    <span>IMDb</span>
                </div>
                <nav className="page-nav">
                    <ul className="page-nav__menu">
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Overview</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Biography</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Filmography</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Awards</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Photos</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Videos</span>
                            </a>
                        </li>
                        <li className="page-nav__item">
                            <a href="" className="page-nav__link">
                                <span className="page-nav__link-title">Message Boards</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="drop-down">
                    <button className="drop-down__btn"></button>
                    <div className="drop-down__content" id="myDropdown">
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Overview</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Biography</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Filmography</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Awards</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Photos</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Videos</span>
                        </a>
                        <a href="" className="page-nav__link">
                            <span className="page-nav__link-title">Message Boards</span>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}