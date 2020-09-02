import React, { Component } from "react";
import MarryPresenter from "./MarryPresenter";

class MarryContainer extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const day = date.getDate();
    const month =
      date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const now = year + "-" + month + "-" + day;
    this.state = {
      eventClassification: "예식",
      contractDate: now,
      contractClassification: "",
      dbPath: "",
      userName: "",
      address1: "",
      address2: "",
      address3: "",
      hallName: "",
      menuName: "",
      adultCharge: "",
      childCharge: "",
      paymentAssuranceCount: "",
      contractMemo: "",
      groomName: "",
      brideName: "",
      motherNameOfGroom: "",
      fatherNameOfGroom: "",
      motherNameOfBride: "",
      fatherNameOfBride: "",
      parentGroomRelations: "",
      parentBrideRelations: "",
      mobileOfGroom: "",
      mobileOfGroom2: "",
      mobileOfBride: "",
      mobileOfBride2: "",
      emailOfGroom: "",
      emailOfBride: "",
      mealTicketCountOfGroom: "",
      mealTicketCountOfBride: "",
      estimatedAttendanceNumbers: "",
      eventDate: now,
      eventHour: "12",
      eventMin: "00",
      eventHall: "",
      marryDate: "",
      eventHalls: [],
      menus: [],
      menu: {},
      users: [],
      menuPrice: "",
      paymentDate: now,
      accountClassification: "",
      amount: "",
      paymentClassification: "",
      paymentMemo: ""
    };
  }
  async componentDidMount() {
    const users = await this.getUsers();
    const eventHalls = await this.getEventHalls();
    const menus = await this.getMenus();
    this.setEventDate();
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
  async getMenus() {
    const url = "http://192.168.64.145:8080/menu";
    const newMenu = this.state.menus.splice(0);
    const menus = fetch(url)
      .then(res => res.json())
      .then(json => json.response)
      .then(response => {
        response.map(item => {
          newMenu.push(item);
        });
        return newMenu;
      })
      .then(newMenus => {
        this.setState({
          menus: newMenu
        });
        return newMenus;
      });
  }
  onClickSubmitButton = e => {
    const url = "http://192.168.64.145:8080/contractcustomers";
    const promise = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventClassification: "예식",
        contractDate: this.state.contractDate,
        contractClassification: this.state.contractClassification,
        contactPath: this.state.dbPath,
        userName: this.state.user,
        adress1: this.state.address1,
        address2: this.state.address2,
        address3: this.state.address3,
        menuName: this.state.menu.menuName,
        adultCharge: this.state.menu.adultCharge,
        childCharge: this.state.menu.childCharge,
        paymentAssuranceCount: this.state.paymentAssuranceCount,
        contractMemo: this.state.contractMemo,
        groomName: this.state.groomName,
        brideName: this.state.brideName,
        motherNameOfGroom: this.state.motherNameOfGroom,
        fatherNameOfGroom: this.state.fatherNameOfGroom,
        motherNameOfBride: this.state.motherNameOfBride,
        fatherNameOfBride: this.state.fatherNameOfBride,
        parentGroomRelations: this.state.parentGroomRelations,
        parentBrideRelations: this.state.parentBrideRelations,
        mobileOfGroom: this.state.mobileOfGroom + this.state.mobileOfGroom2,
        mobileOfBride: this.state.mobileOfBride + this.state.mobileOfBride2,
        emailOfGroom: this.state.emailOfGroom,
        emailOfBride: this.state.emailOfBride,
        mealTicketCountOfGroom: this.state.mealTicketCountOfGroom,
        mealTicketCountOfBride: this.state.mealTicketCountOfBride,
        estimatedAttendanceNumbers: this.state.estimatedAttendanceNumbers,
        eventScheduleListVOs: [
          {
            hallName: this.state.eventHall,
            startDate: this.state.marryDate,
            endDate: this.state.marryDate
          }
        ],
        paymentDetailsVOs: [
          {
            paymentDate: this.state.paymentDate,
            paymentClassification: this.state.paymentClassification,
            accountClassification: this.state.accountClassification,
            amount: this.state.amount,
            paymentMemo: this.state.paymentMemo
          }
        ]
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    return promise;
  };
  handleChangeContractDate = e => {
    this.setState({
      contractDate: e
    });
  };
  handleChangeUser = e => {
    this.setState({
      user: e.target.value
    });
  };
  handleChangeContractClassification = e => {
    this.setState({
      contractClassification: e.target.value
    });
  };
  handleChangeDbPath = e => {
    this.setState({
      dbPath: e.target.value
    });
  };
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
  handleChangeMotherNameOfGroom = e => {
    this.setState({
      motherNameOfGroom: e.target.value
    });
  };
  handleChangeFatherNameOfGroom = e => {
    this.setState({
      fatherNameOfGroom: e.target.value
    });
  };
  handleChangeMotherNameOfBride = e => {
    this.setState({
      motherNameOfBride: e.target.value
    });
  };
  handleChangeFatherNameOfBride = e => {
    this.setState({
      fatherNameOfBride: e.target.value
    });
  };
  handleChangeParentGroomRelations = e => {
    this.setState({
      parentGroomRelations: e.target.value
    });
  };
  handleChangeParentBrideRelations = e => {
    this.setState({
      parentBrideRelations: e.target.value
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
  handleChangeEmailOfGroom = e => {
    this.setState({
      emailOfGroom: e.target.value
    });
  };
  handleChangeEmailOfBride = e => {
    this.setState({
      emailOfBride: e.target.value
    });
  };
  handleChangeAddress1 = e => {
    this.setState({
      address1: e.target.value
    });
  };
  handleChangeAddress2 = e => {
    this.setState({
      address2: e.target.value
    });
  };
  handleChangeAddress3 = e => {
    this.setState({
      address3: e.target.value
    });
  };
  handleChangeEventHall = e => {
    this.setState({
      eventHall: e.target.value
    });
  };
  handleChangeEventDate = e => {
    console.log(e);

    this.setState({
      eventDate: e
    });
    this.setEventDate();
  };
  handleChangeEventHour = e => {
    console.log(e);

    this.setState({
      eventHour: e.target.value
    });
    this.setEventDate();
  };
  handleChangeEventMin = e => {
    console.log(e);
    this.setState({
      eventMin: e.target.value
    });
    this.setEventDate();
  };
  setEventDate = () => {
    this.setState(
      {
        marryDate:
          this.state.eventDate +
          "T" +
          this.state.eventHour +
          ":" +
          this.state.eventMin
      },
      console.log(this.state.marryDate)
    );
  };
  handleChangeMenu = e => {
    const value = e.target.value;
    const item = this.state.menus.map(item => {
      if (item.id === value) {
        this.setState({
          menu: item
        });
      }
      return item;
    });
  };
  handleChangeMenuPrice = e => {
    this.setState({
      menuPrice: e.adultCharge
    });
  };
  handleChangeAdultCharge = e => {
    const menu = { ...this.state.menu };
    if (menu !== null) {
      menu.adultCharge = e.target.value;

      this.setState({
        menu: menu
      });
    }
  };
  handleChangeChildCharge = e => {
    const menu = { ...this.state.menu };
    if (menu !== null) {
      menu.childCharge = e.target.value;

      this.setState({
        menu: menu
      });
    }
  };
  handleChangeMealTicketCountOfGroom = e => {
    this.setState({
      mealTicketCountOfGroom: e.target.value
    });
  };
  handleChangeMealTicketCountOfBride = e => {
    this.setState({
      mealTicketCountOfBride: e.target.value
    });
  };
  handleChangeEstimatedAttendanceNumbers = e => {
    this.setState({
      estimatedAttendanceNumbers: e.target.value
    });
  };
  handleChangePaymentAssuranceCount = e => {
    this.setState({
      paymentAssuranceCount: e.target.value
    });
  };
  handleChangeContractMemo = e => {
    this.setState({
      contractMemo: e.target.value
    });
  };
  handleChangePaymentDate = e => {
    this.setState({
      paymentDate: e
    });
  };
  handleChangePaymentClassification = e => {
    this.setState({
      paymentClassification: e.target.value
    });
  };
  handleChangeAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };
  handleChangeAccountClassification = e => {
    this.setState({
      accountClassification: e.target.value
    });
  };
  handleChangePaymentMemo = e => {
    this.setState({
      paymentMemo: e.target.value
    });
  };

  render() {
    return (
      <MarryPresenter
        {...this.state}
        handleChangeContractDate={this.handleChangeContractDate}
        handleChangeUser={this.handleChangeUser}
        handleChangeContractClassification={
          this.handleChangeContractClassification
        }
        handleChangeDbPath={this.handleChangeDbPath}
        handleChangeAddress1={this.handleChangeAddress1}
        handleChangeAddress2={this.handleChangeAddress2}
        handleChangeAddress3={this.handleChangeAddress3}
        handleChangeEventHall={this.handleChangeEventHall}
        handleChangeEventDate={this.handleChangeEventDate}
        handleChangeEventHour={this.handleChangeEventHour}
        handleChangeEventMin={this.handleChangeEventMin}
        setStartDate={this.setStartDate}
        handleChangeMenu={this.handleChangeMenu}
        handleChangeContractMemo={this.handleChangeContractMemo}
        handleChangeAdultCharge={this.handleChangeAdultCharge}
        handleChangeChildCharge={this.handleChangeChildCharge}
        handleChangePaymentAssuranceCount={
          this.handleChangePaymentAssuranceCount
        }
        handleChangePaymentDate={this.handleChangePaymentDate}
        handleChangePaymentClassification={
          this.handleChangePaymentClassification
        }
        handleChangeAmount={this.handleChangeAmount}
        handleChangeAccountClassification={
          this.handleChangeAccountClassification
        }
        handleChangePaymentMemo={this.handleChangePaymentMemo}
        handleChangeGroomName={this.handleChangeGroomName}
        handleChangeBrideName={this.handleChangeBrideName}
        handleChangeMotherNameOfGroom={this.handleChangeMotherNameOfGroom}
        handleChangeFatherNameOfGroom={this.handleChangeFatherNameOfGroom}
        handleChangeMotherNameOfBride={this.handleChangeMotherNameOfBride}
        handleChangeFatherNameOfBride={this.handleChangeFatherNameOfBride}
        handleChangeParentGroomRelations={this.handleChangeParentGroomRelations}
        handleChangeParentBrideRelations={this.handleChangeParentBrideRelations}
        handleChangeMobileOfGroom={this.handleChangeMobileOfGroom}
        handleChangeMobileOfBride={this.handleChangeMobileOfBride}
        handleChangeMobileOfGroom2={this.handleChangeMobileOfGroom2}
        handleChangeMobileOfBride2={this.handleChangeMobileOfBride2}
        handleChangeEmailOfGroom={this.handleChangeEmailOfGroom}
        handleChangeEmailOfBride={this.handleChangeEmailOfBride}
        handleChangeMealTicketCountOfGroom={
          this.handleChangeMealTicketCountOfGroom
        }
        handleChangeMealTicketCountOfBride={
          this.handleChangeMealTicketCountOfBride
        }
        handleChangeEstimatedAttendanceNumbers={
          this.handleChangeEstimatedAttendanceNumbers
        }
        onClickSubmitButton={this.onClickSubmitButton}
      />
    );
  }
}

export default MarryContainer;
