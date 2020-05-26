import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LineBasic from './ApexChart/LineBasic';
import Datetime_X_Axis from './ApexChart/Datetime_X-Axis'
import Brush_Chart from './ApexChart/Brush_Chart'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Brush_Chart /> */}
    <LineBasic />
    {/* <Datetime_X_Axis /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
