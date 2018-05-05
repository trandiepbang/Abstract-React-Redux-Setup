import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './routes';
import { Provider } from 'react-redux';
import createRootStore from '@src/redux/store';

// import mapboxgl from 'mapbox-gl';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';

// mapboxgl.accessToken = 'undefined';
// const map = new mapboxgl.Map({
//     container: '<your HTML element id>',
//     style: 'mapbox://styles/mapbox/streets-v9'
// });
console.log(createRootStore);

ReactDOM.render(
    <Provider store={createRootStore()}>
        <AppRoute />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
