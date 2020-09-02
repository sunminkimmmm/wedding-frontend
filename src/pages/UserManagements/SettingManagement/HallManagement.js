import React, { Component } from 'react';
import { WPDataTable, PageTitle, WPModal9 } from "../../../components";
import { Divider, Tag, Form, Button, Select, Input } from "antd";
import RadioGroup from 'antd/lib/radio/group';
import { backend_url_dev } from "../../../Utils";
const { Option } = Select;

class HallManagement extends Component {
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
            order: ''
        }
    }

    componentDidMount() {
        this.fetchQuotes()
    }
    async fetchQuotes() {
        fetch(`${backend_url_dev}/halls`)
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

        const url = `${backend_url_dev}/halls/` + this.state.detailId;
        const promise = fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hallClassification: this.state.hallClassification,
                hallName: this.state.hallName,
                order: this.state.order,

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
        this.setState({ order: updateData.order })
    }
    deleteUser = () => {
        const url = `${backend_url_dev}/halls/${this.state.detailId}`;
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
                <Hall dataCheck={this.dataCheck} data={this.state.data} setDetailId={this.setDetailId} setDetails={this.setDetails} details={this.state.details}
                    updateUser={this.updateUser} toggle={this.state.toggle} handleChangeState={this.handleChangeState} detailId={this.state.detailId}
                    deleteUser={this.deleteUser}

                />
            </div>
        );
    }
}

export default HallManagement;

const columns = [
    {
        title: "순서",
        dataIndex: "order",
        key: "id",
        // render: text => <a>{text}</a>
    },
    {
        title: "구분",
        dataIndex: "hallClassification",
        key: "id"
    },
    {
        title: "홀명",
        dataIndex: "hallName",
        key: "id"
    },

];

const data = [];

const Hall = props => {
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
            <PageTitle>예식/행사홀관리</PageTitle>
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

            <WPModal9
                title="예식/행사홀관리"
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
