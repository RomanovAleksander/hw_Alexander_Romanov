// import '../styles/header.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Header} from './header/header.components.jsx'
import {PageContent} from './page-content/page-content.components.jsx';
import './gallery/gallery.components.jsx'
import './actor-info/actor-info.jsx'


function Page() {
    return (
        <div className="page">
            <Header />
            <PageContent />
        </div>
    )
}

render(<Page />, document.querySelector('#root'));