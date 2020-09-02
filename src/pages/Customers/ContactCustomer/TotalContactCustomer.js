import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal, WPModal2 } from "../../../components";
import { Divider, Tag, Form, Button, Radio } from "antd";
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

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            values: e.target.value,
        });
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
    search = (e) => {
        this.setState({ sta: !this.state.sta });

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
    render() {
        let newData = this.state.data.filter(function (element) {
            if (element.eventClassification === "행사") {
                element.groomName = "행사이름"; //element.groomName = element.eventName(행사이름)
            }
            return element;
        });

        let data = this.state.values;

        let filterData = this.state.data.filter(function (element) {
            if (element.contractClassification === data) {
                return element;
            }

        });
        return (
            <div>
                <TotalCustomers {...this.state} newData={newData} filterData={filterData} onChange={this.onChange} values={this.state.values} details={this.state.details}
                    sta={this.state.sta} search={this.search}
                    setDetails={this.setDetails} setToggle={this.setToggle} toggle={this.state.toggle}
                    handleChangeState2={this.handleChangeState2} handleChangeState3={this.handleChangeState3}
                    handleChangeState4={this.handleChangeState4} handleChangeState5={this.handleChangeState5}
                    handleChangeState6={this.handleChangeState6} setToggles={this.setToggles}
                    handleChangeState={this.handleChangeState} setIdx={this.setIdx} idx={this.state.idx} idKey={this.state.idKey} setIdkey={this.setIdkey} />

            </div >
        );
    }
}

export default TotalContactCustomer;


const columns = [
    {
        title: " 구분 ",
        dataIndex: "eventClassification",
        key: "id",
        width: '60px',
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
        title: "행사일",
        key: "id",
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
        key: "id",
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
        key: "id",
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
        key: "id"
    },
    // {
    //     title: "보증인원",
    //     dataIndex: "address",
    //     key: "address"
    // },
    {
        title: "DB경로",
        dataIndex: "contactPath",
        key: "id"
    },
    {
        title: "담당자",
        dataIndex: "userName",
        key: "id"
    },
    {
        title: "계약일",
        dataIndex: "contractDate",
        key: "id"
    },
    {
        title: "상태",
        dataIndex: "contractClassification",
        key: "id"
    },

];

const TotalCustomers = props => {
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
            <PageTitle>전체고객</PageTitle>
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
                            <Button onClick={() => console.log(props.idKey)} >idKey</Button>
                            <Button onClick={() => console.log(props.data[props.idx].userName)} >idx</Button>
                            <Button onClick={() => console.log(props.newData)} type="primary">검색</Button>

                        </td>
                    </tr>
                </tfoot>
            </table>
            {props.sta ? <WPDataTable
                columns={columns}
                data={props.newData}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={(e, a) => {
                    setModal(!modal);
                    console.log(e);
                    props.setIdkey(e.id)
                    props.setDetails(e);
                    props.setIdx(a);

                }}
            /> : <WPDataTable
                    columns={columns}
                    data={props.filterData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={e => {
                        setModal(!modal);
                    }}
                />}

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

            {props.details.eventClassification === "예식" ? <WPModal
                title="고객정보 상세보기"
                width={1150}
                isOpen={modal}
                onChange={v => {
                    setModal(v)
                }
                }
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
            /> : <WPModal2
                    title="고객정보 상세보기"
                    width={1150}
                    isOpen={modal}
                    onChange={v => {
                        setModal(v)
                    }
                    }
                    data={props.details}
                    setToggle={props.setToggle}
                    toggles={props.toggle}

                />}

        </div>
    );
};

