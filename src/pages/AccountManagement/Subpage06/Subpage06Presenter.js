import React, { Component } from 'react';
import Subpage06List from './Subpage06List'
class Subpage06Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>>기타 업체</small></h3>
                <Subpage06List />
            </div>
        );
    }
}

export default Subpage06Presenter;