import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal7 } from "../../../components";
import { Divider, Tag, Form, Button, Select, Input } from "antd";
import RadioGroup from 'antd/lib/radio/group';
import { backend_url_dev } from "../../../Utils";
const { Option } = Select;

class ItemManagement extends Component {
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
        fetch(`${backend_url_dev}/unitprocurementitems`)
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

    // let result = EmployeeApi.findAll(params);
    // let data = result.map(item => {return {}})
    // this.setState({data: d})
    updateUser = e => {

        this.setState({ toggle: !this.state.toggle })

        const url = `${backend_url_dev}/unitprocurementitems/` + this.state.detailId;
        const promise = fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemClassifications_ID: this.state.itemClassifications_ID,
                itemName: this.state.itemName,
                memo: this.state.memo,
                price: this.state.price,


            })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    };
    deleteUser = () => {
        const url = `${backend_url_dev}/unitprocurementitems/` + this.state.detailId;
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
        this.setState({ adultCharge: updateData.adultCharge })
        this.setState({ childCharge: updateData.childCharge })
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
                <Item dataCheck={this.dataCheck} data={this.state.data} setDetailId={this.setDetailId} setDetails={this.setDetails} details={this.state.details}
                    updateUser={this.updateUser} toggle={this.state.toggle} handleChangeState={this.handleChangeState} detailId={this.state.detailId}
                    searchChange={this.searchChange} searchSelectChange={this.searchSelectChange} searchUsers={this.searchUsers}
                    searchData={searchData} searchCheck={this.state.searchCheck} deleteUser={this.deleteUser}
                />
            </div>
        );
    }
}

export default ItemManagement;

const columns = [
    {
        title: "행사구분",
        dataIndex: "grade",
        key: "id",
        // render: text => <a>{text}</a>
    },
    {
        title: "픔목분류",
        dataIndex: "itemClassifications_ID",
        key: "id"
    },
    {
        title: "부대품목명",
        dataIndex: "itemName",
        key: "id"
    },
    {
        title: "금액",
        dataIndex: "price",
        key: "id"
    },
    {
        title: "비고",
        dataIndex: "memo",
        key: "id"
    },

];

const data = [];

const Item = props => {
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
            <PageTitle>부대품목관리</PageTitle>
            <Button onClick={props.dataCheck}>data</Button>
            <Divider />

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
            <WPModal7
                title="부대품목관리"
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
}
