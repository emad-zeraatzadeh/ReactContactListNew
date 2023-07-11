import React from 'react';
import {FaTrashCan} from "react-icons/fa6";
import {FaPen} from "react-icons/fa6";
import {Link} from "react-router-dom";


export const Contact = ({id, name, number, onDelete}) => {

    return (
        <div className="contact">
            <Link className="contact__items" to={`/${id}`}>
                <span className="items__single">{name}</span>
                <span className="items__single">{number}</span>
            </Link>
            <div className="contact__buttons">
                <FaTrashCan onClick={onDelete} className="items__icon items__icon--delete"/>
                <Link to={`${id}`}>
                    <FaPen className="items__icon items__icon--edit"/>
                </Link>
            </div>
        </div>
    );
};

