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
const WPModal6 = props => {
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

  const deleteClick = () => {
    props.deleteUser();
    props.onChange(!isOpen)
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

      >
        {(props.toggle === true) ? (
          <div>
            <Descriptions title="메뉴관리" bordered>
              <Descriptions.Item label="행사구분" span={3}>
                <Input className="input" name="eventClassification" onChange={(e) => props.handleChangeState(e)} value={props.data.eventClassification} />
              </Descriptions.Item>
              <Descriptions.Item label="메뉴명" span={3}>
                <Input className="input" name="menuName" onChange={(e) => props.handleChangeState(e)} value={props.data.menuName} />
              </Descriptions.Item>
              <Descriptions.Item label="대인금액" span={3}>
                <Input className="input" name="adultCharge" onChange={(e) => props.handleChangeState(e)} value={props.data.adultCharge} />
              </Descriptions.Item>
              <Descriptions.Item label="소인금액" span={3}>
                <Input className="input" name="childCharge" onChange={(e) => props.handleChangeState(e)} value={props.data.childCharge} />
              </Descriptions.Item>
              <Descriptions.Item label="비고" span={3}>
                <Input className="input" name="memo" onChange={(e) => props.handleChangeState(e)} value={props.data.memo} />
              </Descriptions.Item>
            </Descriptions>
          </div>
        ) : (
            <div>
              <Descriptions title="메뉴관리" bordered>
                <Descriptions.Item label="행사구분" span={3}>
                  {props.data.eventClassification}
                </Descriptions.Item>
                <Descriptions.Item label="메뉴명" span={3}>
                  {props.data.menuName}
                </Descriptions.Item>
                <Descriptions.Item label="대인금액" span={3}>
                  {props.data.adultCharge}
                </Descriptions.Item>
                <Descriptions.Item label="소인금액" span={3}>
                  {props.data.childCharge}
                </Descriptions.Item>
                <Descriptions.Item label="비고" span={3}>
                  {props.data.memo}
                </Descriptions.Item>
              </Descriptions>
            </div>)}

        <Button onClick={props.updateUser} style={{ marginLeft: '1041px', marginTop: '10px' }}>수정</Button>
        <Button onClick={deleteClick} style={{ marginLeft: '1041px', marginTop: '10px' }}>삭제</Button>

      </Modal>
    </div >
  );
};

WPModal6.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal6;
