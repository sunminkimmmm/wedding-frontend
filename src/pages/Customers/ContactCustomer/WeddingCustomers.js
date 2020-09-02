import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal } from "../../../components";
import { Divider, Tag, Form, Button } from "antd";

class TotalContactCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      values: '',
      sta: true,
      details: [],
      toggle: false,
      idx: '',
      idKey: ''
    }
  }
  setToggles = e => {
    console.log('수정')
    this.setState({ toggle: !this.state.toggle })
    const url = "http://192.168.64.145:8080/contractcustomers/" + this.state.idKey;
    const promise = fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // userName: this.state.data[this.state.idx].userName
        eventClassification: "예식",
        contractDate: "2019-08-25",
        contractClassification: this.state.data[this.state.idx].contractClassification,
        contactPath: this.state.data[this.state.idx].contactPath,
        userName: this.state.data[this.state.idx].userName,
        address1: "47111",
        address2: "성지로 122번길 59-12",
        address3: "협성베스트하우스 102호",
        hallName: "다빈치",
        menuName: "예식뷔페",
        adultCharge: 33000,
        childCharge: 21000,
        paymentAssuranceCount: 30,
        contractMemo: this.state.data[this.state.idx].contractMemo,
        groomName: this.state.data[this.state.idx].groomName,
        brideName: this.state.data[this.state.idx].brideName,
        motherNameOfGroom: this.state.data[this.state.idx].motherNameOfGroom,
        fatherNameOfGroom: this.state.data[this.state.idx].fatherNameOfGroom,
        motherNameOfBride: this.state.data[this.state.idx].motherNameOfBride,
        fatherNameOfBride: this.state.data[this.state.idx].fatherNameOfBride,
        parentGroomRelations: this.state.data[this.state.idx].parentGroomRelations,
        parentBrideRelations: this.state.data[this.state.idx].parentBrideRelations,
        mobileOfGroom: "010-0000-0000",
        mobileOfBride: "010-0000-0000",
        emailOfGroom: "email@email.com",
        emailOfBride: "email@email.com",
        mealTicketCountOfGroom: "15",
        mealTicketCountOfBride: "15",
        estimatedAttendanceNumbers: 30
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    return promise;
  };
  handleChangeState = (index, event) => {
    const updateData = this.state.data.slice(0);
    updateData[index][event.target.name] = event.target.value;
    this.setState({ data: updateData });
  }
  handleChangeState2 = (index, event) => {
    this.setState({ idKey: this.state.data[index].id })
    const updateData = this.state.data.slice(0);
    updateData[index]["userName"] = event;
    this.setState({ data: updateData });
  }
  handleChangeState3 = (index, event) => {
    const updateData = this.state.data.slice(0);
    updateData[index]["hallName"] = event;
    this.setState({ data: updateData });
  }
  handleChangeState4 = (index, event) => {
    const updateData = this.state.data.slice(0);
    updateData[index]["parentGroomRelations"] = event;
    this.setState({ data: updateData });
  }
  handleChangeState5 = (index, event) => {
    const updateData = this.state.data.slice(0);
    updateData[index]["parentBrideRelations"] = event;
    this.setState({ data: updateData });
  }
  handleChangeState6 = (index, event) => {
    const updateData = this.state.data.slice(0);
    updateData[index]["hall_StartDate"] = event;
    this.setState({ data: updateData });
  }
  setDetails = (e) => {
    this.setState({ details: e })
  }
  setToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  setIdx = (a) => {
    this.setState({ idx: a })
  }
  setIdkey = (e) => {
    this.setState({ idKey: e })
  }
  componentDidMount() {
    this.fetchQuotes()
  }
  async fetchQuotes() {
    fetch('http://192.168.64.145:8080/contractcustomers')
      // .then(res => console.log(res))
      .then(res => res.json())
      .then(json => json.response)
      // .then(res => console.log(res))
      // .then(res => console.log(res))
      .then(response => this.setState({
        data: response
      }))
      .catch(e => console.log(e));
    console.log(this.state.data)
  }
  setDetails = (e) => {
    this.setState({ details: e })
  }
  render() {



    return (
      <div>
        <Wedding {...this.state} onChange={this.onChange} values={this.state.values} details={this.state.details}
          sta={this.state.sta} search={this.search}
          setDetails={this.setDetails} setToggle={this.setToggle} toggle={this.state.toggle}
          handleChangeState2={this.handleChangeState2} handleChangeState3={this.handleChangeState3}
          handleChangeState4={this.handleChangeState4} handleChangeState5={this.handleChangeState5}
          handleChangeState6={this.handleChangeState6} setToggles={this.setToggles}
          handleChangeState={this.handleChangeState} setIdx={this.setIdx} idx={this.state.idx} idKey={this.state.idKey} setIdkey={this.setIdkey} data={this.state.data}
        />

      </div>
    );
  }
}

