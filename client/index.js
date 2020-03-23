import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let params = new URLSearchParams(window.location.search);
let roomId = params.get("roomId")
if (roomId === null) {
  roomId = 0;
};

ReactDOM.render(<App roomIs={roomId}/>, document.getElementById('recommendations'));