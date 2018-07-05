import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';


class Title extends Component<Props> {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    };

    render() {
        return <h2 className="welcome">{this.props.children}</h2>
    }
}

export default Title;
