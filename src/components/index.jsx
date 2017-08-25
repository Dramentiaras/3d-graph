import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Grapher from './grapher.jsx';

//TODO: add socket events for store.

ReactDOM.render(<Grapher />, document.getElementById('main'));
