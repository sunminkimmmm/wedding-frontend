import React from 'react';
import propTypes from 'prop-types';
import {
    WPRadio,
    WPInput,
    WPSelect
} from '../../../components';
import { Button } from 'antd';
import './index.css';

const componentDefault = () => {
    UnitprocurementitemsClassifyRegister.propTypes = {

    };
};

const UnitprocurementitemsClassifyRegister = props => {

    const item1 = e => {
        let itemRegistList = [
            {
                value: '행사',
                color: 'black',
                message: '행사'
            },
            {
                value: '예식',
                color: 'black',
                message: '예식'
            },
        ];

        return (
            <tr>
                <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>행사구분</th>
                <td style={{ padding: 15 }} >
                    <WPRadio
                        list={itemRegistList}
                        value={props.value.eventClassification}
                        onChange={value => {
                            outputFilterResult('eventClassification', value);
                        }}
                    />
                </td>
            </tr>
        );
    };


    const item2 = e => {
        return (
            <tr>
                <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>코드명</th>
                <td style={{ padding: 15 }}>
                    <WPInput
                        size="small"
                        onChange={value => {
                            outputFilterSubData('itemClassificationName', value);
                        }}
                        value={props.value.itemClassificationName}
                    />
                </td>
            </tr>
        );
    };

    const item3 = e => {
        return (
            <tr>
                <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>순서</th>
                <td style={{ padding: 15 }}>
                    <WPInput
                        size="small"
                        onChange={value => {
                            outputFilterSubData('order', value);
                        }}
                        value={props.value.order}
                    />
                </td>

            </tr>
        );
    };

    const item4 = e => {
        let itemRegistList = [
            {
                value: 'Y',
                color: 'black',
                message: 'Y'
            },
            {
                value: 'R',
                color: 'black',
                message: 'R'
            },
            {
                value: 'N',
                color: 'black',
                message: 'N'
            },
        ];

        return (
            <tr>
                <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>사용여부</th>
                <td style={{ padding: 15 }} >
                    <WPRadio
                        list={itemRegistList}
                        value={props.value.useStatus}
                        onChange={value => {
                            outputFilterResult('useStatus', value);
                        }}
                    />
                </td>
            </tr>
        );
    };

    let selectList = [
        {
            key: 1,
            value: 'total',
            name: '전체'
        },
        {
            key: 2,
            value: 'itemName',
            name: '부대품목명'
        },
        {
            key: 3,
            value: 'memo',
            name: '비고'
        }
    ]

    const outputFilterResult = (type, data) => {
        props.onChangeFilter({
            type: type,
            data: data
        });
    };

    const outputFilterSubData = (type, data) => {
        props.onChangeFilter({
            type: type,
            data: data.target.value
        });
    };

    return (

        <table
            border="1"
            style={{
                border: '1px solid #f3f3f3',
                width: '100%',
                marginTop: 15,
                marginBottom: 15
            }}
        >
            <tbody>
                {/* {searchBar()} */}
                {item1()}
                {item2()}
                {item3()}
                {item4()}

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2" style={{ padding: 10 }}>
                        <div style={{ width: '50%', textAlign: 'right', marginLeft: '100px' }}>
                            &nbsp;
              <Button onClick={props.onRegister}>등록</Button>
                            &nbsp;
              <Button onClick={props.onUpdate}>수정</Button>
                            &nbsp;
              <Button onClick={props.onDelete} type="danger">삭제</Button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>

    );
};

componentDefault();

export default UnitprocurementitemsClassifyRegister;