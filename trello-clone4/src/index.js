import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store';


const store = configureStore();
window.store = store;
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
