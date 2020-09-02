/**
 *
 */

import React from "react";
import {
  WPDatePicker,
  WPInput,
  WPStringInput,
  WPNumberInput
} from "../../../components";
import { DatePicker } from "antd";
import EventRegistration from "./EventRegistration";
import EventInformation from "./EventInformation";

const Subpage01Presenter = props => {
  let testData = "";
  const [val, setVal] = React.useState("");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const test = data => {
    setVal(data.target.value);
  };
  const {
    users,
    contractDate,
    contract,
    dbPath,
    eventClassification,
    eventName,
    contractor,
    contact,
    mobile,
    address1,
    address2,
    address3,
    eventHall,
    eventHalls,
    menu,
    menus,
    eventDate,
    startHour,
    startMin,
    endHour,
    endMin,
    contractMemo,
    paymentDate,
    paymentAssuranceCount,
    paymentClassification,
    amount,
    accountClassification,
    paymentMemo
  } = props;
  return (
    <>
      <EventRegistration
        contract={contract}
        users={users}
        dbPath={dbPath}
        contractDate={contractDate}
        eventClassification={eventClassification}
        eventName={eventName}
        contractor={contractor}
        contact={contact}
        mobile={mobile}
        address1={address1}
        address2={address2}
        address3={address3}
        eventHalls={eventHalls}
        eventHall={eventHall}
        menu={menu}
        menus={menus}
        eventDate={eventDate}
        startHour={startHour}
        startMin={startMin}
        endHour={endHour}
        endMin={endMin}
        paymentDate={paymentDate}
        paymentClassification={paymentClassification}
        amount={amount}
        accountClassification={accountClassification}
        paymentMemo={paymentMemo}
        paymentAssuranceCount={paymentAssuranceCount}
        contractMemo={contractMemo}
        handleChangeContract={props.handleChangeContract}
        handleChangeContractDate={props.handleChangeContractDate}
        handleChangeUser={props.handleChangeUser}
        handleChangeDbPath={props.handleChangeDbPath}
        handleChangeEventClassification={props.handleChangeEventClassification}
        handleChangeEventName={props.handleChangeEventName}
        handleChangeContractor={props.handleChangeContractor}
        handleChangeContact={props.handleChangeContact}
        handleChangeMobile={props.handleChangeMobile}
        handleChangeAddress1={props.handleChangeAddress1}
        handleChangeAddress2={props.handleChangeAddress2}
        handleChangeAddress3={props.handleChangeAddress3}
        handleChangeEventHall={props.handleChangeEventHall}
        handleChangeEventHall={props.handleChangeEventHall}
        handleChangeEventDate={props.handleChangeEventDate}
        handleChangeStartHour={props.handleChangeStartHour}
        handleChangeEndHour={props.handleChangeEndHour}
        handleChangeStartMin={props.handleChangeStartMin}
        handleChangeEndMin={props.handleChangeEndMin}
        handleChangeMenu={props.handleChangeMenu}
        handleChangeContractMemo={props.handleChangeContractMemo}
        handleChangeAdultCharge={props.handleChangeAdultCharge}
        handleChangeChildCharge={props.handleChangeChildCharge}
        handleChangePaymentAssuranceCount={
          props.handleChangePaymentAssuranceCount
        }
        handleChangePaymentDate={props.handleChangePaymentDate}
        handleChangePaymentClassification={
          props.handleChangePaymentClassification
        }
        handleChangeAmount={props.handleChangeAmount}
        handleChangeAccountClassification={
          props.handleChangeAccountClassification
        }
        handleChangePaymentMemo={props.handleChangePaymentMemo}
        onClickSubmitButton={props.onClickSubmitButton}
      />
    </>
  );
};

export default Subpage01Presenter;
