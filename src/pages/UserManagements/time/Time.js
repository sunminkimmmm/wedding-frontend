import React, { Component } from 'react';
import { WPDataTable2, WPDataTable3, PageTitle, WPModal10, WPModal11 } from "../../../components";
import { Divider, Tag, Form, Button, Select, Input, Table } from "antd";
import RadioGroup from 'antd/lib/radio/group';
import { backend_url_dev } from "../../../Utils";
const { Option } = Select;

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            detailId: '',
            details: [],
            toggle: false,
            searchWord: '',
            searchSelect: '',
            searchCheck: false,
            halls_ID: 'KRBS000001',
            time: '',
            monthData: [],
            inputTime: '',
            inputMonth: '',
            h: '',
            m: ''
        }
    }

    componentDidMount() {
        this.fetchQuotes()
    }
    async fetchQuotes() {
        fetch(`${backend_url_dev}/hallstimeconfigurations`)
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
    RegisterTime = e => {
        console.log("타임")
        const url = `${backend_url_dev}/hallstimeconfigurations`
        const promise = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                halls_ID: this.state.halls_ID,
                time: this.state.time,
            })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    };
    updateUser = e => {
        this.setState({ toggle: !this.state.toggle })

        const url = `${backend_url_dev}/hallstimeconfigurations/` + this.state.detailId;
        const promise = fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                halls_ID: this.state.halls_ID,
                time: this.state.time,
            })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    };

    setDetailId = (e) => {
        this.setState({ detailId: e })
    }
    setDetails = (e) => {
        this.setState({ details: e })
    }
    setMonth = (mon) => {
        this.setState({ month: mon })
    }

    dataCheck = () => {
        console.log(this.state.data)
        console.log(this.state.h)
        console.log(this.state.m)
        console.log(this.state.detailId)
        console.log(this.state.time)

    }
    setMonthData = (a) => {
        this.setState({ monthData: a })
    }

    handleChangeStateH = (event) => {
        // const updateData = this.state.details;
        // updateData[event] = event
        // this.setState({ update: updateData });
        this.setState({ h: event })

    }
    handleChangeStateM = (event, j) => {
        // const updateData = this.state.details;
        // updateData[event] = event
        // this.setState({ update: updateData });
        this.setState({ m: event })
        this.setState({ time: "2019-" + j + "-04T" + this.state.h + ":" + event + ":00.000+0000" })
    }
    handleChangeState = (event) => {
        const updateData = this.state.monthData;
        updateData[event.target.name] = event.target.value
        this.setState({ update: updateData });
        this.setState({ [event.target.name]: event.target.value })
        this.setState({ time: event.target.value })

    }
    deleteUser = () => {
        const url = "http://192.168.64.145:8080/hallstimeconfigurations/" + this.state.detailId;
        const promise = fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    }
    handleChangeStateH = (event) => {
        // const updateData = this.state.details;
        // updateData[event] = event
        // this.setState({ update: updateData });
        this.setState({ h: event })

    }
    handleChangeStateM = (event) => {
        // const updateData = this.state.details;
        // updateData[event] = event
        // this.setState({ update: updateData });
        this.setState({ m: event })
        this.setState({ time: "2019-" + this.state.monthData + "-04T" + this.state.h + ":" + event + ":00.000+0000" })
    }
    handleChangeStateMonth = (event, j) => {
        // const updateData = this.state.details;
        // updateData[event] = event
        // this.setState({ update: updateData });
        this.setState({ monthData: event })
    }
    render() {
        let JanuaryData = this.state.data.filter(function (element) {
            if (element.time[6] === "1") {
                return element;
            }
        });
        let FebruaryData = this.state.data.filter(function (element) {
            if (element.time[6] === "2") {
                return element;
            }
        });
        let marchData = this.state.data.filter(function (element) {
            if (element.time[6] === "3") {
                return element;
            }
        });
        let aprilData = this.state.data.filter(function (element) {
            if (element.time[6] === "4") {
                return element;
            }
        });
        let mayData = this.state.data.filter(function (element) {
            if (element.time[6] === "5") {
                return element;
            }
        });
        let juneData = this.state.data.filter(function (element) {
            if (element.time[6] === "6") {
                return element;
            }
        });
        let julyData = this.state.data.filter(function (element) {
            if (element.time[6] === "7") {
                return element;
            }
        });
        let augustData = this.state.data.filter(function (element) {
            if (element.time[6] === "8") {
                return element;
            }
        });
        let septemberData = this.state.data.filter(function (element) {
            if (element.time[6] === "9") {
                return element;
            }
        });
        let octoberData = this.state.data.filter(function (element) {
            if (element.time[6] === "10") {
                return element;
            }
        });
        let novemberData = this.state.data.filter(function (element) {
            if (element.time[6] === "11") {
                return element;
            }
        });
        let decemberData = this.state.data.filter(function (element) {
            if (element.time[6] === "12") {
                return element;
            }
        });
        return (

            <div>
                <Times2 handleChangeState={this.handleChangeState} inputTime={this.state.inputTime} RegisterTime={this.RegisterTime} inputMonth={this.state.inputMonth}
                    handleChangeStateH={this.handleChangeStateH} handleChangeStateM={this.handleChangeStateM} handleChangeStateMonth={this.handleChangeStateMonth} />
                <Times dataCheck={this.dataCheck} data={this.state.data} setDetailId={this.setDetailId} setDetails={this.setDetails} details={this.state.details}
                    updateUser={this.updateUser} toggle={this.state.toggle} handleChangeState={this.handleChangeState} detailId={this.state.detailId}
                    deleteUser={this.deleteUser} JanuaryData={JanuaryData} FebruaryData={FebruaryData} marchData={marchData} aprilData={aprilData}
                    mayData={mayData} juneData={juneData} julyData={julyData} augustData={augustData} septemberData={septemberData} octoberData={octoberData}
                    novemberData={novemberData} decemberData={decemberData}
                    monthData={this.state.monthData} setMonthData={this.setMonthData}
                />
            </div>
        );
    }
}

