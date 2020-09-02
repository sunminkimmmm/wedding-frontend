import React, { Component } from 'react';
import Subpage05List from './Subpage05List'
class Subpage05Presenter extends Component {
    render() {
        return (
            <div>
                <h3>거래업체관리<small>>메이트업 업체</small></h3>
                <Subpage05List />
            </div>
        );
    }
}

export default Subpage05Presenter;
