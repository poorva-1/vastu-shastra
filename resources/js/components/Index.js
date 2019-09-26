import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Index extends Component {
    render() {
        return (
            <div>
          
            </div>
        );
    }
}
//Main file index id
if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
