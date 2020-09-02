import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConsultationListItem from './ConsultationListItem';
import './Consultation.css';
const ConsultationList = props => {
  let list = props.consultationCustomers.map((item, index) => {
    return (
      <ConsultationListItem
        consultationCustomers={item}
        key={index}
        handleChangeCheckBox={props.handleChangeCheckBox}
      />
    );
  });
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>check</th>
          <th>구분</th>
          <th>고객명(행사명)</th>
          <th>휴대폰</th>
          <th>행사예정일</th>
          <th>DB경로</th>
          <th>담당자</th>
          <th>등록일</th>
          <th>상태</th>
          <th>계약</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};
ConsultationList.propTypes = {
  consultationCustomers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeCheckBox: PropTypes.func.isRequired
};

export default ConsultationList;
