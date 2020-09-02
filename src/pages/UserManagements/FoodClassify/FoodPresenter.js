import React from 'react';
import { WPDataTable, PageTitle, WPModal } from '../../../components';
import { Divider, Tag, Form, Button } from 'antd';
import { FoodClassifyRegister } from '../ClassifyRegister';

const FoodPresenter = props => {
    const columns = [
        {
            title: '',
            dataIndex: 'check',
            key: 'check'
        },
        {
            title: '상위코드',
            dataIndex: 'eventClassification',
            key: 'eventClassification',
        },
        {
            title: '코드명',
            dataIndex: 'itemClassificationName',
            key: 'itemClassificationName',
        },
        {
            title: '순서',
            dataIndex: 'order',
            key: 'order'
        },
        {
            title: '사용',
            dataIndex: 'useStatu',
            key: 'useStatu'
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
            <FoodClassifyRegister
                onRegister={props.onRegister}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
                value={props.itemRegisterData}
                item={props.itemClassificationName}
                onChangeFilter={props.onChangeFilter}
                onChangeInput={props.onChangeInput}
                onChangeSelect={props.onChangeSelect}
                searchWord={props.searchWord}
            />
            <WPDataTable
                columns={columns}
                data={props.data}
                description="No data!"
                pagination={{ pageSize: 50 }}
                onClick={e => {
                    props.onDetail(e.key)
                    console.log(e.key)
                }}
            />


            <button onClick={() => console.log(props.data)}>fdf</button>
        </div>
    );

}

export default FoodPresenter;
