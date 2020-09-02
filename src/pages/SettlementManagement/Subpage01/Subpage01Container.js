import React, { Component } from 'react';
import Subpage01Presenter from './Subpage01Presenter';

class Subpage01Container extends Component {
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
                <Subpage01Presenter onCreate={this.onCreate} {...this.state} {...this.props} />
            </div>
        );
    }
}

export default Subpage01Container;