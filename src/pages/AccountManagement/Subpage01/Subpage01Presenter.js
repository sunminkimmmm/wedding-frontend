import React, { Component } from 'react';
import Subpage01List from './Subpage01List';
class Subpage01Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>>전체 거래업체</small></h3>
                <Subpage01List />
            </div>
        );
    }
}

export default Subpage01Presenter;