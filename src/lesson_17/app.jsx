import * as React from 'react';
import { render } from 'react-dom';
import { CommentsBox } from './components/commentsBox/commentsBox.component.jsx';
import './components/commentsBox/commentBox.component.scss';
class App extends React.Component {
    render() {
        return <CommentsBox />
    }
}

render(<App />, document.querySelector('#app'));
