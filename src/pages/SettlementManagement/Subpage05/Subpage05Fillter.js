import {
    Descriptions,
    Input,
    DatePicker,
    Menu,
    Radio,
    Select,
    Button
} from 'antd';
import { WPDatePicker } from "../../../components";
import React, { Component } from 'react';

class Subpage05Fillter extends Component {
    render() {
        return (
            <div>
                <Descriptions bordered>
                    <Descriptions.Item label="조회기간" span={3}>
                        <WPDatePicker />~<WPDatePicker />
                        <Button className="button" onClick={this.submitHandler} type="primary">
                            검색
                        </Button>&nbsp;
                        <Button className="button" onClick={this.submitHandler} type="primary">
                            전체보기
                        </Button>
                    </Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Subpage05Fillter;