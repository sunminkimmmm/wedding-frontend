import React, { Component } from 'react';
import Subpage02Fillter from './Subpage02Fillter';
import Subpage02List from './Subpage02List'

class Subpage02Presenter extends Component {
    render() {
        return (
            <div>
                <h2>행사고객정산</h2>
                <Subpage02Fillter />
                <br />
                <Subpage02List {...this.props.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage02Presenter;