import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ConsultationList from './ConsultationList';

const ConsultationPresent = props => {
  return (
    <>
      {
        <SearchBar
          inputStartedDate={props.inputStartedDate}
          inputEndDate={props.inputEndDate}
          inputEventClassification={props.inputEventClassification}
          inputDateClassification={props.inputDateClassification}
          inputContactPath={props.inputContactPath}
          inputNameClassification={props.inputNameClassification}
          inputName={props.inputName}
          inputUserID={props.inputUserID}
          selectUserID={props.selectUserID}
          handleChangeSelectUserID={props.handleChangeSelectUserID}
          inputUserID={props.inputUserID}
          handleChangeRangeDate={props.handleChangeRangeDate}
          handleChangeContactPath={props.handleChangeContactPath}
          handleChangeDateClassification={props.handleChangeDateClassification}
          handleChangeEventClassification={
            props.handleChangeEventClassification
          }
          handleChangeName={props.handleChangeName}
          handleChangeNameClassification={props.handleChangeNameClassification}
          handleChangeUserID={props.handleChangeUserID}
        />
      }
      <ConsultationList
        consultationCustomers={props.consultationCustomers}
        handleChangeCheckBox={props.handleChangeCheckBox}
      />
    </>
  );
};
ConsultationPresent.propTypes = {
  inputStartedDate: PropTypes.string.isRequired,
  inputEndDate: PropTypes.string.isRequired,
  inputEventClassification: PropTypes.string.isRequired,
  inputDateClassification: PropTypes.string.isRequired,
  inputContactPath: PropTypes.string.isRequired,
  inputNameClassification: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputUserID: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUserID: PropTypes.object.isRequired,
  handleChangeSelectUserID: PropTypes.func.isRequired,
  handleChangeRangeDate: PropTypes.func.isRequired,
  handleChangeDateClassification: PropTypes.func.isRequired,
  handleChangeEventClassification: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNameClassification: PropTypes.func.isRequired,
  handleChangeUserID: PropTypes.func.isRequired,
  consultationCustomers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeCheckBox: PropTypes.func.isRequired
};
export default ConsultationPresent;
