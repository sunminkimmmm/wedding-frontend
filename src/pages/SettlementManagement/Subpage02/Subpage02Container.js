import React, { Component } from 'react';
import Subpage02Presenter from './Subpage02Presenter';

class Subpage02Container extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    onCreate = (val) => {
        this.setState({
            status: {
                ...val
            }
        })
        console.log(val)
        console.log(this.state.status)
    }

    render() {
        return (
            <div>
                <Subpage02Presenter onCreate={this.onCreate} {...this.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage02Container;