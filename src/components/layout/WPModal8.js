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
            <Descriptions title="식음료관리" bordered>
              <Descriptions.Item label="행사구분" span={3}>
                <Input className="input" name="eventClassification" onChange={(e) => props.handleChangeState(e)} value={props.data.eventClassification} />
              </Descriptions.Item>
              <Descriptions.Item label="품목분류" span={3}>
                <Input className="input" name="fnBClassifications_ID" onChange={(e) => props.handleChangeState(e)} value={props.data.itemClassifications_ID} />
              </Descriptions.Item>
              <Descriptions.Item label="식음료명" span={3}>
                <Input className="input" name="itemName" onChange={(e) => props.handleChangeState(e)} value={props.data.itemName} />
              </Descriptions.Item>
              <Descriptions.Item label="금액" span={3}>
                <Input className="input" name="price" onChange={(e) => props.handleChangeState(e)} value={props.data.price} />
              </Descriptions.Item>
              <Descriptions.Item label="비고" span={3}>
                <Input className="input" name="memo" onChange={(e) => props.handleChangeState(e)} value={props.data.memo} />
              </Descriptions.Item>
            </Descriptions>
          </div>
        ) : (
            <div>
              <Descriptions title="식음료관리" bordered>
                <Descriptions.Item label="행사구분" span={3}>
                  {props.data.eventClassification}
                </Descriptions.Item>
                <Descriptions.Item label="품목분류" span={3}>
                  {props.data.fnBClassifications_ID}
                </Descriptions.Item>
                <Descriptions.Item label="부대품목명" span={3}>
                  {props.data.itemName}
                </Descriptions.Item>
                <Descriptions.Item label="금액" span={3}>
                  {props.data.price}
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
