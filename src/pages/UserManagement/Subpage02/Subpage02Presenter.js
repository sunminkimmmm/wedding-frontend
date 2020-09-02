import React, { Component } from 'react';
import Subpage02List from './Subpage02List'
class Subpage02Presenter extends Component {
    render() {
        return (
            <div>
                <h2>사용자관리<small>>접속로고</small></h2>
                <Subpage02List />
            </div>
        );
    }
}

export default Subpage02Presenter;