import React from 'react';
import PropTypes from 'prop-types';
import VisitConsultationListItem from './VisitConsultationListItem';
const VisitConsultationList = props => {
  const list = props.visitConsultation.map((item, index) => {
    return (
      <VisitConsultationListItem key={index} visitConsultationListItem={item} />
    );
  });
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>담당자</th>
          <th>고객/행사명</th>
          <th>상담일자</th>
          <th>휴대폰</th>
          <th>구분</th>
          <th>방문일자</th>
          <th>방문</th>
          <th>방문구분</th>
          <th>내용</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

VisitConsultationList.propTypes = {
  visitConsultation: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VisitConsultationList;
