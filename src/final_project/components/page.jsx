// import '../styles/header.components.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Header} from './header.components/header.components.jsx'
import {PageContent} from './page-content.components/page-content.components.jsx';
import './gallery.components/gallery.components.jsx'
import './actor-info.components/actor-info.jsx'


function Page() {
    return (
        <div className="page">
            <Header />
            <PageContent />
        </div>
    )
}

render(<Page />, document.querySelector('#root'));