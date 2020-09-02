import React, { Component } from 'react';
import VisitConsultationPresent from './VisitConsultationPresent';
class VisitConsultationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateClassification: '',
      nameClassification: '',
      startDate: '',
      endDate: '',
      inputName: '',
      visitConsultation: [
        {
          id: '',
          mobile: '1',
          consultationDate: '1',
          consultationClassification: '',
          visitClassification: '',
          visitDate: '',
          visit: '',
          contents: '',
          manager: '',
          unregisteredCustomerName: '',
          consultationCustomer_ID: '1',
          contractCustomer_ID: ''
        }
      ]
    };
  }
  handleChangeDateClassification = e => {
    this.setState({
      dateClassification: e.target.value
    });
  };
  handleChangeNameClassfication = e => {
    this.setState({
      nameClassification: e.target.value
    });
  };
  handleChangeRangeDate = (date, dateString) => {
    this.setState({
      startedDate: dateString[0],
      endDate: dateString[1]
    });
  };
  handleChangeInputName = e => {
    this.setState = {
      inputName: e.target.value
    };
  };
  render() {
    return (
      <VisitConsultationPresent
        inputName={this.state.inputName}
        handleChangeDateClassification={this.handleChangeDateClassification}
        handleChangeNameClassfication={this.handleChangeNameClassfication}
        handleChangeRangeDate={this.handleChangeRangeDate}
        handleChangeInputName={this.handleChangeInputName}
        visitConsultation={this.state.visitConsultation}
      />
    );
  }
}

export default VisitConsultationContainer;
