import React, { useState } from 'react';

export const Alert = ({ message, type, onClose }: any) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={`alert ${type} ${isVisible ? 'visible' : 'hidden'}`}>
            <span>{message}</span>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}