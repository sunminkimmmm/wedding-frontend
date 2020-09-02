import {
    Descriptions,
    Input,
    DatePicker,
    Menu,
    Radio,
    Select,
    Button
} from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import React, { Component } from 'react';
import { WPDatePicker } from "../../../components";

const { Option } = Select;
class Subpage02Fillter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inquiryPeriod: "",
            nameInquiry: "",
        }
    }

    //조회기간
    inquiryPeriodHandler = (e) => {
        this.setState({
            inquiryPeriod: e.target.value// true
        })
        console.log(this.state.inquiryPeriod)
    }
    //이름조회
    nameInquiryHandler = (e) => {
        this.setState({
            nameInquiry: e.target.value// true
        })
        console.log(this.state.nameInquiry)
    }

    inputNumberHandler = (e) => {
        this.setState({
            inputNumber: e.target.value
        })

    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.contactDivision + ',' + this.state.inquiryPeriod + ',' +
            this.state.customerPath + ',' + this.state.eventType + ',' + this.state.nameInquiry + ',' + this.state.inputNumber);
        this.props.onCreate(this.state)

    }
    render() {
        return (
            <div>
                <Descriptions bordered>
                    <Descriptions.Item label="조회기간" span={3}>
                        <Radio.Group onChange={this.inquiryPeriodHandler}>
                            <Radio value="등록일" />
                            등록일
                            <Radio value="계약일" />
                            계약일
                            <Radio value="행사일" />
                            행사일
                            <WPDatePicker />~<WPDatePicker />
                        </Radio.Group>
                    </Descriptions.Item>
                    <Descriptions.Item label="이름조회" span={3}>
                        <Radio.Group onChange={this.nameInquiryHandler}>
                            <Radio value="전체" />
                            전체
                            <Radio value="행사명" />
                            행사명
                            <Radio value="고객명" />
                            고객명
                            <Radio value="연락처" />
                            연락처<input type="text" value={this.state.inputNumber} onChange={this.inputNumberHandler} placeholder="연락처" />
                        </Radio.Group>
                    </Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default Subpage02Fillter;