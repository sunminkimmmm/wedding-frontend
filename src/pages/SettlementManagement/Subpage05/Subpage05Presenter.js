import React, { Component } from 'react';
import Subpage05Fillter from './Subpage05Fillter'
import Subpage05List from './Subpage05List'
class Subpage05Presenter extends Component {
    render() {
        return (
            <div>
                <h2>거래처발주정산</h2>
                <Subpage05Fillter />
                <br />
                <Subpage05List />
            </div>
        );
    }
}

export default Subpage05Presenter;