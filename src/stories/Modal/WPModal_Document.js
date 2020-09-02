import React from "react";
import { WPModal } from "../../components";

const WPModal_Document = () => {
  const [modalIsOpen, setModal] = React.useState(false);

  return (
    <div>
      {/*  */}
      <div>
        <button onClick={() => setModal(!modalIsOpen)}>isOpen</button>
        <WPModal isOpen={modalIsOpen} onChange={v => setModal(v)}>
          <h1>Modal Component</h1>
        </WPModal>
      </div>
    </div>
  );
};

export default WPModal_Document;
