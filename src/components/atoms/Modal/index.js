import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { toggleModal } from "../../../actions/utils";

function Modal({ children, utils, toggleModal }) {
  return (
    <div style={{ display: utils.displayModal ? "block" : "none" }}>
      <div className="modal" onClick={() => toggleModal()}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
}
const mapStateToProps = ({ utils }) => ({
  utils
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
