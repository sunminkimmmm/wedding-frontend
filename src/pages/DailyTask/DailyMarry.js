import React from 'react';
import PropTypes from 'prop-types';
import DailyMarryItem from './DailyMarryItem';

const DailyMary = props => {
  const list = props.marryTask.map((item, index) => {
    return <DailyMarryItem item={item} key={index} />;
  });
  return (
    <>
      예식일정
      <table className="Table">
        <thead>
          <tr>
            <th>시간</th>
            <th>예식홀</th>
            <th>고객명</th>
            <th>연락처</th>
            <th>메뉴</th>
            <th>보증인원</th>
            <th>계약메모</th>
            <th>담당자</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

DailyMary.propTypes = {};

export default DailyMary;
