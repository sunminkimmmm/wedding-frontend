import React from 'react';
import { WPDataTable, PageTitle, WPModal } from '../../../components';
import { Divider, Tag, Form, Button } from 'antd';
import { UnitprocurementitemsRegister } from '../SettingManagementRegister';
import ItemClassify from '../ItemClassify'
const Subpage02Presenter = props => {
    const [modal, setModal] = React.useState(false);
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
            title: '품목분류',
            dataIndex: 'itemClassifications_ID',
            key: 'itemClassifications_ID',
        },
        {
            title: '부대품목명',
            dataIndex: 'itemName',
            key: 'itemName'
        },
        {
            title: '금액',
            dataIndex: 'price',
            key: 'price'
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
                부대품목관리
            </PageTitle>
            <Divider />
            <UnitprocurementitemsRegister
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
                onGetItemClassifications={props.onGetItemClassifications}
                onDeleteItemList={props.onDeleteItemList}

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

            <WPModal
                title="부대품목 분류관리"
                width={1150}
                isOpen={modal}
                onChange={v => setModal(v)}
            >
                <ItemClassify
                    onGetItemClassifications={props.onGetItemClassifications}
                    onDeleteItemList={props.onDeleteItemList} />
            </WPModal>
            <Button onClick={() => { console.log(props.itemRegisterData) }}>data</Button>
            <Button onClick={(e) => { setModal(!modal); }}>modal</Button>

        </div >
    );
};

export default Subpage02Presenter;