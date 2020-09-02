import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal3, WPModal4 } from "../../../components";
import { Divider, Tag, Form, Button, Radio } from "antd";
class NewCustomers extends Component {
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
    fetch('http://192.168.64.145:8080/consultationcustomers')
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
    let newData = this.state.data.filter(function (element) {
      if (element.eventClassification === "행사") {
        element.groomName = "행사이름"; //element.groomName = element.eventName(행사이름)
      }
      return element.state === "신규고객";
    });


    return (
      <div>
        <New {...this.state} onChange={this.onChange} newData={newData}
          data={this.state.data}
          details={this.state.details}
          setDetails={this.setDetails} />

      </div >
    );
  }
}

export default NewCustomers;


const columns = [
  {
    title: " 구분 ",
    dataIndex: "eventClassification",
    key: "id",
    width: '90px',
    textAlign: 'center'

  },
  {
    title: "고객명/행사명",
    dataIndex: "groomName",
    key: "id",
    width: '90px',
    textAlign: 'center'
  },
  {
    title: "휴대폰",
    key: "id",
    dataIndex: "mobile",
    width: '90px',
    textAlign: 'center'
  },
  {
    title: "행사예정일",
    key: "id",
    dataIndex: "startedDate",

    width: '120px',
    textAlign: 'center'
  },
  {
    title: "DB경로",
    key: "id",
    dataIndex: "contactPath",

    width: '90px',
    textAlign: 'center'
  },

  {
    title: "담당자",
    dataIndex: "userName",
    key: "id",
    width: '90px',
  },
  {
    title: "등록일",
    dataIndex: "registrationDate",
    key: "id",
    width: '90px',
  },
  {
    title: "상태",
    dataIndex: "state",
    key: "id"
  },
  {
    title: "계약일",
    dataIndex: "contractDate",
    key: "id"
  },
  {
    title: "계약",
    dataIndex: "contractClassification",
    key: "id"
  },

];

const New = props => {
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
      <PageTitle>신규고객</PageTitle>
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
            <td style={{ padding: 15 }}>
              <Radio.Group onChange={props.onChange} value={props.values}>
                <Radio value={"전체"}>전체</Radio>
                <Radio value={"홀드"}>홀드</Radio>
                <Radio value={"가계약"}>가계약</Radio>
                <Radio value={"계약"}>계약</Radio>
                <Radio value={"취소"}>취소</Radio>
                <Radio value={"정산완료"}>정산완료</Radio>
              </Radio.Group>
            </td>
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
              <Button onClick={props.search} >필터링검색</Button>
              <Button onClick={() => console.log(props.details)}> 상세보기검색</Button>
              <Button onClick={() => console.log(props.filterData)} >초기화</Button>
              <Button onClick={() => console.log(props.data)} type="primary">검색</Button>

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
          console.log(e);
          props.setDetails(e);

        }}
      />

      {/* <WPDataTable
                columns={columns}
                data={props.newData}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={e => {
                    setModal(!modal);

                }}
            />
            <WPDataTable
                columns={columns}
                data={props.filterData}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={e => {
                    setModal(!modal);

                }}
            /> */}

      {props.details.eventClassification === "예식" ? <WPModal3
        title="예식상담고객상세보기"
        width={1150}
        isOpen={modal}
        onChange={v => {
          setModal(v)
        }
        }
        data={props.details}
      /> : <WPModal4
          title="행사상담고객상세보기"
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