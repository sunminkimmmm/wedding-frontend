import React from "react";
import { Modal } from "antd";
import {
  Descriptions,
  Badge,
  Input,
  DatePicker,
  Menu,
  Radio,
  Select,

  Button
} from 'antd';
const WPModal3 = props => {
  const { isOpen, title } = props;


  const toggleOnChange = () => {
    if (props.onChange) props.onChange(!isOpen);
  };

  //
  const onOk = () => {
    if (props.onOk) props.onOk();
    else toggleOnChange();
  };

  //
  const onCancel = () => {
    if (props.onCancel) props.onCancel();
    else toggleOnChange();
  };

  const clicks = () => {

  }
  return (
    <div>
      <Modal
        title={title}
        width={props.width}
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        style={{ top: 20 }}
        onClick={clicks}
      >
        <div>
          <Descriptions title="예식상담정보" bordered>
            <Descriptions.Item label="담당자" span={3}>
              {props.data.userName}
            </Descriptions.Item>
            <Descriptions.Item label="DB경로" span={3}>
              {props.data.contactPath}
            </Descriptions.Item>
            <Descriptions.Item label="행사구분" span={3}>
              {props.data.eventClassification}
            </Descriptions.Item>
            <Descriptions.Item label="행사일" span={1.5}>
              {props.data.startedDate}
            </Descriptions.Item>
            <Descriptions.Item label="예식홀" span={1.5}>
              {props.data.hallName}
            </Descriptions.Item>
            <Descriptions.Item label="예식시간" span={1.5}>
              {props.data.startedDate}
            </Descriptions.Item>
            <Descriptions.Item label="신랑명" span={1.5}>
              {props.data.groomName}
            </Descriptions.Item>
            <Descriptions.Item label="신랑휴대폰" span={1.5}>
              {props.data.mobileOfGroom}
            </Descriptions.Item>
            <Descriptions.Item label="신부명" span={1.5}>
              {props.data.brideName}
            </Descriptions.Item>
            <Descriptions.Item label="신부휴대폰" span={1.5}>
              {props.data.mobileOfGroom}
            </Descriptions.Item>
            <Descriptions.Item label="신부휴대폰" span={1.5}>
              {props.data.mobileOfBride}
            </Descriptions.Item>
            <Descriptions.Item label="비고" span={1.5}>
              {props.data.memo}
            </Descriptions.Item>
          </Descriptions>
        </div>
        {/* {props.data.contractClassification} */}
      </Modal>
    </div>
  );
};

WPModal3.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal3;
