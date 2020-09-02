import React from 'react';
import { WPDataTable, PageTitle } from '../../../components';
import { Divider, Tag, Form, Button } from 'antd';
import { HallsRegister } from '../SettingManagementRegister';

const Subpage04Presenter = props => {
    const columns = [
        {
            title: '',
            dataIndex: 'check',
            key: 'check'
        },
        {
            title: '순서',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: '구분',
            dataIndex: 'hallClassification',
            key: 'hallClassification',
        },
        {
            title: '홀명',
            dataIndex: 'hallName',
            key: 'hallName'
        },
        // {
        //     title: '수정',
        //     render: e => <Button onClick={props.onUpdate()}>수정</Button>
        // },
        // {
        //     title: '삭제',
        //     render: () => <Button onClick={() => {
        //         setModal(!modal);
        //     }}>삭제</Button>

        // },

    ];

    return (
        <div>
            <PageTitle>
                예식/행사홀 관리
            </PageTitle>
            <Divider />
            <HallsRegister
                onRegister={props.onRegister}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
                value={props.itemRegisterData}
                item={props.itemClassificationName}
                onChangeFilter={props.onChangeFilter}
                onChangeInput={props.onChangeInput}
                onChangeSelect={props.onChangeSelect}
                searchWord={props.searchWord}
                onSearch={props.onSearch}
                onTotalSearch={props.onTotalSearch}
            />
            {props.searchTableVisible === true ? (<WPDataTable
                columns={columns}
                data={props.data}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={e => {
                    props.onDetail(e.key)
                    console.log(e.key)
                }}
            />) : (<WPDataTable
                columns={columns}
                data={props.searchData}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={e => {
                    props.onDetail(e.key)
                    console.log(e.key)
                }}
            />)}
            <Button onClick={() => { console.log(props.itemRegisterData) }}>data</Button>
        </div >
    );
};

export default Subpage04Presenter;