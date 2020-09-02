import React from 'react';
import Subpage06Add from './Subpage06Add'
import {
    Input,
    Select,
    Button
} from 'antd';
const { Option } = Select;

class Subpage06List extends React.Component {

    state = {
        hallManage: [
            {
                id: 1,
                sequence: '1',
                division: '동서홀',
                hallName: '트리니티'
            },
            {
                id: 2,
                sequence: '2',
                division: '동서홀',
                hallName: '트리니티'
            },
            {
                id: 3,
                sequence: '3',
                division: '동서홀',
                hallName: '트리니티'
            },
            {
                id: 4,
                sequence: '4',
                division: '동서홀',
                hallName: '트리니티'
            },
        ]
    }

    //등록
    handleCreate = () => {
        const length = this.state.hallManage.length;
        const lastId = length > 0 ? this.state.hallManage[this.state.hallManage.length - 1].id + 1 : 1;

        this.setState({
            hallManage: [
                ...this.state.hallManage,
                {
                    id: lastId,
                    sequence: this.state.sequence,
                    division: this.state.division,
                    hallName: this.state.hallName
                }
            ]
        }, () => {
            console.log(this.state.hallManage)
        })
    }

    //삭제
    handleRemove = id => {
        const newHallManage = this.state.hallManage.filter(c => c.id !== id)
        this.setState({ hallManage: newHallManage })
    }

    //state 값변경
    handleChangeState = (target, value) => {
        this.setState({ [target]: value });
    }

    handleToggleEditMode = (id) => {
        this.setState(prevState => ({ isEditMode: prevState.isEditMode === id ? -1 : id }))
    }

    //수정
    handleChange = (index, event) => {
        const newHallManage = this.state.hallManage.slice(0);
        newHallManage[index][event.target.name] = event.target.value;
        this.setState({ hallManage: newHallManage });
    }

    handleChange2 = (index, event) => {
        const newHallManage = this.state.hallManage.slice(0);
        newHallManage[index]["division"] = event;
        this.setState({ hallManage: newHallManage });
    }

    render() {
        const style1 = {
            width: '650px',
            textAlign: 'center'
        }
        const style2 = {
            width: '200px',
            marginRight: '5px'
        }

        const { sequence, division, hallName } = this.state;
        return (
            <div className="App">
                <div>
                    <table border="1" style={style1}>
                        <thead>
                            <tr>
                                <th>순서</th>
                                <th>구분</th>
                                <th>홀명</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Subpage06Add
                                data={this.state.hallManage}
                                isEditMode={this.state.isEditMode}
                                onChange={this.handleChange}
                                onChange2={this.handleChange2}
                                onToggleEditMode={this.handleToggleEditMode}
                                onRemove={this.handleRemove}
                            />
                        </tbody>
                    </table>
                    <br />
                    <div>
                        순서:<Input style={style2} value={sequence} name="sequence" onChange={(event) => this.handleChangeState('sequence', event.target.value)} placeholder="sequence" />
                        홀구분:<Select className="select" defaultValue="선택" onChange={(event) => this.handleChangeState('division', event)}>
                            <Option value="동시홀" >동시홀</Option>
                            <Option value="예식홀" >예식홀</Option>
                            <Option value="연회장" >연회장</Option>
                        </Select>
                        홀명:<Input style={style2} value={hallName} name="hallName" onChange={(event) => this.handleChangeState('hallName', event.target.value)} placeholder="hallName" />

                        <Button type="primary" onClick={() => this.handleCreate()}>등록</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subpage06List;