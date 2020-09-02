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
const WPModal5 = props => {
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
            <Descriptions title="기본정보 수정" bordered>
              <Descriptions.Item label="직원명" span={3}>
                <Input className="input" name="userName" onChange={(e) => props.handleChangeState(e)} value={props.data.userName} />
              </Descriptions.Item>
              <Descriptions.Item label="아이디" span={3}>
                <Input className="input" name="accountID" onChange={(e) => props.handleChangeState(e)} value={props.data.accountID} />
              </Descriptions.Item>
              <Descriptions.Item label="비밀번호" span={3}>
                <Input className="input" name="password" onChange={(e) => props.handleChangeState(e)} value={props.data.password} />
              </Descriptions.Item>
              <Descriptions.Item label="비밀번호" span={3}>
                <Input className="input" name="password" onChange={(e) => props.handleChangeState(e)} value={props.data.password} />
              </Descriptions.Item>
              <Descriptions.Item label="등급" span={3}>
                <Radio.Group onChange={(e) => props.handleChangeState(e)} value={props.data.grade} name="grade">
                  <Radio value="관리자">관리자</Radio>
                  <Radio value="부관리자">부관리자</Radio>
                  <Radio value="일반">일반</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="담당업무" span={3}>
                <Radio.Group onChange={(e) => props.handleChangeState(e)} value={props.data.responsibility} name="responsibility" >
                  <Radio value="관리">관리</Radio>
                  <Radio value="예약">예약</Radio>
                  <Radio value="조리">조리</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="연락처" span={3}>
                <Input className="input" name="contactNumber" onChange={(e) => props.handleChangeState(e)} value={props.data.contactNumber} />
              </Descriptions.Item>
              <Descriptions.Item label="휴대폰" span={3}>
                <Input className="input" name="mobile" onChange={(e) => props.handleChangeState(e)} value={props.data.mobile} />
              </Descriptions.Item>
              <Descriptions.Item label="이메일" span={3}>
                <Input className="input" name="email" onChange={(e) => props.handleChangeState(e)} value={props.data.email} />
              </Descriptions.Item>
            </Descriptions>
          </div>
        ) : (
            <div>
              <Descriptions title="기본정보" bordered>
                <Descriptions.Item label="직원명" span={3}>
                  {props.data.userName}
                </Descriptions.Item>
                <Descriptions.Item label="아이디" span={3}>
                  {props.data.accountID}
                </Descriptions.Item>
                <Descriptions.Item label="비밀번호" span={3}>
                  {props.data.password}
                </Descriptions.Item>
                <Descriptions.Item label="등급" span={3}>
                  {props.data.grade}
                </Descriptions.Item>
                <Descriptions.Item label="담당업무" span={3}>
                  {props.data.responsibility}
                </Descriptions.Item>
                <Descriptions.Item label="연락처" span={3}>
                  {props.data.contactNumber}
                </Descriptions.Item>
                <Descriptions.Item label="핸드폰" span={3}>
                  {props.data.mobile}
                </Descriptions.Item>
                <Descriptions.Item label="이메일" span={3}>
                  {props.data.email}
                </Descriptions.Item>
              </Descriptions>
            </div>)}
        <Button onClick={props.updateUser} style={{ marginLeft: '1041px', marginTop: '10px' }}>수정</Button>
        <Button onClick={deleteClick} style={{ marginLeft: '1041px', marginTop: '10px' }}>삭제</Button>
      </Modal>
    </div >
  );
};

WPModal5.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal5;
