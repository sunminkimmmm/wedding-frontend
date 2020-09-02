import React from "react";
import {
  Descriptions, Modal, Button, Input,
  Select, Radio
} from "antd";
const { Option } = Select;
const WPModal = props => {
  const { isOpen, title, setToggle } = props;


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
        {/* <td>
              <Input
                name="hallName"
                value={props.hallName}
                onChange={props.handleChangeState}
              />
            </td> */}
        {(props.toggles === true) ? (
          <div>
            <Descriptions title="계약 고객 등록" bordered>
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
              <Descriptions.Item label="신랑명" span={1.5}>
                <Input className="input" name="groomName" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.groomName} />
              </Descriptions.Item>
              <Descriptions.Item label="신부명" span={1.5}>
                <Input className="input" name="brideName" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.brideName} />
              </Descriptions.Item>
              <Descriptions.Item label="부(父)명" span={1.5}>
                <Input className="input" name="fatherNameOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.fatherNameOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="부(父)명" span={1.5}>
                <Input className="input" name="fatherNameOfBride" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.fatherNameOfBride} />
              </Descriptions.Item>
              <Descriptions.Item label="모(母)명" span={1.5}>
                <Input className="input" name="motherNameOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.motherNameOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="모(母)명" span={1.5}>
                <Input className="input" name="motherNameOfBride" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.motherNameOfBride} />
              </Descriptions.Item>
              <Descriptions.Item label="관계" span={1.5}>
                <Select defaultValue="선택" defaultValue={props.data.parentGroomRelations} onChange={(e) => props.handleChangeState4(props.idx, e)} >
                  <Option value="장남">장남</Option>
                  <Option value="차남">차남</Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="관계" span={1.5}>
                <Select defaultValue="선택" defaultValue={props.data.parentBrideRelations} onChange={(e) => props.handleChangeState5(props.idx, e)} >
                  <Option value="장녀">장녀</Option>
                  <Option value="차녀">차녀</Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="신랑휴대폰" span={1.5}>
                <Input className="input" name="mobileOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.mobileOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="신부휴대폰" span={1.5}>
                <Input className="input" name="mobileOfBride" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.mobileOfBride} />
              </Descriptions.Item>
              <Descriptions.Item label="신랑이메일" span={1.5}>
                <Input className="input" name="emailOfGroom" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.emailOfGroom} />
              </Descriptions.Item>
              <Descriptions.Item label="신부이메일" span={1.5}>
                <Input className="input" name="emailOfBride" onChange={(e) => props.handleChangeState(props.idx, e)} value={props.data.emailOfBride} />
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
              <Descriptions title="예식기본정보" bordered>
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
                <Descriptions.Item label="신랑명" span={1.5}>
                  {props.data.groomName}
                </Descriptions.Item>
                <Descriptions.Item label="신부명" span={1.5}>
                  {props.data.brideName}
                </Descriptions.Item>
                <Descriptions.Item label="부(父)명" span={1.5}>
                  {props.data.fatherNameOfGroom}
                </Descriptions.Item>
                <Descriptions.Item label="부(父)명" span={1.5}>
                  {props.data.fatherNameOfBride}
                </Descriptions.Item>
                <Descriptions.Item label="모(母)명" span={1.5}>
                  {props.data.motherNameOfGroom}
                </Descriptions.Item>
                <Descriptions.Item label="모(母)명" span={1.5}>
                  {props.data.motherNameOfBride}
                </Descriptions.Item>
                <Descriptions.Item label="관계" span={1.5}>
                  {props.data.parentGroomRelations}
                </Descriptions.Item>
                <Descriptions.Item label="관계" span={1.5}>
                  {props.data.parentBrideRelations}
                </Descriptions.Item>
                <Descriptions.Item label="신랑휴대폰" span={1.5}>
                  {props.data.mobileOfGroom}
                </Descriptions.Item>
                <Descriptions.Item label="신부휴대폰" span={1.5}>
                  {props.data.mobileOfBride}
                </Descriptions.Item>
                <Descriptions.Item label="신랑이메일" span={1.5}>
                  {props.data.emailOfGroom}
                </Descriptions.Item>
                <Descriptions.Item label="신부이메일" span={1.5}>
                  {props.data.emailOfBride}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="행사정보" bordered>
                <Descriptions.Item label="예식일" span={3}>
                  {/* <DatePicker /> */}
                </Descriptions.Item>
                <Descriptions.Item label="예식홀" span={1.5}>
                  {props.data.hallName}

                  {/* {props.data.eventClassification === "행사" ? props.data.eventScheduleListVOs.map(d => {
                return <td>{d.hallName}</td>
              }) : ''} */}
                </Descriptions.Item>
                <Descriptions.Item label="예식시간" span={1.5}>
                  {props.data.hall_StartDate} 시
                  {/* {props.data.eventClassification === "예식" ? props.data.eventScheduleListVOs.map(d => {
                    return <td>{d.startDate}</td>
                  }) : ''} */}
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
        <Button onClick={props.setToggles} style={{ marginLeft: '1041px', marginTop: '10px' }}>완료</Button>
        <Button onClick={() => console.log(props)} style={{ marginLeft: '1041px', marginTop: '10px' }}>콘솔</Button>
      </Modal>
    </div>
  );
};

WPModal.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal"
  // onOk: () => {},
  // onCancel: () => {}
};

export default WPModal;
