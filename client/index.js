import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let params = new URLSearchParams(window.location.search);
let roomID = params.get("roomID")
if (roomID === null) {
  roomID = 0;
};

ReactDOM.render(<App roomID={roomID}/>, document.getElementById('root'));