import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal8 } from "../../../components";
import { Divider, Tag, Form, Button, Select, Input } from "antd";
import RadioGroup from 'antd/lib/radio/group';
import { backend_url_dev } from "../../../Utils";
const { Option } = Select;

class FoodManagement extends Component {
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
            adultCharge: '',
            childCharge: ''
        }
    }

    componentDidMount() {
        this.fetchQuotes()
    }
    async fetchQuotes() {
        fetch(`${backend_url_dev}/fnbitems`)
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

        const url = `${backend_url_dev}/fnbitems/` + this.state.detailId;
        const promise = fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fnBClassifications_ID: this.state.fnBClassifications_ID,
                itemName: this.state.itemName,
                memo: this.state.memo,
                price: this.state.price,

            })
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        return promise;
    };
    dataCheck = () => {
        console.log(this.state.data)
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
    deleteUser = () => {
        const url = `${backend_url_dev}/fnbitems/` + this.state.detailId;
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

    render() {

        return (
            <div>
                <Food dataCheck={this.dataCheck} data={this.state.data} setDetailId={this.setDetailId} setDetails={this.setDetails} details={this.state.details}
                    updateUser={this.updateUser} toggle={this.state.toggle} handleChangeState={this.handleChangeState} detailId={this.state.detailId}
                    deleteUser={this.deleteUser}

                />
            </div>
        );
    }
}

export default FoodManagement;

const columns = [
    {
        title: "행사구분",
        dataIndex: "eventClassification",
        key: "id",
        // render: text => <a>{text}</a>
    },
    {
        title: "품목분류",
        dataIndex: "fnBClassifications_ID",
        key: "id"
    },
    {
        title: "식음료명",
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

const Food = props => {
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
            <PageTitle>식음료관리</PageTitle>
            <Button onClick={props.dataCheck}>data</Button>
            <Divider />

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
            />

            <WPModal8
                title="식음료관리"
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
