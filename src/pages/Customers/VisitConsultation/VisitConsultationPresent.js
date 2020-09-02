import React from 'react';
import PropTypes from 'prop-types';
import VisitConsultationList from './VisitConsultationList';
import SearchBar from './SearchBar';

const VisitConsultationPresent = props => {
  return (
    <>
      <SearchBar
        inputName={props.inputName}
        handleChangeDateClassification={props.handleChangeDateClassification}
        handleChangeNameClassfication={props.handleChangeNameClassfication}
        handleChangeRangeDate={props.handleChangeRangeDate}
        handleChangeInputName={props.handleChangeInputName}
      />
      <VisitConsultationList visitConsultation={props.visitConsultation} />
    </>
  );
};

VisitConsultationPresent.propTypes = {
  inputName: PropTypes.string.isRequired,
  visitConsultation: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChangeDateClassification: PropTypes.func.isRequired,
  handleChangeNameClassfication: PropTypes.func.isRequired,
  handleChangeRangeDate: PropTypes.func.isRequired,
  handleChangeInputName: PropTypes.func.isRequired
};

export default VisitConsultationPresent;
