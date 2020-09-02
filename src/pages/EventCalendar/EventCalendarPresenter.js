import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { Calendar, Badge } from 'antd';
import { WPCalendar } from "../../components";


const EventCalendarPresenter = (props) => {

    return (
        <div>

            <h3>행사일정<small>>월간일정</small></h3>
            {/* <Calendar dateCellRender={props.dateCellRender} monthCellRender={props.monthCellRender} /> */}
            <WPCalendar />
        </div>
    );
};

export default EventCalendarPresenter;