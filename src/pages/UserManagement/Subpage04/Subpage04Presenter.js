import React, { Component } from 'react';
import Subpage04List from './Subpage04List'
import Subpage04Bar from './Subpage04Bar'
class Subpage04Presenter extends Component {
    render() {
        return (
            <div>
                <h3>부대품목관리</h3>
                <Subpage04Bar />
                <Subpage04List />
            </div>
        );
    }
}

export default Subpage04Presenter;