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

import React from 'react';
import PropTypes from 'prop-types';
import WPInput from '../../../components/Input/WPInput';
const { Option } = Select;
const { RangePicker } = DatePicker;
const inputStyle = { width: '100px', margin: '10px' };
const buttonStyle = { float: 'right', margin: '10px' };
const SearchBar = props => {
  const menu = props.inputUserID.map(item => {
    return (
      <Option
        value={item.id}
        onClick={() => props.handleChangeSelectUserID(item.id)}
      >
        {item.id}
      </Option>
    );
  });
  return (
    <div>
      <Descriptions title="상담고객" bordered>
        <Descriptions.Item label="행사구분" span={3}>
          <Radio.Group onChange={props.handleChangeEventClassification}>
            <Radio value="all" />
            전체
            <Radio value="marry" />
            예식
            <Radio value="event" />
            행사
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="조회기간" span={3}>
          <Radio.Group onChange={props.handleChangeDateClassification}>
            <Radio value="All" />
            등록일
            <Radio value="Marry" />
            행사일
          </Radio.Group>
          <RangePicker onChange={props.handleChangeRangeDate} />
        </Descriptions.Item>
        <Descriptions.Item label="고객경로" span={3}>
          <Radio.Group onChange={props.handleChangeContactPath}>
            <Radio value="All" />
            전체
            <Radio value="Tel" />
            전화
            <Radio value="InterNet" />
            인터넷
            <Radio value="acquaintance" />
            업체
            <Radio value="Working" />
            워킹
            <Radio value="company" />
            지인
            <Radio value="default" />
            기타
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="이름조회" span={1.5}>
          <Radio.Group onChange={props.handleChangeNameClassification}>
            <Radio value="All" />
            전체
            <Radio value="custmomer" />
            고객명
            <Radio value="event" />
            행사명
          </Radio.Group>
          <WPInput
            style={inputStyle}
            size="small"
            value={props.inputName}
            onChange={props.handleChangeName}
          />
        </Descriptions.Item>
        <Descriptions.Item label="담당자" span={2}>
          <Select defaultValue>{menu}</Select>
        </Descriptions.Item>
      </Descriptions>
      <Button style={buttonStyle} className="button" type="primary">
        전체 검색
      </Button>
      <Button style={buttonStyle} className="button" type="primary">
        검색
      </Button>
    </div>
  );
};

SearchBar.propTypes = {
  inputStartedDate: PropTypes.string.isRequired,
  inputEndDate: PropTypes.string.isRequired,
  inputEventClassification: PropTypes.string.isRequired,
  inputDateClassification: PropTypes.string.isRequired,
  inputContactPath: PropTypes.string.isRequired,
  inputNameClassification: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputUserID: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUserID: PropTypes.object.isRequired,
  handleChangeSelectUserID: PropTypes.func.isRequired,
  handleChangeEventClassification: PropTypes.func.isRequired,
  handleChangeDateClassification: PropTypes.func.isRequired,
  handleChangeRangeDate: PropTypes.func.isRequired,
  handleChangeContactPath: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNameClassification: PropTypes.func.isRequired,
  selectUserID: PropTypes.object.isRequired
};

export default SearchBar;
