import React from "react";
import PropTypes from "prop-types";
import { WPRadio } from "../../../components";
import { WPDatePicker } from "../../../components";
import ConsultationDetailMarry from "./ConsultationDetailMarry";
import ConsultationDetailEvent from "./ConsultationDetailEvent";
const ConsultationDefault = props => {
  return (
    <>
      <h2>기본정보</h2>
      <table border="1">
        <thead>
          <tr>
            <th>담당자</th>
            <td colSpan={3}>
              <select onChange={props.handleChangeUsers}>
                {props.users.map((item, index) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.userName}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>DB경로</th>
            <td colSpan={3}>
              <WPRadio
                value={props.contactPath}
                values={["전화", "인터넷", "워킹", "지인", "기타", "업체"]}
                onChange={props.handleChangeContactPath}
              />
            </td>
          </tr>
          <tr>
            <th>행사구분</th>
            <td>
              <WPRadio
                value={props.eventClassification}
                values={["예식", "행사"]}
                onChange={props.handleChangeEventClassification}
              />
            </td>
            <th>행사일</th>
            <td>
              <WPDatePicker
                value={props.eventDate}
                onChange={props.handleChangeEventDate}
              />
            </td>
          </tr>

          {props.eventClassification == "예식" ? (
            <ConsultationDetailMarry
              eventHalls={props.eventHalls}
              brideName={props.brideName}
              groomName={props.groomName}
              mobileOfBride={props.mobileOfBride}
              mobileOfBride2={props.mobileOfBride2}
              mobileOfGroom={props.mobileOfGroom}
              mobileOfGroom2={props.mobileOfGroom2}
              memo={props.memo}
              handleChangeEventHall={props.handleChangeEventHall}
              handleChangeStartHour={props.handleChangeStartHour}
              handleChangeStartMin={props.handleChangeStartMin}
              handleChangeGroomName={props.handleChangeGroomName}
              handleChangeBrideName={props.handleChangeBrideName}
              handleChangeMobileOfGroom={props.handleChangeMobileOfGroom}
              handleChangeMobileOfGroom2={props.handleChangeMobileOfGroom2}
              handleChangeMobileOfBride={props.handleChangeMobileOfBride}
              handleChangeMobileOfBride2={props.handleChangeMobileOfBride2}
              handleChangeMemo={props.handleChangeMemo}
            />
          ) : (
            <ConsultationDetailEvent
              eventHalls={props.eventHalls}
              brideName={props.brideName}
              groomName={props.groomName}
              mobile={props.mobile}
              mobile2={props.mobile2}
              contractNumber={props.contractNumber}
              contractNumber2={props.contractNumber2}
              eventType={props.eventType}
              eventContractorName={props.eventContractorName}
              contractorName={props.contractorName}
              handleChangeEventHall={props.handleChangeEventHall}
              handleChangeStartHour={props.handleChangeStartHour}
              handleChangeStartMin={props.handleChangeStartMin}
              handleChangeEndHour={props.handleChangeEndHour}
              handleChangeEndMin={props.handleChangeEndMin}
              handleChangeGroomName={props.handleChangeGroomName}
              handleChangeBrideName={props.handleChangeBrideName}
              handleChangeMobile={props.handleChangeMobile}
              handleChangeMobile2={props.handleChangeMobile2}
              handleChangeContractNumber={props.handleChangeContractNumber}
              handleChangeContractNumber2={props.handleChangeContractNumber2}
              handleChangeEventType={props.handleChangeEventType}
              handleChangeEventContractorName={
                props.handleChangeEventContractorName
              }
              handleChangeContractorName={props.handleChangeContractorName}
            />
          )}
        </thead>
      </table>
    </>
  );
};

ConsultationDefault.propTypes = {};

export default ConsultationDefault;
