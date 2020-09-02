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
  HallsRegister.propTypes = {

  };
};

const HallsRegister = props => {

  const item1 = e => {
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

  const item2 = e => {
    let selectList = [
      {
        key: 1,
        value: '동시홀',
        name: '동시홀'
      },
      {
        key: 2,
        value: '예식홀',
        name: '예식홀'
      },
      {
        key: 3,
        value: '연회장',
        name: '연회장'
      }
    ]
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>구분</th>
        <td style={{ padding: 15 }}>
          <WPSelect
            style={{ width: '450px' }}
            className="default-regist-select"
            onChange={value => {
              outputFilterResult('hallClassification', value);
            }}
            list={selectList}
          />

        </td>
      </tr>
    );
  };

  const item3 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>홀명</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('hallName', value);
            }}
            value={props.value.hallName}
          />
        </td>
      </tr>
    );
  };


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




      </tbody>
      <tfoot>
        <tr>

          <td colSpan="2" style={{ padding: 10 }}>
            <div style={{ width: '50%', textAlign: 'right', marginRight: '5px', float: 'right' }}>
              <Button onClick={props.onTotalSearch} type="primary">전체보기</Button>
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

export default HallsRegister;
