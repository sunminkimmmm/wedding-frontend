/**
 *
 */

import React from 'react';
import { Table, Divider, Tag } from 'antd';

/**
 *
 */
const WPDataTable = props => {
  return (
    <Table
      onRow={(record, rowIndex) => {
        return {
          onClick: e => props.onClick(record, rowIndex), // click row
          onDoubleClick: e => props.onDoubleClick(rowIndex), // double click row
          onContextMenu: e => props.onContextMenu(rowIndex), // right button click row
          onMouseEnter: e => props.onMouseEnter(rowIndex), // mouse enter row
          onMouseLeave: e => props.onMouseLeave(rowIndex) // mouse leave row
        };
      }}
      columns={props.columns}
      dataSource={props.data}
      bordered={props.border}
    />
  );
};

WPDataTable.defaultProps = {
  data: [],
  columns: [],
  border: false,
  onClick: event => { }, // click row
  onDoubleClick: event => { }, // double click row
  onContextMenu: event => { }, // right button click row
  onMouseEnter: event => { }, // mouse enter row
  onMouseLeave: event => { } // mouse leave row
};

export default WPDataTable;
