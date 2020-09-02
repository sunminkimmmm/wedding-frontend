import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const VisitConsultationListItem = props => {
  const item = props.visitConsultationListItem;
  return (
    <tr>
      <td>{item.manager}</td>
      <td>{item.consultationCustomer_ID}</td>
      <td>
        <Link to="/">{item.consultationDate}</Link>
      </td>
      <td>{item.mobile}</td>
      <td>{item.consultationClassification}</td>
      <td>{item.visitDate}</td>
      <td>{item.visit}</td>
      <td>{item.visitClassification}</td>
      <td>{item.contents}</td>
    </tr>
  );
};

VisitConsultationListItem.propTypes = {
  visitConsultationListItem: PropTypes.object.isRequired
};

export default VisitConsultationListItem;
