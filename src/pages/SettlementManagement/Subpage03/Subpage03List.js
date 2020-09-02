import React, { Component } from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: '업체명',
        dataIndex: 'name',
    },
    {
        title: '리베르트건수',
        dataIndex: 'num',
    },
    {
        title: '리베르트금액',
        dataIndex: 'money',
    },
    {
        title: '보기',
        dataIndex: 'look',
    },
];
const data = [
    {
        key: '1',
        name: '업체1',
        num: 6,
        money: '10000',
        look: '보기'

    },
    {
        key: '2',
        name: '업체2',
        num: 3,
        money: '1000000',
        look: '보기'
    },
    {
        key: '3',
        name: '업체3',
        num: 2,
        money: '2000000',
        look: '보기'
    },
    {
        key: '4',
        name: '업체4',
        num: 5,
        money: '30000000',
        look: '보기'
    },
];


const Subpage03List = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    );
};

export default Subpage03List;

