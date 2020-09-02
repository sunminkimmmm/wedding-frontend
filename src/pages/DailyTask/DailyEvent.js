import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';

const DailyEvent = props => {
  const list = props.eventTask.map((item, index) => {
    return <EventItem item={item} key={index} />;
  });
  return (
    <>
      행사일정
      <table className="Table">
        <thead>
          <tr>
            <th>시간</th>
            <th>행사홀</th>
            <th>행사명</th>
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

DailyEvent.propTypes = {};

export default DailyEvent;
