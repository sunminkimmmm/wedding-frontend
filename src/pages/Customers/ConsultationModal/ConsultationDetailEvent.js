import React from "react";
import PropTypes from "prop-types";
import { WPInput, WPRadio } from "../../../components";

const ConsultationDetailEvent = props => {
  return (
    <>
      <tr>
        <th>행사홀</th>
        <td>
          <select onChange={props.handleChangeEventHall}>
            {props.eventHalls.map((item, index) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.hallName}
                </option>
              );
            })}
          </select>
        </td>
        <th>행사시간</th>
        <td>
          <select
            value={props.startHour}
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
            value={props.startMin}
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
          분
          <select
            value={props.endHour}
            onChange={props.handleChangeEndHour}
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
            value={props.endMin}
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
      <tr>
        <th>행사명</th>
        <td>
          <WPInput
            value={props.eventContractorName}
            onChange={props.handleChangeEventContractorName}
          />
        </td>
        <th>계약자명</th>
        <td>
          <WPInput
            value={props.contractorName}
            onChange={props.handleChangeContractorName}
          />
        </td>
      </tr>
      <tr>
        <th>행사유형</th>
        <td colSpan={3}>
          <WPRadio
            values={["기업", "돌", "가족", "대관"]}
            value={props.eventType}
            onChange={props.handleChangeEventType}
          />
        </td>
      </tr>
      <tr>
        <th>연락처</th>
        <td>
          <select onChange={props.handleChangeContractNumber}>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="012">012</option>
            <option value="013">013</option>
            <option value="014">014</option>
            <option value="015">015</option>
            <option value="016">016</option>
          </select>
          -
          <WPInput
            value={props.contractNumber2}
            onChange={props.handleChangeContractNumber2}
          />
        </td>
        <th>휴대폰</th>
        <td>
          <select onChange={props.handleChangeMobile}>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="012">012</option>
            <option value="013">013</option>
            <option value="014">014</option>
            <option value="015">015</option>
            <option value="016">016</option>
          </select>
          -
          <WPInput value={props.mobile2} onChange={props.handleChangeMobile2} />
        </td>
      </tr>
    </>
  );
};

ConsultationDetailEvent.propTypes = {};

export default ConsultationDetailEvent;
