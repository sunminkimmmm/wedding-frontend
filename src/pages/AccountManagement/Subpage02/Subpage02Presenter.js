import React, { Component } from 'react';
import Subpage02List from './Subpage02List'
class Subpage02Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>웨딩컨설팅 업체</small></h3>
                <Subpage02List />
            </div>
        );
    }
}

export default Subpage02Presenter;