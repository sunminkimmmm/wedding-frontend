import React, { Component } from 'react';
import { WPDatePicker, WPMonthPicker, WPPeriodDatePicker, WPPeriodMonthPicker } from "../../../components";
import Subpage04List from './Subpage04List'
class Subpage04Presenter extends Component {
    render() {
        return (
            <div>
                <h2>거래처발주내역 <small>|거래처 발주내역을 월별 조회</small></h2>
                <br />
                <WPMonthPicker />
                <br /><br />
                <Subpage04List />
            </div>
        );
    }
}

export default Subpage04Presenter;