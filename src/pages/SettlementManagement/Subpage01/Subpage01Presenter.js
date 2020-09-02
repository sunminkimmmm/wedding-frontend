import React from 'react';
import Subpage01Fillter from './Subpage01Fillter'
import Subpage01List from './Subpage01List'

const Subpage01Presenter = (props) => {
    return (
        <div>
            <h2>예식고객정산</h2>
            <Subpage01Fillter onCreate={props.onCreate} />
            <br />
            <Subpage01List {...props} />
        </div>
    );
};

export default Subpage01Presenter;