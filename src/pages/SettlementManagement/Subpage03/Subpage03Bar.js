import { Button } from 'antd';
import React, { Component } from 'react';
import { WPDatePicker } from "../../../components";
class Subpage03Bar extends Component {
    render() {
        return (
            <div>
                조회기간 : <WPDatePicker />~<WPDatePicker />
                <Button className="button" onClick={this.submitHandler} type="primary">
                    검색
                </Button>
            </div>
        );
    }
}

export default Subpage03Bar;