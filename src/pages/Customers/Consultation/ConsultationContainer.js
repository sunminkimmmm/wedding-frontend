import React, { Component } from 'react';
import ConsultationPresent from './ConsultationPresent';
class ConsultationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStartedDate: '',
      inputEndDate: '',
      inputEventClassification: '',
      inputDateClassification: '',
      inputContactPath: '',
      inputNameClassification: '',
      inputName: '',
      inputUserID: [{ id: '1', name: '이균환' }],
      selectUserID: { id: '', name: '' },
      consultationCustomers: [
        {
          id: 1,
          registrationDate: '',
          contactPath: '',
          eventClassification: 'marry',
          state: 'aaaa',
          halls_id: '',
          hallName: '',
          userName: '',

          groomName: 'bbbb',
          brideName: 'aaa',
          eventDay: '',
          mobileOfGroom: 'q',
          mobileOfBride: 'q',
          evnetName: '',
          eventContractorName: 'marry',
          contractNumber: '',
          mobile: '',
          memo: '',
          checked: false
        },
        {
          id: 2,
          registrationDate: '',
          contactPath: '',
          eventClassification: 'event',
          state: 'aaaa',
          halls_id: '',
          hallName: '',
          userName: '',

          groomName: 'bbbb',
          brideName: 'aaa',
          eventDay: '',
          mobileOfGroom: 'q',
          mobileOfBride: 'q',
          evnetName: '',
          eventContractorName: 'marry',
          contractNumber: '',
          mobile: '123',
          memo: '',
          checked: false
        }
      ],
      checkedItem: []
    };
  }
  async componentDidMount() {
    // const getConsultation = await this.getConsultationCustomers();
  }
  getConsultationCustomers() {
    // const {
    //   inputStartedDate,
    //   inputEndDate,
    //   inputEventClassification,
    //   inputDateClassification,
    //   inputContactPath,
    //   inputNameClassification,
    //   inputName,
    //   selectUserID
    // } = this.state;
    return fetch(`http://192.168.64.145:8080/ping`)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log(err);
      });
  }
  onClickSearch() {
    fetch('http://192/168.64.145:8080/consultation', {
      method: 'get'
    });
  }
  handleChangeCheckBox = e => {
    let index = this.state.checkedItem.indexOf(e.id);
    let newArray = this.state.checkedItem.slice(0);
    if (index != -1) {
      newArray.splice(index);
      this.setState({
        checkedItem: newArray
      });
    } else {
      newArray.push(e.id);
      this.setState({
        checkedItem: newArray
      });
    }
  };
  handleChangeSelectUserID = (id, name) => {
    let newArray = eval('(' + JSON.stringify(this.state.selectUserID) + ')');
    newArray.id = id;
    newArray.name = name;
    this.setState(
      {
        selectUserID: newArray
      },
      () => console.log(this.state.selectUserID)
    );
  };
  handleChangeRangeDate = (date, dateString) => {
    this.setState(
      {
        startedDate: dateString[0],
        endDate: dateString[1]
      },
      () => {
        console.log('startedDate:', this.state.startedDate);
        console.log('endDate:', this.state.endDate);
      }
    );
  };
  handleChangeEventClassification = e => {
    this.setState(
      {
        inputEventClassification: e.target.value
      },
      () =>
        console.log(
          'inputEventClassification:',
          this.state.inputEventClassification
        )
    );
  };
  handleChangeContactPath = e => {
    this.setState(
      {
        inputContactPath: e.target.value
      },
      () => console.log('inputContactPath:', this.state.inputContactPath)
    );
  };
  handleChangeDateClassification = e => {
    this.setState(
      {
        inputDateClassification: e.target.value
      },
      () =>
        console.log(
          'inputDateClassification:',
          this.state.inputDateClassification
        )
    );
  };
  handleChangeNameClassification = e => {
    this.setState(
      {
        inputNameClassification: e.target.value
      },
      () =>
        console.log(
          'inputNameClassification:',
          this.state.inputNameClassification
        )
    );
  };
  handleChangeName = e => {
    this.setState(
      {
        inputName: e.target.value
      },
      () => console.log('inputName:', this.state.inputName)
    );
  };
  handleChangeUserID = e => {
    this.setState(
      {
        inputUserID: e.target.value
      },
      () => console.log('inputUserID:', this.state.inputUserID)
    );
  };
  render() {
    return (
      <ConsultationPresent
        inputStartedDate={this.state.inputStartedDate}
        inputEndDate={this.state.inputEndDate}
        inputEventClassification={this.state.inputEventClassification}
        inputDateClassification={this.state.inputDateClassification}
        inputContactPath={this.state.inputContactPath}
        inputNameClassification={this.state.inputNameClassification}
        inputName={this.state.inputName}
        inputUserID={this.state.inputUserID}
        selectUserID={this.state.selectUserID}
        consultationCustomers={this.state.consultationCustomers}
        handleChangeSelectUserID={this.handleChangeSelectUserID}
        handleChangeRangeDate={this.handleChangeRangeDate}
        handleChangeEventClassification={this.handleChangeEventClassification}
        handleChangeContactPath={this.handleChangeContactPath}
        handleChangeDateClassification={this.handleChangeDateClassification}
        handleChangeNameClassification={this.handleChangeNameClassification}
        handleChangeName={this.handleChangeName}
        handleChangeUserID={this.handleChangeUserID}
        handleChangeCheckBox={this.handleChangeCheckBox}
      />
    );
  }
}

export default ConsultationContainer;
