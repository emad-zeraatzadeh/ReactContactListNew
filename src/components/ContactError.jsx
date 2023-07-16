import React from 'react';
import { FaXmark } from "react-icons/fa6";
export const ContactError = ({error, closeError}) => {


    return (
        <div className="error">
            <div className="error__box">
                <div className="error__title">
                    Error
                </div>
                <div className="error__description">
                    {error}
                </div>
                <div className="error__close" onClick={closeError}>
                    dismiss
                </div>
            </div>
        </div>
    );
};

