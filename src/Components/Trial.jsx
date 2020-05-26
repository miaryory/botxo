import React from "react";
import "../App.css";
import Form from "../Form";

function Trial() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowY = "scroll";
  }
  return (
    <>
      <button className="pink-btn trial" type="submit" onClick={openModal}>
        Start Trial
      </button>
      {modalIsOpen ? (
        <>
          <div className="form-layer" onClick={closeModal}></div>
          <div className="my-form">
            <p
              onClick={closeModal}
              className="form-cross"
              style={{ fontSize: "33px" }}
            >
              &#10006;
            </p>
            <Form formType="Trial" />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Trial;
