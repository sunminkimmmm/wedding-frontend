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
const { Option } = Select;
const WPModal9 = props => {
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
            <Descriptions title="예식/행사홀 관리" bordered>
              <Descriptions.Item label="순서" span={3}>
                <Input className="input" name="order" onChange={(e) => props.handleChangeState(e)} value={props.data.order} />
              </Descriptions.Item>
              <Descriptions.Item label="구분" span={3}>
                <Radio.Group onChange={(e) => props.handleChangeState(e)} value={props.data.hallClassification} name="hallClassification" >
                  <Radio value="동시홀">동시홀</Radio>
                  <Radio value="예식홀">예식홀</Radio>
                  <Radio value="행사홀">행사홀</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="홀명" span={3}>
                <Input className="input" name="hallName" onChange={(e) => props.handleChangeState(e)} value={props.data.hallName} />
              </Descriptions.Item>

            </Descriptions>
          </div>
        ) : (
            <div>
              <Descriptions title="예식/행사홀 관리" bordered>
                <Descriptions.Item label="순서" span={3}>
                  {props.data.order}
                </Descriptions.Item>
                <Descriptions.Item label="구분" span={3}>
                  {props.data.hallClassification}
                </Descriptions.Item>
                <Descriptions.Item label="홀명" span={3}>
                  {props.data.hallName}
                </Descriptions.Item>
              </Descriptions>
            </div>)}
        <Button onClick={props.updateUser} style={{ marginLeft: '1041px', marginTop: '10px' }}>수정</Button>
        <Button onClick={deleteClick} style={{ marginLeft: '1041px', marginTop: '10px' }}>삭제</Button>
      </Modal>
    </div >
  );
};

WPModal9.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal9;
