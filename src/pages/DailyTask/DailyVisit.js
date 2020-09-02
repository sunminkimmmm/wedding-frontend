import React from 'react';
import PropTypes from 'prop-types';
import DailyVisitItem from './DailyVisitItem';
const DailyVisit = props => {
  const list = props.visitTask.map((item, index) => {
    return <DailyVisitItem item={item} key={index} />;
  });
  return (
    <>
      방문일정
      <table className="Table">
        <thead>
          <tr>
            <th>시간</th>
            <th>구분</th>
            <th>고객명</th>
            <th>연락처</th>
            <th>DB경로</th>
            <th>상담일</th>
            <th>내용</th>
            <th>방문</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

DailyVisit.propTypes = {};

export default DailyVisit;
