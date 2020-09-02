import {
  Descriptions,
  Input,
  DatePicker,
  Menu,
  Radio,
  Select,
  Button
} from 'antd';

import React from 'react';
import PropTypes from 'prop-types';
import WPInput from '../../../components/Input/WPInput';
const { Option } = Select;
const { RangePicker } = DatePicker;
const inputStyle = { width: '100px', margin: '10px' };
const buttonStyle = { float: 'right', margin: '10px' };
const SearchBar = props => {
  return (
    <>
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
      </Descriptions>
      <Button style={buttonStyle} className="button" type="primary">
        전체 검색
      </Button>
      <Button style={buttonStyle} className="button" type="primary">
        검색
      </Button>
    </>
  );
};

SearchBar.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChangeDateClassification: PropTypes.func.isRequired,
  handleChangeNameClassfication: PropTypes.func.isRequired,
  handleChangeRangeDate: PropTypes.func.isRequired,
  handleChangeInputName: PropTypes.func.isRequired
};

export default SearchBar;
