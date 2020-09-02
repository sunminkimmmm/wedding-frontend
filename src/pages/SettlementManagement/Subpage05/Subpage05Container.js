import React, { Component } from 'react';
import Subpage05Presenter from './Subpage05Presenter';

class Subpage05Container extends Component {
    render() {
        return (
            <div>
                <Subpage05Presenter {...this.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage05Container;