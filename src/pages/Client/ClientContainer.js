import React, { Component } from 'react';
import ClientPresenter from './ClientPresenter';

class ClientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [
        {
          classfication: '1',
          clientName: '1',
          manager: '1',
          mobile: '1',
          tel: '1',
          fax: '1'
        },
      ]
    };
  }

  render() {
    return <ClientPresenter client={this.state.client} />;
  }
}

export default ClientContainer;
