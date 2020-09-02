import React from "react";
import PropTypes from "prop-types";
import ConsultationDefault from "./ConsultationDefault";
import ConsultationConsultation from "./ConsultationConsultation";
import ConsultationFooter from "./ConsultationFooter";
const ConsultationModalPresenter = props => {
  const {
    users_ID,
    users,
    contactPath,
    eventClassification,
    eventDate,
    eventHalls,
    hallName,
    brideName,
    groomName,
    mobileOfBride,
    mobileOfBride2,
    mobileOfGroom,
    mobileOfGroom2,
    mobile,
    mobile2,
    contractNumber,
    contractNumber2,
    memo,
    eventType,
    eventContractorName,
    contractorName,
    consultationDate,
    consultationClassification,
    visitDate,
    visitHour,
    visitMin,
    visitClassification,
    contents
  } = props;
  return (
    <>
      <h3>상담고객|전체등록</h3>
      <ConsultationDefault
        users_ID={users_ID}
        users={users}
        contactPath={contactPath}
        eventClassification={eventClassification}
        eventDate={eventDate}
        eventHalls={eventHalls}
        hallName={hallName}
        brideName={brideName}
        groomName={groomName}
        mobileOfBride={mobileOfBride}
        mobileOfBride2={mobileOfBride2}
        mobileOfGroom={mobileOfGroom}
        mobileOfGroom2={mobileOfGroom2}
        mobile={mobile}
        mobile2={mobile2}
        memo={memo}
        contractNumber={contractNumber}
        contractNumber2={contractNumber2}
        eventType={eventType}
        eventContractorName={eventContractorName}
        contractorName={contractorName}
        handleChangeUsers={props.handleChangeUsers}
        handleChangeContactPath={props.handleChangeContactPath}
        handleChangeEventClassification={props.handleChangeEventClassification}
        handleChangeEventDate={props.handleChangeEventDate}
        handleChangeEventHall={props.handleChangeEventHall}
        handleChangeStartHour={props.handleChangeStartHour}
        handleChangeStartMin={props.handleChangeStartMin}
        handleChangeEndHour={props.handleChangeEndHour}
        handleChangeEndMin={props.handleChangeEndMin}
        handleChangeGroomName={props.handleChangeGroomName}
        handleChangeBrideName={props.handleChangeBrideName}
        handleChangeMobileOfGroom={props.handleChangeMobileOfGroom}
        handleChangeMobileOfGroom2={props.handleChangeMobileOfGroom2}
        handleChangeMobileOfBride={props.handleChangeMobileOfBride}
        handleChangeMobileOfBride2={props.handleChangeMobileOfBride2}
        handleChangeMobile={props.handleChangeMobile}
        handleChangeMobile2={props.handleChangeMobile2}
        handleChangeContractNumber={props.handleChangeContractNumber}
        handleChangeContractNumber2={props.handleChangeContractNumber2}
        handleChangeMemo={props.handleChangeMemo}
        handleChangeEventType={props.handleChangeEventType}
        handleChangeEventContractorName={props.handleChangeEventContractorName}
        handleChangeContractorName={props.handleChangeContractorName}
      />
      <ConsultationConsultation
        consultationDate={consultationDate}
        consultationClassification={consultationClassification}
        visitDate={visitDate}
        visitHour={visitHour}
        visitMin={visitMin}
        contents={contents}
        visitClassification={visitClassification}
        handleChangeConsultationDate={props.handleChangeConsultationDate}
        handleChangeConsultationClassification={
          props.handleChangeConsultationClassification
        }
        handleChangeVisitDate={props.handleChangeVisitDate}
        handleChangeVisitHour={props.handleChangeVisitHour}
        handleChangeVisitMin={props.handleChangeVisitMin}
        handleChangeVisitClassification={props.handleChangeVisitClassification}
        handleChangeContents={props.handleChangeContents}
      />
      <ConsultationFooter onClickSubmit={props.onClickSubmit} />
    </>
  );
};

ConsultationModalPresenter.propTypes = {};

export default ConsultationModalPresenter;
