import React, { Component } from "react";
import ConsultationModalPresenter from "./ConsultationModalPresenter";

class ConsultationModalContainer extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const day = date.getDate();
    const month =
      date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const now = year + "-" + month + "-" + day;

    this.state = {
      brideName: "",
      contractNumber: "010",
      contractNumber2: "",
      contractorName: "",
      contactPath: "",
      endDate: "",
      startedDate: "",
      startHour: "12",
      startMin: "00",
      endDate: "",
      endHour: "12",
      endMin: "00",
      eventDate: now,
      eventClassification: "예식",
      eventContractorName: "",
      eventName: "",
      eventType: "",
      groomName: "",
      eventHall: {},
      eventHalls: [],
      memo: "비고",
      mobile: "010",
      mobile2: "",
      mobileOfBride: "010",
      mobileOfBride2: "",
      mobileOfGroom: "",
      mobileOfGroom2: "",
      registrationDate: now,
      state: "신규",
      userName: "",
      users_ID: "",
      users: [],
      consultationClassification: "전화",
      consultationDate: now,
      contents: "",
      unregisteredCustomerName: "미등록고객명",
      visitClassification: "",
      visitDateTime: "",
      visitDate: now,
      visitHour: "12",
      visitMin: "00"
    };
  }
  async componentDidMount() {
    const users = await this.getUsers();
    const eventHalls = await this.getEventHalls();
    this.setStartDate();
    this.setEndDate();
    this.setVisitDate();
  }
  async getUsers() {
    const newUsers = this.state.users.splice(0);
    const url = "http://192.168.64.145:8080/users";
    const users = fetch(url)
      .then(res => res.json())
      .then(json => json.response)
      .then(response => {
        response.map(item => {
          newUsers.push(item);
        });
        return newUsers;
      })
      .then(newUsers => {
        this.setState({
          users: newUsers
        });
      });
  }
  async getEventHalls() {
    const newEventHall = this.state.eventHalls.splice(0);
    const url = "http://192.168.64.145:8080/halls";
    const eventHall = fetch(url)
      .then(res => res.json())
      .then(json => json.response)
      .then(response => {
        response.map(item => {
          newEventHall.push(item);
        });
        return newEventHall;
      })
      .then(newEventHall => {
        this.setState({
          eventHalls: newEventHall
        });
        return this.state.eventHall;
      });
    return eventHall;
  }
  onClickSubmit = e => {
    const url = "http://192.168.64.145:8080/consultationcustomers";
    const submit = fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brideName: this.state.brideName,
        contactNumber:
          this.state.eventClassification === "행사"
            ? this.state.contractNumber + this.state.contractNumber2
            : "",
        contactPath: this.state.contactPath,
        endDate: this.state.endDate,
        eventClassification: this.state.eventClassification,
        eventContractorName:
          this.state.eventClassification == "행사"
            ? this.state.eventContractorName
            : "",
        eventName:
          this.state.eventClassification == "행사" ? this.state.eventName : "",
        eventType:
          this.state.eventClassification == "행사" ? this.state.eventType : "",
        groomName:
          this.state.eventClassification == "예식" ? this.state.groomName : "",
        hallName: this.state.eventHall.hallName,
        halls_ID: this.state.eventHall.id,
        memo: this.state.eventClassification == "예식" ? this.state.memo : "",
        mobile:
          this.state.eventClassification == "행사"
            ? this.state.mobile + this.state.mobile2
            : "",
        mobileOfBride:
          this.state.eventClassification == "예식"
            ? this.state.mobileOfBride + this.state.mobileOfBride2
            : "",
        mobileOfGroom:
          this.state.eventClassification == "예식"
            ? this.state.mobileOfGroom + this.state.mobileOfGroom2
            : "",
        registrationDate: this.state.registrationDate,
        startedDate:
          this.state.eventClassification == "예식"
            ? this.state.startedDate
            : "",
        state: "신규",
        userName: this.state.userName,
        users_ID: null
      }),
      consultationDetailsVOs: {
        consultationClassification: this.state.consultationClassification,
        consultationDate: this.state.consultationDate,
        contents: this.state.contents,
        unregisteredCustomerName: this.state.unregisteredCustomerName,
        visitClassification: this.state.visitClassification,
        visitDate: this.state.eventClassification
      }
    }).then(res => console.log(res));
  };

  handleChangeUsers = e => {
    this.state.users.map((item, index) => {
      if (item.id === e.target.value) {
        this.setState({
          users_ID: item.id,
          userName: item.userName
        });
      }
    });
  };
  handleChangeContactPath = e => {
    this.setState({
      contactPath: e.target.value
    });
  };
  handleChangeEventClassification = e => {
    this.setState({
      eventClassification: e.target.value
    });
  };
  handleChangeEventDate = e => {
    this.setState({
      eventDate: e
    });
    this.setStartDate();
    this.setEndDate();
  };
  handleChangeEventHall = e => {
    this.state.eventHalls.map((item, index) => {
      if (item.id == e.target.value) {
        this.setState({
          eventHall: item
        });
      }
    });
  };
  handleChangeStartHour = e => {
    this.setState({
      startHour: e.target.value
    });
    this.setStartDate();
  };
  handleChangeStartMin = e => {
    this.setState({
      startMin: e.target.value
    });
    this.setStartDate();
  };
  handleChangeEndHour = e => {
    this.setState({
      endHour: e.target.value
    });
    this.setEndDate();
  };
  handleChangeEndMin = e => {
    this.setState({
      endMin: e.target.value
    });
    this.setEndDate();
  };
  setStartDate() {
    this.setState({
      startedDate:
        this.state.eventDate +
        "T" +
        this.state.startHour +
        ":" +
        this.state.startMin
    });
  }
  setEndDate() {
    this.setState({
      endDate:
        this.state.eventDate +
        "T" +
        this.state.endHour +
        ":" +
        this.state.endMin
    });
  }
  handleChangeGroomName = e => {
    this.setState({
      groomName: e.target.value
    });
  };
  handleChangeBrideName = e => {
    this.setState({
      brideName: e.target.value
    });
  };
  handleChangeMobileOfGroom = e => {
    this.setState({
      mobileOfGroom: e.target.value
    });
  };
  handleChangeMobileOfGroom2 = e => {
    this.setState({
      mobileOfGroom2: e.target.value
    });
  };
  handleChangeMobileOfBride = e => {
    this.setState({
      mobileOfBride: e.target.value
    });
  };
  handleChangeMobileOfBride2 = e => {
    this.setState({
      mobileOfBride2: e.target.value
    });
  };
  handleChangeMobile = e => {
    this.setState({
      mobile: e.target.value
    });
  };
  handleChangeMobile2 = e => {
    this.setState({
      mobile2: e.target.value
    });
  };
  handleChangeMemo = e => {
    this.setState({
      memo: e.target.value
    });
  };
  handleChangeContractNumber = e => {
    this.setState({
      contractNumber: e.target.value
    });
  };
  handleChangeContractNumber2 = e => {
    this.setState({
      contractNumber2: e.target.value
    });
  };
  handleChangeEventType = e => {
    this.setState({
      eventType: e.target.value
    });
  };
  handleChangeEventContractorName = e => {
    this.setState({
      eventContractorName: e.target.value
    });
  };
  handleChangeContractorName = e => {
    this.setState({
      contractorName: e.target.value
    });
  };
  handleChangeConsultationDate = e => {
    this.setState({
      consultationDate: e
    });
  };
  handleChangeConsultationClassification = e => {
    this.setState({
      consultationClassification: e.target.value
    });
  };
  handleChangeVisitDate = e => {
    this.setState({
      visitDate: e
    });
  };
  handleChangeVisitHour = e => {
    this.setState({
      visitHour: e.target.value
    });
  };
  handleChangeVisitMin = e => {
    this.setState({
      visitMin: e.target.value
    });
  };
  setVisitDate() {
    this.setState({
      visitDateTime:
        this.state.visitDate +
        "T" +
        this.state.visitHour +
        ":" +
        this.statevisitMin
    });
  }
  handleChangeVisitClassification = e => {
    this.setState({
      visitClassification: e.target.value
    });
  };
  handleChangeContents = e => {
    this.setState({
      contents: e.target.value
    });
  };
  render() {
    return (
      <ConsultationModalPresenter
        {...this.state}
        handleChangeUsers={this.handleChangeUsers}
        handleChangeContactPath={this.handleChangeContactPath}
        handleChangeEventClassification={this.handleChangeEventClassification}
        handleChangeEventDate={this.handleChangeEventDate}
        handleChangeEventHall={this.handleChangeEventHall}
        handleChangeStartHour={this.handleChangeStartHour}
        handleChangeStartMin={this.handleChangeStartMin}
        handleChangeEndHour={this.handleChangeEndHour}
        handleChangeEndMin={this.handleChangeEndMin}
        handleChangeGroomName={this.handleChangeGroomName}
        handleChangeBrideName={this.handleChangeBrideName}
        handleChangeMobileOfGroom={this.handleChangeMobileOfGroom}
        handleChangeMobileOfGroom2={this.handleChangeMobileOfGroom2}
        handleChangeMobileOfBride={this.handleChangeMobileOfBride}
        handleChangeMobileOfBride2={this.handleChangeMobileOfBride2}
        handleChangeMobile={this.handleChangeMobile}
        handleChangeMobile2={this.handleChangeMobile2}
        handleChangeMemo={this.handleChangeMemo}
        handleChangeContractNumber={this.handleChangeContractNumber}
        handleChangeContractNumber2={this.handleChangeContractNumber2}
        handleChangeEventType={this.handleChangeEventType}
        handleChangeEventContractorName={this.handleChangeEventContractorName}
        handleChangeContractorName={this.handleChangeContractorName}
        handleChangeConsultationDate={this.handleChangeConsultationDate}
        handleChangeConsultationClassification={
          this.handleChangeConsultationClassification
        }
        handleChangeVisitDate={this.handleChangeVisitDate}
        handleChangeVisitHour={this.handleChangeVisitHour}
        handleChangeVisitMin={this.handleChangeVisitMin}
        handleChangeVisitClassification={this.handleChangeVisitClassification}
        handleChangeContents={this.handleChangeContents}
        onClickSubmit={this.onClickSubmit}
      />
    );
  }
}

export default ConsultationModalContainer;
