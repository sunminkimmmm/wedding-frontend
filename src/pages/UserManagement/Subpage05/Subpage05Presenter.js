import React, { Component } from 'react';
import Subpage05List from './Subpage05List'
import Subpage05Bar from './Subpage05Bar'
class Subpage05Presenter extends Component {
    render() {
        return (
            <div>
                <h3>식음료관리</h3>
                <Subpage05Bar />
                <Subpage05List />
            </div>
        );
    }
}

export default Subpage05Presenter;