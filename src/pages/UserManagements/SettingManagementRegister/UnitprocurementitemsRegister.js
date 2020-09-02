import React from 'react';
import propTypes from 'prop-types';
import {
  WPRadio,
  WPInput,
  WPSelect,
  WPModal
} from '../../../components';
import { Button } from 'antd';
import './index.css';
import ItemClassify from '../ItemClassify'

const componentDefault = () => {
  UnitprocurementitemsRegister.propTypes = {

  };
};

const UnitprocurementitemsRegister = props => {

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
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>
          <Button style={{ float: 'center' }} onClick={(e) => { setModal(!modal); }}>+분류관리</Button> &nbsp;품목분류</th>
        <td style={{ padding: 15 }}>

          <WPSelect
            style={{ width: '450px' }}
            className="default-regist-select"
            onChange={value => {
              outputFilterResult('itemClassifications_ID', value);
            }}
            list={props.item}
          />

        </td>
      </tr>
    );
  };

  const item3 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>부대품목명</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('itemName', value);
            }}
            value={props.value.itemName}
          />
        </td>
      </tr>
    );
  };
  const item5 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>금액</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('price', value);
            }}
            value={props.value.price}
          />
        </td>

      </tr>
    );
  };

  const item4 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>비고</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('memo', value);
            }}
            value={props.value.memo}
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
  const [modal, setModal] = React.useState(false);
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
        {item5()}



      </tbody>
      <tfoot>
        <tr>
          <WPSelect
            style={{ width: '100px', marginLeft: '20px', marginTop: "12px", height: '30px' }}
            className="default-regist-select"
            onChange={value => {
              props.onChangeSelect('searchSelect', value);
            }}
            list={selectList}
          />
          &nbsp;
          <WPInput
            size="small"
            style={{ width: '150px', height: '30px' }}
            onChange={value => {
              props.onChangeInput('searchWord', value);
            }}
            value={props.searchWord}
          />
          &nbsp;
          <Button type="primary" onClick={props.onSearch}>검색</Button>
          &nbsp;
          <Button onClick={props.onTotalSearch} type="primary">전체보기</Button>
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
          {/* <Button onClick={(e) => { setModal(!modal); }}>modal</Button> */}
        </tr>
      </tfoot>
    </table>
  );
};

componentDefault();

export default UnitprocurementitemsRegister;
