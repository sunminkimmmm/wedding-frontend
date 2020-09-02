/**
 *
 */

import React, { Component } from "react";
import Subpage01Presenter from "./Subpage01Presenter";
import { format } from "url";
import { request } from "https";

class Subpage01Container extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const day = date.getDate();
    const month =
      date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const now = year + "-" + month + "-" + day;
    this.state = {
      contractDate: now,
      user: "",
      users: [],
      contract: "",
      dbPath: "",
      eventClassification: "event",
      eventName: "",
      contractor: "",
      contact: "",
      moblie: "",
      address1: "",
      address2: "",
      address3: "",
      eventDate: now,
      startHour: "12",
      startMin: "00",
      endHour: "12",
      endMin: "00",
      eventHall: "",
      eventHalls: [],
      menus: [],
      menu: {},
      eventStartDate: "",
      eventEndDate: "",
      contractMemo: "",
      PaymentAssuranceCount: "",
      paymentDate: now,
      paymentClassification: "",
      amount: "",
      accountClassification: "",
      paymentMemo: "",
      emailOfGroom: "",
      emailOfBride: ""
    };
  }
  async componentDidMount() {
    const users = await this.getUsers();
    const eventHalls = await this.getEventHalls();
    const menus = await this.getMenus();
    this.setStartDate();
    this.setEndDate();
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
  onClickSubmitButton = e => {
    const url = "http://192.168.64.145:8080/contractcustomers";
    const promise = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventClassification: "행사",
        contractDate: this.state.contractDate,
        contractClassification: this.state.contractClassification,
        contactPath: this.state.dbPath,
        userName: this.state.user,
        adress1: "11111",
        address2: this.state.address1,
        address3: this.state.address2,
        menuName: this.state.menu.menuName,
        adultCharge: this.state.menu.adultCharge,
        childCharge: this.state.menu.childCharge,
        paymentAssuranceCount: this.state.paymentAssuranceCount,
        contractMemo: this.state.contractMemo,
        eventName: this.state.eventName,
        eventScheduleListVOs: [
          {
            hallName: this.state.eventHall,
            startDate: this.state.eventStartDate,
            endDate: this.state.eventEndDate
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
  handleChangeuser = e => {
    this.setState({
      user: e.target.value
    });
  };
  handleChangeContract = e => {
    this.setState({
      contract: e.target.value
    });
  };
  handleChangeDbPath = e => {
    this.setState({
      dbPath: e.target.value
    });
  };
  handleChangeEventClassification = e => {
    this.setState({
      eventClassification: e.target.value
    });
  };
  handleChangeEventName = e => {
    this.setState({
      eventName: e.target.value
    });
  };
  handleChangeContractor = e => {
    this.setState({
      contractor: e.target.value
    });
  };
  handleChangeContact = e => {
    this.setState({
      contact: e.target.value
    });
  };
  handleChangeMobile = e => {
    this.setState({
      mobile: e.target.value
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
    this.setState(
      {
        eventDate: e
      },
      () => this.setStartDate(),
      () => this.setEndDate()
    );
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
  setStartDate = () => {
    this.setState({
      eventStartDate:
        this.state.eventDate +
        "T" +
        this.state.startHour +
        ":" +
        this.state.startMin
    });
  };
  setEndDate = () => {
    this.setState({
      eventEndDate:
        this.state.eventDate +
        "T" +
        this.state.endHour +
        ":" +
        this.state.endMin
    });
  };
  handleChangeMenu = e => {
    const value = e.target.value;

    this.state.menus.map(item => {
      if (item.id === value) {
        this.setState({
          menu: item
        });
      }
    });
  };
  handleChangeContractMemo = e => {
    this.setState({
      contractMemo: e.target.value
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
  handleChangePaymentAssuranceCount = e => {
    this.setState({
      paymentAssuranceCount: e.target.value
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
      <Subpage01Presenter
        {...this.state}
        handleChangeContract={this.handleChangeContract}
        handleChangeContractDate={this.handleChangeContractDate}
        handleChangeUser={this.handleChangeUser}
        handleChangeDbPath={this.handleChangeDbPath}
        handleChangeEventClassification={this.handleChangeEventClassification}
        handleChangeEventName={this.handleChangeEventName}
        handleChangeContractor={this.handleChangeContractor}
        handleChangeContact={this.handleChangeContact}
        handleChangeMobile={this.handleChangeMobile}
        handleChangeAddress1={this.handleChangeAddress1}
        handleChangeAddress2={this.handleChangeAddress2}
        handleChangeAddress3={this.handleChangeAddress3}
        handleChangeEventHall={this.handleChangeEventHall}
        handleChangeEventDate={this.handleChangeEventDate}
        handleChangeStartHour={this.handleChangeStartHour}
        handleChangeEndHour={this.handleChangeEndHour}
        handleChangeStartMin={this.handleChangeStartMin}
        handleChangeEndMin={this.handleChangeEndMin}
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
        onClickSubmitButton={this.onClickSubmitButton}
      />
    );
  }
}

export default Subpage01Container;
