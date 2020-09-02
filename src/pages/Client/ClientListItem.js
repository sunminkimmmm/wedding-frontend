import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
const ClientListItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>
        <Checkbox />
      </td>
      <td>{item.classification}</td>
      <td>{item.clientName}</td>
      <td>{item.manager}</td>
      <td>{item.mobile}</td>
      <td>{item.tel}</td>
      <td>{item.fax}</td>
    </tr>
  );
};

ClientListItem.propTypes = {};

export default ClientListItem;
