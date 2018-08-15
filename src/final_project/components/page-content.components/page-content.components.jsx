// import '../../styles/page-content.scss';
import * as React from 'react';
import {Actor} from "../actor-info.components/actor-info.jsx";
import {Ajax} from "../utils/ajax";

function PageAside() {
    return (
        <div className="page-aside">
            <div className="page-aside__search-block">
                <div className="page-aside__search">
                    <input type="text" placeholder="Search" className="page-aside__search-input"/>
                        <button className="page-aside__search-btn">
                            <span className="icon">
                                {/*<svg version="1.1" id="GLYPHS" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="44px" viewBox="0 0 16 44" style="enable-background:new 0 0 16 44;" xml:space="preserve">*/}
                                    {/*<g id="Search">*/}
                                    {/*<g>*/}
                                    {/*<rect style="fill:none;" width="16" height="44"></rect>*/}
                                    {/*</g>*/}
                                    {/*<g>*/}
                                    {/*<path d="M6.5,26.58c-3.35,0-6.08-2.73-6.08-6.08s2.73-6.08,6.08-6.08s6.08,2.73,6.08,6.08*/}
                                    {/*S9.85,26.58,6.5,26.58z M6.5,15.58c-2.72,0-4.92,2.21-4.92,4.92s2.21,4.92,4.92,4.92s4.92-2.21,4.92-4.92S9.22,15.58,6.5,15.58z"></path>*/}
                                    {/*</g>*/}
                                    {/*<g>*/}
                                    {/*<rect x="12.18" y="23.57" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -15.1807 16.8505)" style="fill:#6b6b6b;" width="1.15" height="6.36"></rect>*/}
                                    {/*</g>*/}
                                    {/*</g>*/}
                                {/*</svg>*/}
                            </span>
                        </button>
                </div>
            </div>
            <div className="page-aside__interval"></div>
            <div className="page-aside__menu-block">
                <ul className="page-aside__menu">
                    <li className="page-aside__item">
                        <a href="" className="page-aside__link">
                            <span className="page-aside__link-title">Movies, TV &amp; Showtimes</span>
                        </a>
                    </li>
                    <li className="page-aside__item">
                        <a href="" className="page-aside__link">
                            <span className="page-aside__link-title">Celebs, Events &amp; Photos</span>
                        </a>
                    </li>
                    <li className="page-aside__item">
                        <a href="" className="page-aside__link">
                            <span className="page-aside__link-title">News &amp; Community</span>
                        </a>
                    </li>
                    <li className="page-aside__item">
                        <a href="" className="page-aside__link">
                            <span className="page-aside__link-title">Watchlist</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="page-aside__interval"></div>
            <div className="page-aside__account-block">
                <div className="page-aside__account-block-header">
                    <a href="">My Account</a>
                </div>
                <ul className="page-aside__sign-in">
                    <li>
                        <a href="">Sign in with Facebook</a>
                    </li>
                    <li>
                        <a href="">Other sign in options</a>
                    </li>
                    <li>
                        <a href="">Create a new account</a>
                    </li>
                </ul>
            </div>
            <div className="page-aside__switch-block">
                <div className="page-aside__switch-logo">
                    <span>IMDb</span><span>PRO</span>
                </div>
                <button className="page-aside__switcher"></button>
            </div>
            <div className="page-aside__useful-links-block">
                <ul className="page-aside__useful-links">
                    <li>
                        <a href="">IMDb on Facebook</a>
                    </li>
                    <li>
                        <a href="">IMDb on Twitter</a>
                    </li>
                    <li>
                        <a href="">IMDb on Instagram</a>
                    </li>
                    <li>
                        <a href="">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export class PageContent extends React.Component {
    componentDidMount(){
        let btn = document.querySelector(".page-aside__switcher");
        let item = document.querySelector(".page");
        btn.addEventListener('click', ()=>{
            item.classList.toggle("page_active");
        })
    }

    render() {
        return (
            <div className="page-content">
                <PageAside/>
                <Actor />
            </div>
        )
    }
}