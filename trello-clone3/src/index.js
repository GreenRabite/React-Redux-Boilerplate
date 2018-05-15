import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';

let preloadedState = undefined;
const store = configureStore(preloadedState);
window.store = store;
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
