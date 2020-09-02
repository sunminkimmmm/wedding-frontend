import React from "react";
import PropTypes from "prop-types";
import ClientList from "./ClientList";
import ClientSearchbar from "./ClientSearchbar";
import { Button } from "antd";

const ClientPresenter = props => {
  return (
    <>
      <ClientSearchbar />
      <ClientList client={props.client} />
      <div style={{ margin: "2px", width: "100%", float: "right" }}>
        <Button style={{ float: "right" }}>등록</Button>
      </div>
    </>
  );
};

ClientPresenter.propTypes = {
  client: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ClientPresenter;
