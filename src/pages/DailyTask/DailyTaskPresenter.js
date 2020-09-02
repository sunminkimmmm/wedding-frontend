import React from 'react';
import PropTypes from 'prop-types';
import DailyMarry from './DailyMarry';
import DailyEvent from './DailyEvent';
import DailyVisit from './DailyVisit';
const DailyTaskPresenter = props => {
  return (
    <>
      <DailyMarry marryTask={props.marryTask} />
      <DailyEvent eventTask={props.eventTask} />
      <DailyVisit visitTask={props.visitTask} />
    </>
  );
};

DailyTaskPresenter.propTypes = {};

export default DailyTaskPresenter;
