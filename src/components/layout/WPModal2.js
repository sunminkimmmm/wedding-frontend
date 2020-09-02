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
const WPModal2 = props => {
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
        {(props.toggles === true) ? (
          <div>
            <Descriptions title="행사고객상세보기" bordered>
              <Descriptions.Item label="계약일" span={1.5}>
                <Input className="input" name="contractDate" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.contractDate} />
              </Descriptions.Item>
              <Descriptions.Item label="담당자" span={1.5}>
                <Select className="select" defaultValue={props.data.userName} onChange={(e) => props.handleChangeState2(props.idx, e)} >
                  <Option value="관리자" >관리자</Option>
                  <Option value="관리자2" >관리자2</Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="계약구분" span={3}>
                <Radio.Group onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.contractClassification} name="contractClassification">
                  <Radio value="홀드">홀드</Radio>
                  <Radio value="가계약">가계약</Radio>
                  <Radio value="계약">계약</Radio>
                  <Radio value="취소">취소</Radio>
                  <Radio value="정산완료">정산완료</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="DB경로" span={3}>
                <Radio.Group onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.contactPath} name="contactPath" >
                  <Radio value="전화">전화</Radio>
                  <Radio value="인터넷">인터넷</Radio>
                  <Radio value="워킹">워킹</Radio>
                  <Radio value="지인">지인</Radio>
                  <Radio value="기타">기타</Radio>
                  <Radio value="업체">업체</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="행사유형" span={3}>
                <Input className="input" name="eventType" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.eventType} />
              </Descriptions.Item>
              <Descriptions.Item label="행사명" span={1.5}>
                <Input className="input" name="eventName" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.eventName} />
              </Descriptions.Item>
              <Descriptions.Item label="계약자명" span={1.5}>
                <Input className="input" name="fatherNameOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.fatherNameOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="연락처" span={1.5}>
                <Input className="input" name="fatherNameOfBride" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.fatherNameOfBride} />
              </Descriptions.Item>
              <Descriptions.Item label="휴대폰" span={1.5}>
                <Input className="input" name="motherNameOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.motherNameOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="주소" span={1.5}>
                <Input className="input" name="address1" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.address1} />
                <Input className="input" name="address2" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.address2} />
                <Input className="input" name="address3" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.address3} />
              </Descriptions.Item>

            </Descriptions>
            <Descriptions title="행사정보" bordered>
              <Descriptions.Item label="예식일" span={3}>
                {/* <DatePicker /> */}
              </Descriptions.Item>
              <Descriptions.Item label="예식홀" span={1.5}>
                <Select defaultValue="선택" defaultValue={props.data.hallName} onChange={(e) => props.handleChangeState3(props.idx, e)}>
                  <Option value="루브르">루브르</Option>
                  <Option value="트리니티">트리니티</Option>
                  <Option value="다빈치">다빈치</Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="예식시간" span={1.5}>
                <Select defaultValue="선택" defaultValue={props.data.hall_StartDate} onChange={(e) => props.handleChangeState6(props.idx, e)} >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
                시
           </Descriptions.Item>
            </Descriptions>

          </div>
        ) : (
            <div>
              <Descriptions title="행사기본정보" bordered>
                <Descriptions.Item label="계약일" span={1.5}>
                  {props.data.contractDate}
                </Descriptions.Item>
                <Descriptions.Item label="담당자" span={1.5}>
                  {props.data.userName}
                </Descriptions.Item>
                <Descriptions.Item label="계약구분" span={3}>
                  {props.data.contractClassification}
                </Descriptions.Item>
                <Descriptions.Item label="DB경로" span={3}>
                  {props.data.contactPath}
                </Descriptions.Item>
                <Descriptions.Item label="행사유형" span={3}>
                  {props.data.eventType}
                </Descriptions.Item>
                <Descriptions.Item label="행사명" span={1.5}>
                  {props.data.eventName}
                </Descriptions.Item>
                <Descriptions.Item label="계약자명" span={1.5}>
                  계약자명
            </Descriptions.Item>
                <Descriptions.Item label="연락처" span={1.5}>
                  연락처
            </Descriptions.Item>
                <Descriptions.Item label="휴대폰" span={1.5}>
                  휴대폰
            </Descriptions.Item>
                <Descriptions.Item label="주소" span={3}>
                  {props.data.address1}{props.data.address2}{props.data.address3}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="행사정보" bordered>
                <Descriptions.Item label="예식일" span={3}>
                  {/* <DatePicker /> */}
                </Descriptions.Item>
                <Descriptions.Item label="예식홀" span={1.5}>
                  {props.data.eventClassification === "행사" ? props.data.eventScheduleListVOs.map(d => {
                    return <td>{d.hallName}</td>
                  }) : ''}
                </Descriptions.Item>
                <Descriptions.Item label="예식시간" span={1.5}>
                  {props.data.hall_StartDate}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="메뉴정보" bordered >
                <Descriptions.Item label="메뉴명" span={1.5}>
                  {props.data.menuName}
                </Descriptions.Item>
                <Descriptions.Item label="대인금액" span={1.5}>
                  {props.data.adultCharge}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="행사정보" bordered>
                <Descriptions.Item label="입금일" span={1.5}>
                  {/* <DatePicker /> */}
                </Descriptions.Item>
                <Descriptions.Item label="계정구분" span={1.5}>
                  계정구분
            </Descriptions.Item>
                <Descriptions.Item label="결제구분" span={1.5}>
                  결제구분
            </Descriptions.Item>
                <Descriptions.Item label="금액" span={1.5}>
                  금액
            </Descriptions.Item>
                <Descriptions.Item label="입금메모" span={3}>
                  입금메모
            </Descriptions.Item>
              </Descriptions>


            </div>)}
        <Button onClick={props.setToggles} style={{ marginLeft: '1041px', marginTop: '10px' }}>수정</Button>

      </Modal>
    </div>
  );
};

WPModal2.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal2;
