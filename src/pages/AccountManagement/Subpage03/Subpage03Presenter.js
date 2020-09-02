import React, { Component } from 'react';
import Subpage03List from './Subpage03List'
class Subpage03Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>>스튜디오 업체</small></h3>
                <Subpage03List />
            </div>
        );
    }
}

export default Subpage03Presenter;