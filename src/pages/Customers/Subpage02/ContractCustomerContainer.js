import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import SearchBar from './SearchBar';
class ContractCustomerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStartedDate: '',
      inputEndDate: '',
      inputEventClassfication: '',
      inputDateClassfication: '',
      inputContactPath: '',
      inputNameClassfication: '',
      inputName: '',
      inputUserID: '',
      consultationCustomers: [
        {
          id: '',
          registrationDate: '',
          contactPath: '',
          eventClassfication: '',
          state: '',
          halls_id: '',
          hallName: '',
          userName: '',
          startedDate: '',
          endDate: '',
          groomName: '',
          brideName: '',
          mobileOfGroom: '',
          mobileOfBride: '',
          evnetName: '',
          eventContractorName: '',
          contractNumber: '',
          mobile: '',
          eventClassfication: '',
          memo: ''
        }
      ]
    };
    e;
  }
  handleChangeRangeDate = e => {
    console.log(e);
  };
  handleChangeEventClassfication = e => {
    this.setState({
      inputEventClassfication: e.target.value
    });
  };
  handleChangeContactPath = e => {
    this.setState({
      inputContactPath: e.target.value
    });
  };
  handleChangeDateClassfication = e => {
    this.setState({
      inputDateClassfication: e.target.value
    });
  };
  handleChangeNameClassfication = e => {
    this.setState({
      inputNameClassfication: e.target.value
    });
  };
  handleChangeName = e => {
    this.state({
      inputName: e.target.value
    });
  };
  handleChangeUserID = e => {
    this.state({
      inputUserID: e.target.value
    });
  };
  render() {
    return (
      <SearchBar
        handleChangeContactPath={this.handleChangeContactPath}
        handleChangeDateClassfication={this.handleChangeDateClassfication}
        handleChangeEndDate={this.handleChangeEndDate}
        handleChangeEventClassfication={this.handleChangeEventClassfication}
        handleChangeName={this.handleChangeName}
        handleChangeNameClassfication={this.handleChangeNameClassfication}
        handleChangeStartedDate={this.handleChangeStartedDate}
        handleChangeUserID={this.handleChangeUserID}
      />
    );
  }
}

export default ContractCustomerContainer;
