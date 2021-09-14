import React, { useState } from 'react';
import './Modal.css';



const Modal = ({ item }) => {
   const style = {
      width: "100%",
      height: "100%",
   };
   return (
      <div style={style} className='modal'>
         <p><span>Description:</span> {item.description}</p>
         <p><span>Modified:</span> {item.modified}</p>
      </div >
   )
}

export default Modal;
