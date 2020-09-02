import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: '행사일',
        dataIndex: 'eventDate',
    },
    {
        title: '업체명',
        dataIndex: 'company',
    },
    {
        title: '고객명',
        dataIndex: 'customerName',
    },
    {
        title: '상품구분',
        dataIndex: 'productDivision',
    },
    {
        title: '상품명',
        dataIndex: 'productName',
    },
    {
        title: '비고',
        dataIndex: 'recital',
    },
    {
        title: '금액',
        dataIndex: 'money',
    },
    {
        title: '정산상태',
        dataIndex: 'settlementStatus',
    },
];
const data = [
    {
        key: '1',
        eventDate: '2017-07-01',
        company: '라밍스튜디오',
        customerName: '동천남 동천녀',
        productDivision: '본식',
        productName: '스냅30p',
        recital: '',
        money: 2000,
        settlementStatus: '-',

    },
    {
        key: '2',
        eventDate: '2017-07-01',
        company: '라밍스튜디오',
        customerName: '동천남 동천녀',
        productDivision: '본식',
        productName: '스냅30p',
        recital: '',
        money: 2000,
        settlementStatus: '-',

    },
    {
        key: '3',
        eventDate: '2017-07-01',
        company: '라밍스튜디오',
        customerName: '동천남 동천녀',
        productDivision: '본식',
        productName: '스냅30p',
        recital: '',
        money: 2000,
        settlementStatus: '-',

    },

];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const Subpage04List = () => {
    return (
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default Subpage04List;