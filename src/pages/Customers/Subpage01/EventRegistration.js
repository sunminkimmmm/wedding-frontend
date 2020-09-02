import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { WPInput, WPCalendar, WPRadio } from "../../../components";
import WPDatePicker from "../../../components/Date/WPDatePicker";
import "./TableCss.css";

const contractClassification = ["홀드", "가계약", "계약", "취소", "계약완료"];
const dbPaths = ["전화", "인터넷", "워킹", "지인", "기본", "업체"];
const eventClassification = ["기업", "돌", "가족", "대관"];
const accountClassification = ["계약금", "중도금", "잔액"];
const paymentClassification = ["현금", "카드", "계좌"];
const EventRegistration = props => {
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>고객관리>고객등록</h2>
      <h3 style={{ marginBottom: "2px" }}>>기본정보</h3>
      <table border="1">
        <thead>
          <tr>
            <th>계약일</th>
            <td>
              <WPDatePicker
                value={props.contractDate}
                onChange={props.handleChangeContractDate}
              />
            </td>
            <th>담당자</th>
            <td>
              <select
                style={{ width: "70%" }}
                onChange={props.handleChangeUser}
              >
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
            <th>계약구분</th>
            <td colSpan={3} style={{ textAlign: "left" }}>
              <WPRadio
                value={props.contract}
                values={contractClassification}
                onChange={props.handleChangeContract}
              />
            </td>
          </tr>
          <tr>
            <th>DB경로</th>
            <td colSpan={3} style={{ textAlign: "left" }}>
              <WPRadio
                value={props.dbPath}
                values={dbPaths}
                onChange={props.handleChangeDbPath}
              />
            </td>
          </tr>
          <tr>
            <th>행사유형</th>
            <td colSpan={3} style={{ textAlign: "left" }}>
              <WPRadio
                value={props.eventClassification}
                values={eventClassification}
                onChange={props.handleChangeEventClassification}
              />
            </td>
          </tr>
          <tr>
            <th>행사명</th>
            <td style={{ textAlign: "left" }}>
              <WPInput
                value={props.eventName}
                onChange={props.handleChangeEventName}
              />
            </td>

            <th>계약자명</th>
            <td>
              <WPInput
                value={props.contractor}
                onChange={props.handleChangeContractor}
              />
            </td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>
              <WPInput
                value={props.contact}
                onChange={props.handleChangeContact}
              />
            </td>
            <th>휴대폰</th>
            <td>
              <WPInput
                value={props.mobile}
                onChange={props.handleChangeMobile}
              />
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td colSpan={3} style={{ textAlign: "left" }}>
              <WPInput
                placeholder="우편번호"
                style={{ float: "left", width: "30%" }}
                value={props.address1}
                onChange={props.handleChangeAddress1}
              />
              <div style={{ float: "left", width: "auto" }}>-</div>
              <WPInput
                placeholder="주소"
                style={{ float: "left", width: "30%" }}
                value={props.address2}
                onChange={props.handleChangeAddress2}
              />
              <div style={{ float: "left", width: "auto" }}>-</div>
              <WPInput
                placeholder="상세"
                style={{ float: "left", width: "30%" }}
                value={props.address3}
                onChange={props.handleChangeAddress3}
              />
            </td>
          </tr>
        </thead>
      </table>
      <h3>>행사정보</h3>
      <table border="1">
        <thead>
          <tr>
            <th>행사일</th>
            <td colSpan={3}>
              <WPDatePicker
                value={props.eventDate}
                onChange={props.handleChangeEventDate}
              />
            </td>
          </tr>
          <tr>
            <th>연회홀</th>
            <td>
              <select
                style={{ width: "70%" }}
                defaultValue={props.eventHall}
                onChange={props.handleChangeEventHall}
              >
                {props.eventHalls.map((item, index) => {
                  if (item.hallClassification == "행사") {
                    return (
                      <option key={item.eventName} value={item.id}>
                        {item.hallName}
                      </option>
                    );
                  }
                })}
              </select>
            </td>
            <th>연회시간</th>
            <td>
              <select
                defaultValue={props.startHour}
                onChange={props.handleChangeStartHour}
                style={{ width: "50px" }}
              >
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
              </select>
              시
              <select
                defaultValue={props.starMin}
                style={{ width: "50px" }}
                onChange={props.handleChangeStartMin}
              >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              분 ~
              <select
                defaultValue={props.endHour}
                style={{ width: "50px" }}
                onChange={props.handleChangeEndHour}
              >
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
              </select>
              시
              <select
                defaultValue={props.endMin}
                style={{ width: "50px" }}
                onChange={props.handleChangeEndMin}
              >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              분
            </td>
          </tr>
        </thead>
      </table>
      <h3>>메뉴정보</h3>
      <table border="1">
        <thead>
          <tr>
            <th rowSpan={2}>메뉴명</th>
            <td rowSpan={2}>
              <select
                style={{ width: "50%", marginRight: "10px" }}
                onChange={props.handleChangeMenu}
                value={props.menu}
              >
                {props.menus.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.menuName}
                    </option>
                  );
                })}
              </select>
              단가:{props.menu.adultCharge}
            </td>
            <th>대인금액</th>
            <td>
              <WPInput
                value={props.menu.adultCharge}
                onChange={props.handleChangeAdultCharge}
              />
            </td>
          </tr>
          <tr>
            <th>소인금액</th>
            <td>
              <WPInput
                value={props.menu.childCharge}
                onChange={props.handleChangeChildCharge}
              />
            </td>
          </tr>
          <tr>
            <th>지불보증인원</th>
            <td colSpan={3}>
              <WPInput
                value={props.paymentAssuranceCount}
                style={{ width: "60%", float: "left" }}
                onChange={props.handleChangePaymentAssuranceCount}
              />
              명
            </td>
          </tr>
        </thead>
      </table>
      <h3>>계약메모</h3>
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: "100px" }}>계약메모</th>
            <td style={{ width: "90%" }}>
              <WPInput
                value={props.contractMemo}
                onChange={props.handleChangeContractMemo}
                style={{ width: "80%", float: "left" }}
                size="big"
              />
            </td>
          </tr>
        </thead>
      </table>
      <h3>>입금정보</h3>
      <table border="1">
        <thead>
          <tr>
            <th>입금일</th>
            <td>
              <WPDatePicker
                value={props.paymentDate}
                onChange={props.handleChangePaymentDate}
              />
            </td>
            <th>계정구분</th>
            <td>
              <WPRadio
                value={props.accountClassification}
                values={accountClassification}
                onChange={props.handleChangeAccountClassification}
              />
            </td>
          </tr>
          <tr>
            <th>금액</th>
            <td>
              <WPInput
                onChange={props.handleChangeAmount}
                style={{ width: "80%" }}
                value={props.amount}
              />
              원
            </td>
            <th>결제구분</th>
            <td>
              <WPRadio
                value={props.paymentClassification}
                values={paymentClassification}
                onChange={props.handleChangePaymentClassification}
              />
            </td>
          </tr>
          <tr>
            <th>입금메모</th>
            <td colspan={3}>
              <WPInput
                value={props.paymentMemo}
                onChange={props.handleChangePaymentMemo}
              />
            </td>
          </tr>
        </thead>
      </table>
      <button onClick={props.onClickSubmitButton}>등록</button>
      <button>취소</button>
    </>
  );
};

EventRegistration.propTypes = {};

export default EventRegistration;
