import React, { Component } from 'react';
import Subpage03Bar from './Subpage03Bar';
import Subpage03List from './Subpage03List'

class Subpage03Presenter extends Component {
    render() {
        return (
            <div>
                <h2>리베이트 정산 <small>|업체리베이트현황을 월별, 분기별로 조회</small></h2>
                <Subpage03Bar />
                <br />
                <Subpage03List />
            </div>
        );
    }
}

export default Subpage03Presenter;