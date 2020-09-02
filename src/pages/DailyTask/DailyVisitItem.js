import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const DailyVisitItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>{item.time}</td>
      <td>{item.classification}</td>
      <td>
        <Link>{item.name}</Link>
      </td>
      <td>{item.moblie}</td>
      <td>{item.path}</td>
      <td>{item.consultationDate}</td>
      <td>{item.content}</td>
      <td>{item.visit}</td>
      <td>
        <Button>V</Button>
      </td>
      <td>
        <Button>X</Button>
      </td>
    </tr>
  );
};

DailyVisitItem.propTypes = {};

export default DailyVisitItem;
