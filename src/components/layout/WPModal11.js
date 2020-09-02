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
        <div>

          {/* <Descriptions.Item label="시간" span={1.5}>
              <Input className="input" name="order" onChange={(e) => props.handleChangeState(e)} value={props.data.order} style={{ width: "50px", float: "left", marginRight: "15px" }} />
              <span style={{ float: "left", marginRight: "15px", lineHeight: "30px" }}>시</span>
              <Input className="input" name="order" onChange={(e) => props.handleChangeState(e)} value={props.data.order} style={{ width: "50px", float: "left", marginRight: "15px" }} />
              <span style={{ float: "left", lineHeight: "30px" }}>분</span>
            </Descriptions.Item> */}

          <Descriptions title="시간등록" bordered>
            <Descriptions.Item label="달" span={1.5}>
              <Select className="select" defaultValue="시간입력" onChange={(e) => props.handleChangeStateMonth(e)} >
                <Option value="01" >01</Option>
                <Option value="02" >02</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="시간" span={1.5}>
              <Select className="select" defaultValue="시간입력" onChange={(e) => props.handleChangeStateH(e)} >
                <Option value="10" >10</Option>
                <Option value="10" >10</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="분" span={1.5}>
              <Select className="select" defaultValue="시간입력" onChange={(e) => props.handleChangeStateM(e)} >
                <Option value="00" >00</Option>
                <Option value="30" >30</Option>
              </Select>
            </Descriptions.Item>
          </Descriptions>
        </div>
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
