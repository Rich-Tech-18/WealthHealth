import './ModalComp.css';
import React from 'react';
import {Modal} from "@rich-tech-18/composant-library-react";


/**
 * Component for showing the Modal.
 *
 * 
 * @param {boolean} closeModal - boolean for showing the modal
 * @return HTML element
 * 
 */

const ModalComp = ({closeModal}) => {

    // const handleCloseModal = () => {
    //     document.body.style.overflow = "unset";
    //     closeModal(false);
    // }

    // return (
    //     <div className="modalBackground">
    //         <div className="modalContainer">
    //             <div>Employee Created!</div>
    //             <button className="closeButton" onClick={handleCloseModal}>X</button>
    //         </div>
    //     </div>
    // )
    return(
        <Modal closeModal={closeModal}/>
    )
    
}

export default ModalComp;