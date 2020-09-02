import React from "react";
import { Modal } from "antd";

const WPModal = props => {
  const { isOpen, title, okText, cancelText, loading, width, onDelete } = props;

  //
  const toggleOnChange = () => {
    if (props.onChange) props.onChange(!isOpen);
  };

  //
  const onOk = () => {
    if (props.onOk) props.onOk();
    else onDelete(); toggleOnChange();
  };

  //
  const onCancel = () => {
    if (props.onCancel) props.onCancel();
    else toggleOnChange();
  };

  return (
    <div>
      <Modal
        title={title}
        width={props.width}
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        style={{ top: 20 }}
        okText={okText}
        cancelText={cancelText}
      >
        {loading && (
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: 99,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.85)"
            }}
          >
            <h3 style={{ color: "#333" }}>Loading...</h3>
          </div>
        )}
        {props.children &&
          React.cloneElement(props.children, {
            parentWidth: width,
            parentPadding: 24
          })}
      </Modal>
    </div>
  );
};

WPModal.defaultProps = {
  isOpen: false,
  onChange: () => { },
  name: "defaultModal",
  title: "Modal",
  width: 1000,
  // onOk: () => {},
  // onCancel: () => {}
  okText: "OK",
  cancelText: "Cancel",
  loading: false
};

export default WPModal;
