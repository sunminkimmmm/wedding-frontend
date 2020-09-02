import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
const buttonStyle = { float: 'right', margin: '10px' };
const ConsultationListItem = props => {
  let item = props.consultationCustomers;
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={() => props.handleChangeCheckBox(item)}
        />
      </td>
      <td>{item.eventClassification}</td>
      <td>
        {item.eventClassification === 'marry' ? (
          <>
            <div>{item.brideName} </div>
            <div>{item.eventContractorName}</div>
          </>
        ) : (
          item.eventContractorName
        )}
      </td>
      <td>
        {item.eventClassification === 'marry' ? (
          <>
            <div>{item.mobileOfGroom} </div>
            <div>{item.mobileOfBride}</div>
          </>
        ) : (
          item.mobile
        )}
      </td>
      <td>{item.eventDay === '' ? '미정' : item.eventDay}</td>
      <td>{item.contactPath}</td>
      <td>{item.registrationDate}</td>
      <td>{item.eventDay}</td>
      <td>{item.state}</td>
      <td>
        <Button onClick={props.contract} className="button" type="primary">
          계약하기
        </Button>
      </td>
    </tr>
  );
};

ConsultationListItem.propTypes = {
  consultationCustomers: PropTypes.object.isRequired,
  handleChangeCheckBox: PropTypes.func.isRequired
};

export default ConsultationListItem;
