import React from 'react';
import './ErrorModal.css';

function ErrorModal({ message, onClose }) {
    if (!message) return null;

    return (
        <div className="error-modal-overlay">
            <div className="error-modal">
                <h2>Error</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ErrorModal;
