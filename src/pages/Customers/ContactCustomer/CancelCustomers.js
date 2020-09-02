import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal, WPModal2 } from "../../../components";
import { Divider, Tag, Form, Button } from "antd";

class CancelCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      details: []
    }
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
    // let newData = this.state.data.filter(function (element) {
    //   return element.contractClassification === "취소";

    // });
    let newData = this.state.data.filter(function (element) {
      if (element.eventClassification === "행사") {
        element.groomName = "행사이름"; //element.groomName = element.eventName(행사이름)
      } else {
        element.groomName = element.groomName + " " + element.brideName
      }
      return element.contractClassification === "취소";
    });

    console.log(newData)

    return (
      <div>
        <Cancel {...this.state} newData={newData} details={this.state.details} setDetails={this.setDetails} />

      </div>
    );
  }
}

export default CancelCustomers;


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
    width: '90px',
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

const Cancel = props => {
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
      <PageTitle>취소고객</PageTitle>
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
        data={props.newData}
        description="No data!"
        pagination={{ pageSize: 50 }}
        onClick={e => {
          setModal(!modal);
          props.setDetails(e);

        }}
      />
      {props.details.eventClassification === "예식" ? <WPModal
        title="고객정보 상세보기"
        width={1150}
        isOpen={modal}
        onChange={v => {
          setModal(v)
        }
        }
        data={props.details}
      /> : <WPModal2
          title="고객정보 상세보기"
          width={1150}
          isOpen={modal}
          onChange={v => {
            setModal(v)
          }
          }
          data={props.details}
        />}
    </div>
  );
};