export default TotalContactCustomer;

const columns = [
  {
    title: " 구분 ",
    dataIndex: "eventClassification",
    key: "eventClassification",
    width: '60px',
    textAlign: 'center'

  },
  {
    title: "고객명/행사명",
    dataIndex: "groomName",
    key: "groomName",
    width: '80px',
    textAlign: 'center'
  },
  {
    title: "행사일",
    key: "eventScheduleListVOs",
    dataIndex: "eventScheduleListVOs",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.startDate
          return (
            color
          );
        })}
      </span>
    ),
    width: '60px',
    textAlign: 'center'
  },
  {
    title: "시간",
    key: "eventScheduleListVOs",
    dataIndex: "eventScheduleListVOs",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.startDate
          return (
            color
          );
        })}
      </span>
    ),
    width: '60px',
    textAlign: 'center'
  },
  {
    title: "홀명",
    key: "eventScheduleListVOs",
    dataIndex: "eventScheduleListVOs",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.hallName
          return (
            color
          );
        })}
      </span>
    ),
    width: '80px',
    textAlign: 'center'
  },

  {
    title: "메뉴",
    dataIndex: "menuName",
    key: "menuName"
  },
  // {
  //     title: "보증인원",
  //     dataIndex: "address",
  //     key: "address"
  // },
  {
    title: "DB경로",
    dataIndex: "contactPath",
    key: "contactPath"
  },
  {
    title: "담당자",
    dataIndex: "userName",
    key: "userName"
  },
  {
    title: "계약일",
    dataIndex: "contractDate",
    key: "contractDate"
  },
  {
    title: "상태",
    dataIndex: "contractClassification",
    key: "contractClassification"
  },

];

const Wedding = props => {
  const [modal, setModal] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22 }
    }
  };
  return (
    <div>
      <PageTitle>예식고객</PageTitle>
      <Divider />
      <table
        border="1"
        style={{
          border: "1px solid #f3f3f3",
          width: "100%",
          marginTop: 15,
          marginBottom: 15
        }}
      >
        <tbody>
          <tr>
            <th width="12%" style={{ padding: 15, backgroundColor: "#fafafa" }}>
              Header
            </th>
            <td style={{ padding: 15 }}>Content</td>
          </tr>
          <tr>
            <th style={{ padding: 15, backgroundColor: "#fafafa" }}>Header</th>
            <td style={{ padding: 15 }}>Content</td>
          </tr>
          <tr>
            <th style={{ padding: 15, backgroundColor: "#fafafa" }}>Header</th>
            <td style={{ padding: 15 }}>Content</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" style={{ padding: 10, textAlign: "right" }}>
              <Button onClick={() => console.log(props.data)} >초기화</Button>
              <Button onClick={() => console.log(props.newData)} type="primary">검색</Button>
            </td>
          </tr>
        </tfoot>
      </table>

      <WPDataTable
        columns={columns}
        data={props.data}
        description="No data!"
        pagination={{ pageSize: 50 }}
        onClick={(e, a) => {
          setModal(!modal);
          props.setDetails(e);
          props.setIdkey(e.id)
          props.setIdx(a);
        }}

      />
      <WPModal
        title="예식정보 상세보기"
        width={1150}
        isOpen={modal}
        onChange={v => setModal(v)}

        data={props.details}
        setToggle={props.setToggle}
        toggles={props.toggle}
        handleChangeState={props.handleChangeState}
        handleChangeState2={props.handleChangeState2}
        handleChangeState3={props.handleChangeState3}
        handleChangeState4={props.handleChangeState4}
        handleChangeState5={props.handleChangeState5}
        handleChangeState6={props.handleChangeState6}
        setToggles={props.setToggles}
        idx={props.idx}
      />
    </div>
  );
};

