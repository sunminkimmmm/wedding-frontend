import React from "react";
import PropTypes from "prop-types";
import { WPDatePicker } from "../../../components";
import { WPInput, WPRadio } from "../../../components";
const contractClassification = ["홀드", "가계약", "계약", "취소", "계약완료"];
const dbPaths = ["전화", "인터넷", "워킹", "지인", "기본", "업체"];
const accountClassification = ["계약금", "중도금", "잔액"];
const paymentClassification = ["현금", "카드", "계좌"];
const MarryRegistration = props => {
  return (
    <>
      <h2>계약 고객 등록</h2>
      <h3>기본정보</h3>
      <table border="1">
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
            <select style={{ width: "70%" }} onChange={props.handleChangeUser}>
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
          <td colSpan={3}>
            <WPRadio
              values={contractClassification}
              value={props.contractClassification}
              onChange={props.handleChangeContractClassification}
            />
          </td>
        </tr>
        <tr>
          <th>DB경로</th>
          <td colSpan={3}>
            <WPRadio
              values={dbPaths}
              value={props.dbPath}
              onChange={props.handleChangeDbPath}
            />
          </td>
        </tr>
        <tr>
          <th>신랑명</th>
          <td>
            <WPInput
              placeholder="신랑명"
              value={props.groomName}
              onChange={props.handleChangeGroomName}
            />
          </td>
          <th>신부명</th>
          <td>
            <WPInput
              placeholder="신부명"
              value={props.brideName}
              onChange={props.handleChangeBrideName}
            />
          </td>
        </tr>
        <tr>
          <th>부(父)명</th>
          <td>
            <WPInput
              placeholder="신랑 아버지명"
              value={props.fatherNameOfGroom}
              onChange={props.handleChangeFatherNameOfGroom}
            />
          </td>
          <th>부(父)명</th>
          <td>
            <WPInput
              placeholder="신부 아버지명"
              value={props.fatherNameOfBride}
              onChange={props.handleChangeFatherNameOfBride}
            />
          </td>
        </tr>
        <tr>
          <th>모(母)명</th>
          <td>
            <WPInput
              placeholder="신랑 어머니명"
              value={props.motherNameOfGroom}
              onChange={props.handleChangeMotherNameOfGroom}
            />
          </td>
          <th>"모(母)명"</th>
          <td>
            <WPInput
              placeholder="신부 어머니명"
              value={props.motherNameOfBride}
              onChange={props.handleChangeMotherNameOfBride}
            />
          </td>
        </tr>
        <tr>
          <th>관계</th>
          <td>
            <select
              value={props.parentGroomRelations}
              defaultValue="선택"
              onChange={props.handleChangeParentGroomRelations}
            >
              <option value="장남">장남</option>
              <option value="차남">차남</option>
              <option value="장남">삼남</option>
              <option value="차남">막내</option>
              <option value="아들">아들</option>
            </select>
          </td>
          <th>관계</th>
          <td>
            <select
              value={props.parentBrideRelations}
              defaultValue="선택"
              onChange={props.handleChangeParentBrideRelations}
            >
              <option value="장녀">장녀</option>
              <option value="차녀">차녀</option>
              <option value="삼녀">삼녀</option>
              <option value="막내">막내</option>
              <option value="딸">딸</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>신랑 휴대폰</th>
          <td>
            <select
              defaultValue="선택"
              value={props.mobileOfGroom}
              onChange={props.handleChangeMobileOfGroom}
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="02">02</option>
            </select>
            -
            <WPInput
              type="tel"
              style={{ width: "50%" }}
              name="mobileOfGroom"
              value={props.mobileOfGroom2}
              onChange={props.handleChangeMobileOfGroom2}
            />
          </td>
          <th>신부휴대폰</th>
          <td>
            <select
              defaultValue="선택"
              value={props.mobileOfBride}
              onChange={props.handleChangeMobileOfBride}
            >
              <option value="051">051</option>
              <option value="031">031</option>
              <option value="02">02</option>
            </select>
            -
            <WPInput
              type="tel"
              style={{ width: "50%" }}
              name="mobileOfBride"
              value={props.mobileOfBride2}
              onChange={props.handleChangeMobileOfBride2}
            />
          </td>
        </tr>
        <tr>
          <th>신랑 이메일</th>
          <td>
            <WPInput
              value={props.emailOfGroom}
              onChange={props.handleChangeEmailOfGroom}
            />
          </td>
          <th>신부 이메일</th>
          <td>
            <WPInput
              value={props.emailOfBride}
              onChange={props.handleChangeEmailOfBride}
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
      </table>
      <h3>예식정보</h3>
      <table border="1">
        <thead>
          <tr>
            <th>예식일</th>
            <td colSpan={3}>
              <WPDatePicker
                value={props.eventDate}
                onChange={props.handleChangeEventDate}
              />
            </td>
          </tr>
          <tr>
            <th>예식홀</th>
            <td>
              <select
                style={{ width: "70%" }}
                defaultValue={props.eventHall}
                onChange={props.handleChangeEventHall}
              >
                {props.eventHalls.map((item, index) => {
                  if (item.hallClassification == "예식") {
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
                value={props.eventHour}
                onChange={props.handleChangeEventHour}
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
                value={props.eventMin}
                style={{ width: "50px" }}
                onChange={props.handleChangeEventMin}
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
      <h3>메뉴정보</h3>
      <table border="1">
        <tr>
          <th rowSpan={2}>메뉴명</th>
          <td rowSpan={2}>
            <select
              style={{ width: "50%", marginRight: "10px", float: "left" }}
              onChange={props.handleChangeMenu}
              value={props.menu.name}
            >
              {props.menus.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.menuName}
                  </option>
                );
              })}
            </select>
            <div
              style={{ width: "20%", float: "left" }}
              name="charge"
              id="charge"
              cols="30"
              rows="10"
            >
              단가:{props.menuPrice}원
            </div>
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
          <td>
            <WPInput
              value={props.paymentAssuranceCount}
              style={{ width: "60%", float: "left" }}
              onChange={props.handleChangePaymentAssuranceCount}
            />
            명
          </td>

          <th>신랑측식권</th>
          <td>
            <WPInput
              value={props.mealTicketCountOfGroom}
              onChange={props.handleChangeMealTicketCountOfGroom}
            />
          </td>
        </tr>
        <tr>
          <th>예상인원</th>
          <td>
            <WPInput
              value={props.estimatedAttendanceNumbers}
              onChange={props.handleChangeEstimatedAttendanceNumbers}
            />
          </td>

          <th>신부측 식권</th>
          <td>
            <WPInput
              value={props.mealTicketCountOfBride}
              onChange={props.handleChangeMealTicketCountOfBride}
            />
          </td>
        </tr>
      </table>
      <h3>계약메모</h3>
      <table border="1">
        <tr>
          <th>계약메모</th>
          <td>
            <WPInput
              value={props.contractMemo}
              onChange={props.handleChangeContractMemo}
            />
          </td>
        </tr>
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

MarryRegistration.propTypes = {};

export default MarryRegistration;
