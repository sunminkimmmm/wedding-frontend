import React, { Component } from 'react';
import Subpage04List from './Subpage04List'
class Subpage04Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>>드레스 업체</small></h3>
                <Subpage04List />
            </div>
        );
    }
}

export default Subpage04Presenter;