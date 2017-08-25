import React from 'react';

import startGrapher from '../grapher/main.js';

export default class GraphViewport extends React.Component {

    render() {
        return (<canvas id="webgl_canvas"></canvas>);
    }

    componentDidMount() {

        startGrapher('webgl_canvas');
    }
}
