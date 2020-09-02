import React, { Component } from 'react';
import Subpage01List from './Subpage01List'
class Subpage01Presenter extends Component {
    render() {
        return (
            <div>
                <h2>사용자관리<small>>직원관리</small></h2>
                <Subpage01List />
            </div>
        );
    }
}

export default Subpage01Presenter;