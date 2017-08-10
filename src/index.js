import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {appRoute} from './router/router';
ReactDOM.render(
    <Router routes={appRoute}/>,
    document.getElementById('root'));