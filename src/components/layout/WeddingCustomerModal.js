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

class WeddingCustomerModal extends Component {
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: false, visible: false });

    };

    handleCancel = () => {
        this.setState({ visible: false });
    };
    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Button style={{ right: 16 }} type="link" onClick={this.showModal}>
                    예식고객등록
        </Button>
                <Modal
                    style={{ top: 10 }}
                    visible={visible}
                    width='1400px'
                    title="예식고객등록"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
            </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
            </Button>,
                    ]}
                >
                    <div>
                        <Descriptions title="계약 고객 등록" bordered>
                            <Descriptions.Item label="계약일" span={1.5}>
                                {/* <DatePicker /> */}
                            </Descriptions.Item>
                            <Descriptions.Item label="담당자" span={1.5}>
                                <Select className="select" defaultValue="담당자선택" onChange={this.props.handleSelectManager}>
                                    <Option value="담당자" >담당자</Option>
                                    <Option value="홍길동" >홍길동</Option>
                                    <Option value="박재범" >박재범</Option>
                                </Select>
                            </Descriptions.Item>
                            <Descriptions.Item label="계약구분" span={3}>
                                <Radio.Group onChange={this.props.handleContactClassfication}>
                                    <Radio value="가계약">가계약</Radio>
                                    <Radio value="계약">계약</Radio>
                                    <Radio value="취소">취소</Radio>
                                    <Radio value="정산완료">정산완료</Radio>
                                </Radio.Group>
                            </Descriptions.Item>
                            <Descriptions.Item label="신랑명" span={1.5}>
                                <Input className="input" name="groomName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="신부명" span={1.5}>
                                <Input className="input" name="brideName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="부(父)명" span={1.5}>
                                <Input className="input" name="groomDadName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="부(父)명" span={1.5}>
                                <Input className="input" name="brideDadName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="모(母)명" span={1.5}>
                                <Input className="input" name="groomMomName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="모(母)명" span={1.5}>
                                <Input className="input" name="brideMomName" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="관계" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectGroomRelationship}  >
                                    <Option value="장남">장남</Option>
                                    <Option value="차남">차남</Option>
                                </Select>
                            </Descriptions.Item>
                            <Descriptions.Item label="관계" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectBrideRelationship} >
                                    <Option value="장녀">장녀</Option>
                                    <Option value="차녀">차녀</Option>
                                </Select>
                            </Descriptions.Item>
                            <Descriptions.Item label="신랑휴대폰" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectGroomPhone}>
                                    <Option value="051">051</Option>
                                </Select>&nbsp;&nbsp;
                                        <Input type="tel" pattern="[0-9]{4}-[0-9]{4}" name="groomPhone" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="신부휴대폰" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectBridePhone}>
                                    <Option value="051">051</Option>
                                </Select>
                                &nbsp;&nbsp;
                                    <Input type="tel" pattern="[0-9]{4}-[0-9]{4}" name="bridePhone" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="신랑이메일" span={1.5}>
                                <Input className="input2" type="email" name="groomEmail" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="신부이메일" span={1.5}>
                                <Input className="input2" type="email" name="brideEmail" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="행사정보" bordered>
                            <Descriptions.Item label="예식일" span={3}>
                                {/* <DatePicker /> */}
                            </Descriptions.Item>
                            <Descriptions.Item label="예식홀" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectHall}>
                                    <Option value="동서대홀">동서대홀</Option>
                                </Select>
                            </Descriptions.Item>
                            <Descriptions.Item label="예식시간" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectWeddingTime}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                </Select>
                                시
                                        <Select defaultValue="선택" onChange={this.props.handleSelectWeddingMinute}>
                                    <Option value="10">10</Option>
                                    <Option value="20">20</Option>
                                    <Option value="30">30</Option>
                                </Select>
                                분
                                    </Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="메뉴정보" bordered >
                            <Descriptions.Item label="메뉴명" span={1.5}>
                                <Select defaultValue="선택" onChange={this.props.handleSelectMenuKind}>
                                    <Option value="예식뷔페">예식뷔페</Option>
                                </Select>
                                단가:<Input className="input" name="menuPrice" onChange={this.props.handleInputChange} />원
                                </Descriptions.Item>
                            <Descriptions.Item label="대인금액" span={1.5}>
                                <Input className="input" name="oldPrice" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions title="행사정보" bordered>
                            <Descriptions.Item label="입금일" span={1.5}>
                                {/* <DatePicker /> */}
                            </Descriptions.Item>
                            <Descriptions.Item label="계정구분" span={1.5}>
                                <RadioGroup onChange={this.props.handleAccountClassfication}>
                                    <Radio value="계약금">계약금</Radio>
                                    <Radio value="중도금">중도금</Radio>
                                    <Radio value="잔금">잔금</Radio>
                                </RadioGroup>
                            </Descriptions.Item>
                            <Descriptions.Item label="결제구분" span={1.5}>
                                <RadioGroup onChange={this.props.handlePayClassfication}>
                                    <Radio value="카드">카드</Radio>
                                    <Radio value="현금">현금</Radio>
                                    <Radio value="계좌">계좌</Radio>
                                </RadioGroup>
                            </Descriptions.Item>
                            <Descriptions.Item label="금액" span={1.5}>
                                금액&nbsp;&nbsp;<Input className="input" name="price" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                            <Descriptions.Item label="입금메모" span={3}>
                                <Input name="memo" onChange={this.props.handleInputChange} />
                            </Descriptions.Item>
                        </Descriptions>
                    </div>

                </Modal>
            </div>
        );
    }
}

export default WeddingCustomerModal;

