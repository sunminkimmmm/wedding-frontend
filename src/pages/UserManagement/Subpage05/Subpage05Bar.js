import React, { Component } from 'react';
import {
    Descriptions,
    Badge,
    Input,
    DatePicker,
    Menu,
    Radio,
    Select,
    Modal,
    Button
} from 'antd';
import RadioGroup from 'antd/lib/radio/group';
const { Option } = Select;
class Subpage05Bar extends Component {
    render() {
        const styles = {
            width: '200px',
            marginRight: '5px'
        }
        const styles2 = {
            float: 'right',
        }
        const styles3 = {
            marginRight: '5px',

        }
        const styles4 = {
            marginRight: '5px',
            float: 'right',
        }
        return (
            <div>
                <div style={styles2}>
                    <Select style={styles3} className="select" defaultValue="전체" onChange={this.props.handleSelectManager}>
                        <Option value="이름" >이름</Option>
                        <Option value="연락처" >연락처</Option>
                        <Option value="핸드폰" >핸드폰</Option>
                    </Select>
                    <Input style={styles} className="input" onChange={this.props.handleInputChange} />
                    <Button style={styles3} type="submit" type="primary">검색</Button>
                </div>
                <br /><br />
                <div>
                    <Descriptions title="" bordered>
                        <Descriptions.Item label="행사구분" span={1.5}>
                            <Radio.Group onChange={this.props.handleContactClassfication}>
                                <Radio value="예식">예식</Radio>
                                <Radio value="행사">행사</Radio>
                            </Radio.Group>
                        </Descriptions.Item>
                        <Descriptions.Item label="품목분류" span={1.5}>
                            <Input className="input" name="menuName" onChange={this.props.handleInputChange} />
                        </Descriptions.Item>
                        <Descriptions.Item label="식음료명" span={1.5}>
                            <Input className="input" name="olderPrice" onChange={this.props.handleInputChange} />
                        </Descriptions.Item>
                        <Descriptions.Item label="금액" span={1.5}>
                            <Input className="input" name="youngPrice" onChange={this.props.handleInputChange} />
                        </Descriptions.Item>
                        <Descriptions.Item label="비고" span={3}>
                            <Input className="input" name="etc" onChange={this.props.handleInputChange} />
                        </Descriptions.Item>

                    </Descriptions>
                    <br />
                    <Button style={styles2} type="submit" type="primary">등록</Button>
                    <Button style={styles4} type="submit" type="primary">취소</Button>
                </div>
            </div >
        );
    }
}

export default Subpage05Bar;