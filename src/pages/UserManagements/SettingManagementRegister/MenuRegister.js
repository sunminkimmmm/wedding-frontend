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
  MenuRegister.propTypes = {

  };
};

const MenuRegister = props => {
  const [managerList, setManagerList] = React.useState();

  const menu1 = e => {
    let menuRegistList = [
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
            list={menuRegistList}
            value={props.value.eventClassification}
            onChange={value => {
              outputFilterResult('eventClassification', value);
            }}
          />
        </td>
      </tr>
    );
  };

  const menu2 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>메뉴명</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('menuName', value);
            }}
            value={props.value.menuName}
          />
        </td>
      </tr>
    );
  };

  const menu3 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>대인금액</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('adultCharge', value);
            }}
            value={props.value.adultCharge}
          />
        </td>
      </tr>
    );
  };
  const menu4 = e => {
    return (
      <tr>
        <th style={{ padding: 15, backgroundColor: '#fafafa', width: '450px', textAlign: 'center' }}>소인금액</th>
        <td style={{ padding: 15 }}>
          <WPInput
            size="small"
            onChange={value => {
              outputFilterSubData('childCharge', value);
            }}
            value={props.value.childCharge}
          />
        </td>

      </tr>
    );
  };

  const menu5 = e => {
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
      value: 'menuName',
      name: '메뉴명'
    },
    {
      key: 3,
      value: 'memo',
      name: '비고'
    }
  ]

  // const searchBar = e => {
  //   let selectList = [
  //     {
  //       key: 1,
  //       value: 'total',
  //       name: '전체'
  //     },
  //     {
  //       key: 2,
  //       value: 'menuName',
  //       name: '메뉴명'
  //     },
  //     {
  //       key: 3,
  //       value: 'memo',
  //       name: '비고'
  //     }
  //   ]


  //   return (
  //     <tr>
  //       <th style={{ padding: 15, backgroundColor: '#fafafa' }}>비고</th>
  //       <td style={{ padding: 15 }}>
  //         <WPSelect
  //           size="small"
  //           className="default-regist-select"
  //           onChange={value => {
  //             props.onChange('searchSelect', value);
  //           }}
  //           list={selectList}
  //         />
  //         <WPInput
  //           size="small"

  //           onChange={value => {
  //             props.onChange('searchWord', value);
  //           }}
  //           value={props.searchWord}
  //         />
  //       </td>
  //     </tr>
  //   );
  // };

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
        {menu1()}
        {menu2()}
        {menu3()}
        {menu4()}
        {menu5()}


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
              {/* <Button onClick={props.onTotalSearch} type="primary">전체보기</Button> */}
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

export default MenuRegister;
