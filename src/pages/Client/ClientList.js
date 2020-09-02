import React from 'react';
import PropTypes from 'prop-types';
import ClientListItem from './ClientListItem';
const ClientList = props => {
  const list = props.client.map((item, index) => {
    return <ClientListItem key={index} item={item} />;
  });
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>check</th>
          <th>분류</th>
          <th>업체명</th>
          <th>담당자</th>
          <th>휴대폰</th>
          <th>전화번호</th>
          <th>팩스번호</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

ClientList.propTypes = {
  visitConsultation: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ClientList;
