import React from "react";
import PropTypes from "prop-types";
import { WPInput, WPRadio } from "../../../components";
import { WPDatePicker } from "../../../components";
const ConsultationConsultation = props => {
  return (
    <>
      <h2>상담정보</h2>
      <table>
        <tbody>
          <tr>
            <th>상담일</th>
            <td>
              <WPDatePicker
                value={props.consultationDate}
                onChange={props.handleChangeConsultationDate}
              />
            </td>
            <th>상담구분</th>
            <td>
              <WPRadio
                values={["전화", "방문"]}
                value={props.consultationClassification}
                onChange={props.handleChangeConsultationClassification}
              />
            </td>
          </tr>
          <tr>
            <th>방문 예정일</th>
            <td>
              <WPDatePicker
                value={props.visitDate}
                onChange={props.handleChangeVisitDate}
              />
              <select
                value={props.visitHour}
                onChange={props.handleChangeVisitHour}
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
                value={props.visitMin}
                style={{ width: "50px" }}
                onChange={props.handleChangeVisitMin}
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
            <th>방문구분</th>
            <td>
              <WPRadio
                value={props.visitClassification}
                values={["초방", "재방", "시식"]}
                onChange={props.handleChangeVisitClassification}
              />
            </td>
          </tr>
          <tr>
            <th>상담내용</th>
            <td colSpan={3}>
              <WPInput
                value={props.contents}
                onChange={props.handleChangeContents}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

ConsultationConsultation.propTypes = {};

export default ConsultationConsultation;
