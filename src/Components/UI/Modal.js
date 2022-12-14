import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
