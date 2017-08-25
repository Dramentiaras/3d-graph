import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores/app.js';

//TODO: add socket events for store.

ReactDOM.render(<Provider store={store} /><Grapher /></Provider>, document.getElementById('main'));
