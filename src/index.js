import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount:12},
    {id: 2, message: 'Its my first post', likesCount:20},

]
let dialogsData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Vitaliy"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Danil"}
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Bro? how are you"},
    {id: 3, message: "what's app?"},
    {id: 4, message: "Yo"},
    {id: 5, message: "You must see that!"}
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
