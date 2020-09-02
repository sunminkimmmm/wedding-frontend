import React from 'react';
import PropTypes from 'prop-types';
import { list } from 'postcss';
import Item from 'antd/lib/list/Item';
import { Link } from 'react-router-dom';
const DailyMarryItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>{item.time}</td>
      <td>{item.hall}</td>
      <td>
        <Link>{item.eventName}</Link>
      </td>
      <td>{item.mobile}</td>
      <td>{item.menu}</td>
      <td>{item.people}</td>
      <td>{item.memo}</td>
      <td>{item.manager}</td>
      <td>{item.state}</td>
    </tr>
  );
};

DailyMarryItem.propTypes = {};

export default DailyMarryItem;
