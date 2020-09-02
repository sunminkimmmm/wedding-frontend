import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions, Select } from 'antd';
import { WPInput, WPRadio } from '../../../components';
const { Option } = Select;
const contractClassification = [
  { values: 'hold' },
  { values: 'fakeContract' },
  { values: 'contract' },
  { values: 'cancle' },
  { values: 'complete' }
];
const dbPath = [
  { values: 'call' },
  { values: 'internet' },
  { values: 'working' },
  { values: 'default' },
  { values: 'client' }
];
const eventClassification = [
  { values: 'client' },
  { values: 'firstBirth' },
  { values: 'family' },
  { values: 'lent' }
];
class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      isUpdate: false,
      manager: [],
      contractorName: '',
      firstContact: '',
      secondContact: ''
    };
  }
  async componentDidMount() {
    const manager = await fetch('').then(res => res.json());
    this.setState({
      manager: manager
    });
  }

  render() {
    const item = this.props.manger.map((item, index) => {
      <Option key={index} value={item.id}>
        {item.name}
      </Option>;
    });
    return (
      <Descriptions title="고객정보>고객정보" bordered>
        <Descriptions.Item label="기본정보" span={3} />
        <Descriptions.Item label="계약일" span={2}>
          <WPInput />
        </Descriptions.Item>
        <Descriptions.Item label="담당자" span={2}>
          <Select>{item}</Select>
        </Descriptions.Item>
        <Descriptions.Item label="계약구분" span={3}>
          <WPRadio value="contract" values={contractClassification} />
        </Descriptions.Item>
        <Descriptions.Item label="DB경로" span={3}>
          <WPRadio value="DBPath" values={dbPath} />
        </Descriptions.Item>
        <Descriptions.Item label="행사유형" span={3}>
          <WPRadio value="eventClassification" values={eventClassification} />
        </Descriptions.Item>
        <Descriptions.Item label="행사명" span={2}>
          <WPInput
            value={this.state.eventName}
            onChange={e => {
              this.setState({
                eventName: e.target.value
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="계약자명" span={2}>
          <WPInput
            value={this.state.contractorName}
            onChange={e => {
              this.setState({
                contractorName: e.target.value
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="연락처" span={2}>
          <Select
            onChange={this.setState(e => {
              e.target.value;
            })}
          >
            <Option value="010">010</Option>
            <Option value="011">011</Option>
            <Option value="02">02</Option>
          </Select>
          <WPInput
            value={this.state.secondContractor}
            onChange={e => {
              this.setState({
                contractorName: e.target.value
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="휴대폰" span={2}>
          <Select
            onChange={e =>
              this.setState({
                firstMobile: e.target.value
              })
            }
          >
            <Option value="010">010</Option>
            <Option value="011">011</Option>
          </Select>
          <WPInput
            value={this.state.secondMobile}
            onChange={e => {
              this.setState({
                secondMobile: e.target.value
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="주소" span={3}>
          <WPInput
            value={this.state.address}
            onChange={e => this.setState({ adress: e.target.value })}
          />
          <WPInput
            value={this.state.adressDetail}
            onChange={e => this.setState({ adressDetail: e.target.value })}
          />
        </Descriptions.Item>
      </Descriptions>
    );
  }
}

EventDetail.propTypes = {};

export default EventDetail;
