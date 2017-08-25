import React from 'react';

import Toolbar from './toolbar.jsx';
import GraphViewport from './viewport.jsx';

export default class Grapher extends React.Component {

    render() {
        return (
            <div id="root">
                <Toolbar/>
                <GraphViewport/>
            </div>
        );
    }
}
