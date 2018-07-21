import './hw_15.scss';
import './components/comments/comments';

import { Comment } from "./components/comments/comments";

const comments = new Comment(document.querySelector('.content'));
//     , [
//     {
//         author: 'Jack Jones',
//         text:'Hello world, I am a dummy comment',
//         date:'2018-07-21T18:41:11.113Z',
//     },
//     {
//         author: 'John Smith',
//         text:'Hello world, I am a dummy comment!!',
//         date:'2018-07-21T18:41:11.113Z',
//     }
// ]);