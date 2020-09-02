import React, { Fragment } from 'react';
import {
  Input,
  Select,
  Button
} from 'antd';
const { Option } = Select;
const Subpage06Add = props => {
  const { data, isEditMode } = props;
  return (
    <Fragment>
      {data.map((item, index) => (
        <tr key={index.toString()}>
          {(isEditMode > -1 && isEditMode === item.id) ? (
            <>
              <td>
                <Input
                  name="sequence"
                  value={item.sequence}
                  onChange={(event) => props.onChange(index, event)}
                />
              </td>
              <td>
                <Select className="select" defaultValue={item.division} onChange={(event) => props.onChange2(index, event)}>
                  <Option value="동시홀" >동시홀</Option>
                  <Option value="예식홀" >예식홀</Option>
                  <Option value="연회장" >연회장</Option>
                </Select>
              </td>
              <td>
                <Input
                  name="hallName"
                  value={item.hallName}
                  onChange={(event) => props.onChange(index, event)}
                />
              </td>
            </>
          ) : (
              <>
                <td>{item.sequence}</td>
                <td>{item.division}</td>
                <td>{item.hallName}</td>
              </>
            )}
          <td>
            <Button type="primary" onClick={() => props.onToggleEditMode(item.id)}>수정</Button>
          </td>
          <td>
            <Button type="primary" onClick={() => props.onRemove(item.id)}>삭제</Button>
          </td>
        </tr>
      ))}
    </Fragment>
  );
}

export default Subpage06Add;