import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal5 } from "../../../components";
import { Divider, Tag, Form, Button, Select, Input } from "antd";
import RadioGroup from 'antd/lib/radio/group';
import { backend_url_dev } from "../../../Utils";
const { Option } = Select;

class EmployeeManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            detailId: '',
            details: [],
            toggle: false,
            searchWord: '',
            searchSelect: '',
            searchCheck: false
        }
    }

    componentDidMount() {
        this.fetchQuotes()
    }
    async fetchQuotes() {
        fetch(`${backend_url_dev}/users`)
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
    updateUser = e => {

        this.setState({ toggle: !this.state.toggle })

        const url = `${backend_url_dev}/users/` + this.state.detailId;
        const promise = fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: this.state.userName,
                accountID: this.state.accountID,
                password: this.state.password,
                grade: this.state.grade,
                responsibility: this.state.responsibility,
                contactNumber: this.state.contactNumber,
                mobile: this.state.mobile,
                email: this.state.email

            })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    };
    dataCheck = () => {
        console.log(this.state.users)
    }
    setDetailId = (e) => {
        this.setState({ detailId: e })
    }
    setDetails = (e) => {
        this.setState({ details: e })
    }

    handleChangeState = (event) => {
        const updateData = this.state.details;
        updateData[event.target.name] = event.target.value
        this.setState({ update: updateData });
        this.setState({ [event.target.name]: event.target.value })
        // const updateData = this.state.data.slice(0);
        // updateData.filter(function (element) {
        //     if (element.id === idd) {
        //         element[event.target.name] = event.target.value
        //     }
        //     return element
        // });
        // this.setState({ data: updateData });
    }
    deleteUser = () => {
        const url = `${backend_url_dev}/users/` + this.state.detailId;
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
    searchChange = (e) => {
        this.setState({ searchWord: e.target.value })
        this.setState({ searchCheck: true })
    }
    searchSelectChange = (e) => {
        this.setState({ searchSelect: e })
    }
    searchUsers = () => {
        this.setState({ searchCheck: false })
    }
    render() {
        let word = this.state.searchWord;
        let searchData = this.state.data.filter(function (element) {
            if (element.userName === word || element.contactNumber === word || element.mobile === word) {
                return element;
            }
        });

        return (
            <div>
                <Employee dataCheck={this.dataCheck} data={this.state.data} setDetailId={this.setDetailId} setDetails={this.setDetails} details={this.state.details}
                    updateUser={this.updateUser} toggle={this.state.toggle} handleChangeState={this.handleChangeState} detailId={this.state.detailId}
                    searchChange={this.searchChange} searchSelectChange={this.searchSelectChange} searchUsers={this.searchUsers}
                    searchData={searchData} searchCheck={this.state.searchCheck} deleteUser={this.deleteUser}
                />
            </div>
        );
    }
}

export default EmployeeManagement;

const columns = [
    {
        title: "등급",
        dataIndex: "grade",
        key: "id",
        // render: text => <a>{text}</a>
    },
    {
        title: "이름",
        dataIndex: "userName",
        key: "id"
    },
    {
        title: "휴대폰",
        dataIndex: "mobile",
        key: "id"
    },
    {
        title: "전화번호",
        dataIndex: "contactNumber",
        key: "id"
    },
    {
        title: "이메일",
        dataIndex: "email",
        key: "id"
    },
    {
        title: "담당업무",
        dataIndex: "responsibility",
        key: "id"
    },
];

const data = [];

const Employee = props => {
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
    const styles = {
        width: '200px',
        marginRight: '5px'
    }
    const styles2 = {
        float: 'right',
    }
    const styles3 = {
        marginRight: '5px',

    }

    return (
        <div>
            <PageTitle>사용자관리(직원관리)</PageTitle>
            <Button onClick={props.dataCheck}>data</Button>
            <Divider />
            <div style={styles2}>
                <Button style={styles3} type="primary" onClick={props.searchUsers}>전체보기</Button>
                <Select style={styles3} className="select" defaultValue="전체" onChange={(e) => props.searchSelectChange(e)} name="searchSelect">
                    <Option value="이름" >이름</Option>
                    <Option value="연락처" >연락처</Option>
                    <Option value="핸드폰" >핸드폰</Option>
                </Select>
                <Input style={styles} className="input" onChange={(e) => props.searchChange(e)} name="searchWord" />
            </div>
            <br /><br /><br />
            {props.searchCheck === false ?
                <WPDataTable
                    columns={columns}
                    data={props.data}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setDetails(e)
                        props.setDetailId(e.id)
                    }}
                /> :
                <WPDataTable
                    columns={columns}
                    data={props.searchData}
                    description="No data!"
                    pagination={{ pageSize: 50 }}
                    onClick={(e, a) => {
                        setModal(!modal);
                        props.setDetails(e)
                        props.setDetailId(e.id)
                    }}
                />}
            <WPModal5
                title="사용자관리(직원관리)"
                width={1150}
                isOpen={modal}
                onChange={v => setModal(v)}
                data={props.details}
                updateUser={props.updateUser}
                toggle={props.toggle}
                handleChangeState={props.handleChangeState}
                detailId={props.detailId}
                deleteUser={props.deleteUser}
            />
        </div>
    );
};