export default Time;

const columns = [
    {
        title: "1월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),

    },

];
const columns2 = [
    {
        title: "2월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns3 = [
    {
        title: "3월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns4 = [
    {
        title: "4월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns5 = [
    {
        title: "5월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns6 = [
    {
        title: "6월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns7 = [
    {
        title: "7월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),

    },

];
const columns8 = [
    {
        title: "8월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns9 = [
    {
        title: "9월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns10 = [
    {
        title: "10월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns11 = [
    {
        title: "11월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const columns12 = [
    {
        title: "12월",
        dataIndex: "time",
        key: "id",
        render: tags => (
            <span>
                {tags[11]}{tags[12]}{tags[13]}{tags[14]}{tags[15]}
            </span>
        ),
    },

];
const data = [];

const Times = props => {
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

    // style={{ marginLeft: "60px", marginBottom: "10px" }} 
    return (
        <div>
            {/* <Button onClick={props.dataCheck}>data</Button> */}
            <div>
                <WPDataTable2
                    columns={columns}
                    data={props.JanuaryData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e);
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable2
                    columns={columns2}
                    data={props.FebruaryData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable2
                    columns={columns3}
                    data={props.marchData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable2
                    columns={columns4}
                    data={props.aprilData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable2
                    columns={columns5}
                    data={props.mayData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable2
                    columns={columns6}
                    data={props.juneData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
            </div>

            <div>
                <WPDataTable3
                    columns={columns7}
                    data={props.JanuaryData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e);
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable3
                    columns={columns8}
                    data={props.FebruaryData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable3
                    columns={columns9}
                    data={props.marchData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable3
                    columns={columns10}
                    data={props.aprilData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable3
                    columns={columns11}
                    data={props.mayData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
                <WPDataTable3
                    columns={columns12}
                    data={props.juneData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setMonthData(e)
                        props.setDetailId(e.id)

                    }}
                />
            </div>
            <WPModal10
                title="시간수정"
                width={1150}
                isOpen={modal}
                onChange={v => setModal(v)}
                updateUser={props.updateUser}
                toggle={props.toggle}
                handleChangeState={props.handleChangeState}
                detailId={props.detailId}
                deleteUser={props.deleteUser}
                data={props.monthData}
            />
        </div >
    );
};

const Times2 = props => {
    const [modal, setModal] = React.useState(false);

    // style={{ marginLeft: "60px", marginBottom: "10px" }} 
    return (
        <div>
            <PageTitle>스케줄타임관리</PageTitle>
            <Button style={{ marginBottom: "10px" }} onClick={(e, a) => {
                setModal(!modal);

            }}>추가</Button>
            <Divider />


            <WPModal11
                title="시간등록"
                width={1150}
                isOpen={modal}
                onChange={v => setModal(v)}
                updateUser={props.updateUser}
                toggle={props.toggle}
                handleChangeState={props.handleChangeState}
                inputTime={props.inputTime}
                RegisterTime={props.RegisterTime}
                handleChangeStateM={props.handleChangeStateM}
                handleChangeStateH={props.handleChangeStateH}
                handleChangeStateMonth={props.handleChangeStateMonth}

            />
        </div >
    );
};


/**
 *
 */