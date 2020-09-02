import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { Calendar, Badge } from 'antd';
import { WPCalendar } from "../../components";


const VisitSchedulePresenter = (props) => {

    return (
        <div>

            <h3>방문일정</h3>
            {/* <Calendar dateCellRender={props.dateCellRender} monthCellRender={props.monthCellRender} /> */}
            <WPCalendar />
        </div>
    );
};

export default VisitSchedulePresenter;