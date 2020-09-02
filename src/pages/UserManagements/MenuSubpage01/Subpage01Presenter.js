import React from 'react';
import { WPDataTable, PageTitle } from '../../../components';
import { Divider, Tag, Form, Button } from 'antd';
import { MenuRegister } from '../SettingManagementRegister';

const Subpage01Presenter = props => {
    const columns = [
        {
            title: '',
            dataIndex: 'check',
            key: 'check'
        },
        {
            title: '행사구분',
            dataIndex: 'eventClassification',
            key: 'eventClassification',
            render: text => <a>{text}</a>
        },
        {
            title: '메뉴명',
            dataIndex: 'menuName',
            key: 'menuName',
        },
        {
            title: '대인금액',
            dataIndex: 'adultCharge',
            key: 'adultCharge'
        },
        {
            title: '소인금액',
            dataIndex: 'childCharge',
            key: 'childCharge'
        },
        {
            title: '비고',
            dataIndex: 'memo',
            key: 'memo'
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
                메뉴관리
            </PageTitle>
            <Divider />
            <MenuRegister
                onRegister={props.onRegister}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
                value={props.menuRegisterData}
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
            <Button onClick={() => { console.log(props.data) }}>data</Button>
        </div >
    );
};

export default Subpage01Presenter;