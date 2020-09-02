import React, { Component } from 'react';
import Subpage04Presenter from './Subpage04Presenter';

class Subpage04Container extends Component {
    render() {
        return (
            <div>
                <Subpage04Presenter {...this.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage04Container;