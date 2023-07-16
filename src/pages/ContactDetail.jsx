import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {ContactError} from "../components/ContactError.jsx";
import useErrorHandler from "../Hooks/useErrorHandler.jsx";


export const ContactDetail = () => {

    const [contact, setContact] = useState([]);
    const {id} = useParams();
    const [TheError, handleError, closeError] = useErrorHandler();

    useEffect(() => {

        axios.get(`http://localhost:3000/contacts/${id}`)
            .then(response => {
                setContact(response.data)
            })
            .catch(error => {
                handleError(error);
            });
    }, [])

    return (
        <>
            {TheError && (<ContactError error={TheError.message} closeError={closeError}/>)}
            <div className="contactDetail">
                <h1 className="contactDetail__title">
                    {contact.name}
                </h1>
                <div className="contactDetail__info">
                    <span className="info__label">Phone:</span>
                    <span className="info__number">{contact.number}</span>
                </div>
                <Link className="contactDetail__btn" to="/">Go to contacts</Link>
            </div>
        </>
    );
};

