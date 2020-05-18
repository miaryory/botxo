import React from "react";
import "../App.css";
import Form from "../Form";

function Demo() {
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
      <button className="white-btn demo" type="submit" onClick={openModal}>
        Book Demo
      </button>
      {modalIsOpen ? (
        <div className="form-layer" onClick={closeModal}>
          <div className="my-form">
            <p
              onClick={closeModal}
              className="form-cross"
              style={{ fontSize: "33px" }}
            >
              &#10006;
            </p>
            <Form formType="Demo" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Demo;
