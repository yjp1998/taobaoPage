import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pc from './Pc/Pc';
import Mobile from './Mobile/Mobile'
import * as serviceWorker from './serviceWorker';
import './assets/fonts/iconfont.css'

ReactDOM.render(
  <React.StrictMode>
    <Pc />
    <Mobile />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
