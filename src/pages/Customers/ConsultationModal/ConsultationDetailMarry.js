import React from "react";
import PropTypes from "prop-types";
import { WPInput, WPNumberInput } from "../../../components";
const ConsultationDetailMarry = props => {
  return (
    <>
      <tr>
        <th>예식홀</th>
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
        <th>예식시간</th>
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
        </td>
      </tr>
      <tr>
        <th>신랑명</th>
        <td>
          <WPInput
            value={props.groomName}
            style={{ width: "30%" }}
            onChange={props.handleChangeGroomName}
          />
        </td>
        <th>신랑휴대폰</th>
        <td>
          <select
            value={props.mobileOfGroom}
            onChange={props.handleChangeMobileOfGroom}
          >
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          -
          <WPInput
            value={props.mobileOfGroom2}
            onChange={props.handleChangeMobileOfGroom2}
          />
        </td>
      </tr>
      <tr>
        <th>신부명</th>
        <td>
          <WPInput
            value={props.brideName}
            style={{ width: "30%" }}
            onChange={props.handleChangeBrideName}
          />
        </td>
        <th>신부휴대폰</th>
        <td>
          <select
            value={props.mobileOfBride}
            onChange={props.handleChangeMobileOfBride}
          >
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          -
          <WPInput
            value={props.mobileOfBride2}
            onChange={props.handleChangeMobileOfBride2}
          />
        </td>
      </tr>
      <tr>
        <th>비고</th>
        <td colSpan={3}>
          <WPInput value={props.memo} onChange={props.handleChangeMemo} />
        </td>
      </tr>
    </>
  );
};

ConsultationDetailMarry.propTypes = {};

export default ConsultationDetailMarry;
