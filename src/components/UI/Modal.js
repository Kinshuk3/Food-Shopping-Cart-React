import React from "react"
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = (props) =>{
    return (
        <div className={classes.backdrop} onClick={props.onOutsideClose}></div>
    )
}

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalLocation = document.getElementById('overlays')
const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onOutsideClose={props.onBackdropClose}/>, portalLocation)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </React.Fragment>
    )
}

export default Modal