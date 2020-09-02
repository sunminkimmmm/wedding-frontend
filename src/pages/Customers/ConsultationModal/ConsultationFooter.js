import React from "react";
import PropTypes from "prop-types";

const ConsultationFooter = props => {
  return (
    <div style={{ alignContent: "right" }}>
      <button onClick={props.onClickSubmit}>등록</button>
      <button>취소</button>
    </div>
  );
};

ConsultationFooter.propTypes = {};

export default ConsultationFooter;
