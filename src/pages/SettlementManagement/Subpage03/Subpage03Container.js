import React, { Component } from 'react';
import Subpage03Presenter from './Subpage03Presenter';

class Subpage03Container extends Component {
    render() {
        return (
            <div>
                <Subpage03Presenter {...this.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage03Container;