import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const EventItem = props => {
  const item = props.item;
  return (
    <tr>
      <td>{item.time}</td>
      <td>{item.hall}</td>
      <td>
        <Link>{item.name}</Link>
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

EventItem.propTypes = {};

export default EventItem;
