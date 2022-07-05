import React from 'react';
import '../../css/gifApp.css';

const Modal = ({ img, name, clo }) => {
    return (
        <div className='modalCard'>
            <button onClick={clo}>X</button>
            <div>
                <img src={img} alt={name} />
            </div>
        </div>
    );
}

export default Modal;
