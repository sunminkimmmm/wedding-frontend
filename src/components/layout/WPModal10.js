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
const WPModal10 = props => {
  const { isOpen, title } = props;


  const toggleOnChange = () => {
    if (props.onChange) props.onChange(!isOpen);
  };

  //
  const onOk = () => {
    if (props.onOk) { props.onOk(); }
    else { props.RegisterTime(); } props.onChange(!isOpen);
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
        {(props.toggle === false) ? (
          <div>
            <Descriptions title="시간" bordered>
              <Descriptions.Item label="시" span={1.5}>
                {props.data.time}
              </Descriptions.Item>
            </Descriptions>
          </div>) : (
            <div>
              <Descriptions title="시간등록" bordered>
                <Descriptions.Item label="시간" span={1.5}>
                  <Input className="input" name="time" onChange={(e) => props.handleChangeState(e)} value={props.data.time} style={{ width: "500px", float: "left", marginRight: "15px" }} />

                </Descriptions.Item>
              </Descriptions>
            </div>)}
        <Button onClick={props.updateUser} style={{ marginLeft: '1041px', marginTop: '10px' }}>수정</Button>
        <Button onClick={deleteClick} style={{ marginLeft: '1041px', marginTop: '10px' }}>삭제</Button>
      </Modal>
    </div >
  );
};

WPModal10.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal10;
