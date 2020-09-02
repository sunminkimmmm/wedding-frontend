import React from 'react';

import { Table } from 'antd';

const columns = [
    {
        title: '업체명',
        dataIndex: 'company',
    },
    {
        title: '건수',
        dataIndex: 'num',
    },
    {
        title: '결제금액',
        dataIndex: 'paymentAmount',
    },
    {
        title: '상세내역',
        dataIndex: 'detail',
    },

];
const data = [
    {
        key: '1',
        company: '라밍스튜디오',
        num: '2',
        paymentAmount: 200000,
        detail: '스냅30p',
    },
    {
        key: '2',
        company: '라밍스튜디오2',
        num: '1',
        paymentAmount: 20000,
        detail: '스냅30p',
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

const Subpage05List = () => {
    return (
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default Subpage05List;