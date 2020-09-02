import React from "react";
import { Calendar, Badge } from "antd";
import { momentDateToString } from "../../Utils";
import "moment/locale/ko";

/*  */
const getListData = (value, schedules) => {
  const fullDate = momentDateToString(value);
  return schedules[fullDate] || [];
};

/*  */
const dateCellRender = (value, schedules) => {
  const listData = getListData(value, schedules);
  return (
    <ul
      className="events"
      style={{
        padding: 0
      }}
    >
      {listData.map((item, index) => (
        <li key={`schedule_id_${index}`}>
          <Badge
            status={item.type ? item.type : 'default'}
            text={item.content}
          />
        </li>
      ))}
    </ul>
  );
};

/*  */
const getMonthData = value => {
  if (value.month() === 8) {
    return 1394;
  }
};

/*  */
const monthCellRender = value => {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
};

/**
 *
 */
const WPCalendar = props => {
  return (
    <Calendar
      dateCellRender={value => dateCellRender(value, props.schedules)}
      monthCellRender={monthCellRender}
      locale={'ko'}
      onSelect={value => {
        props.onSelect(momentDateToString(value));
      }}
    />
  );
};

/**
 *
 */
WPCalendar.defaultProps = {
  schedules: {
    '2019-08-11': [
      { type: 'default', content: 'This is warning event.' },
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    '2019-08-19': [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ]
  },

  onSelect: value => {
    // console.log(momentDateToString(value));
    console.log(value);
  }
};

export default WPCalendar;
