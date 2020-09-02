import React, { Component } from 'react';
import Subpage03List from './Subpage03List'
import Subpage03Bar from './Subpage03Bar'
class Subpage03Presenter extends Component {
    render() {
        return (
            <div>
                <h3>메뉴관리</h3>
                <Subpage03Bar />
                <Subpage03List />

            </div>
        );
    }
}

export default Subpage03Presenter;