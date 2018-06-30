import React, {Component} from 'react';

import './style.css';

class Title extends Component {
    render() {
        return <h2 className="welcome">{this.props.children}</h2>
    }
}

export default Title;
