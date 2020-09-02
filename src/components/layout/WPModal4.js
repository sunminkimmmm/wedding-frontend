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
const WPModal4 = props => {
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
          <Descriptions title="행사상담정보" bordered>
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
            <Descriptions.Item label="행사홀" span={1.5}>
              {props.data.hallName}
            </Descriptions.Item>
            <Descriptions.Item label="행사시간" span={1.5}>
              {props.data.startedDate}
            </Descriptions.Item>
            <Descriptions.Item label="행사유형" span={1.5}>
              {props.data.eventType}
            </Descriptions.Item>
            <Descriptions.Item label="행사명" span={1.5}>
              {props.data.eventName}
            </Descriptions.Item>
            <Descriptions.Item label="계약자명" span={1.5}>
              {props.data.eventName}
            </Descriptions.Item>
            <Descriptions.Item label="연락처" span={1.5}>
              {props.data.contactNumber}
            </Descriptions.Item>
            <Descriptions.Item label="휴대폰" span={1.5}>
              {props.data.mobile}
            </Descriptions.Item>
            <Descriptions.Item label="비고" span={3}>
              {props.data.memo}
            </Descriptions.Item>
          </Descriptions>
        </div>
        {/* {props.data.contractClassification} */}
      </Modal>
    </div>
  );
};

WPModal4.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal4;
