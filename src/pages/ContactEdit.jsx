import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {FaCircleCheck, FaCircleXmark} from "react-icons/fa6";
import {ContactError} from "../components/ContactError.jsx";
import useErrorHandler from "../Hooks/useErrorHandler.jsx";

export const ContactEdit = () => {

    const [contacts, setContacts] = useState(null);
    const [number, setNumber] = useState("");
    const [edit, setEdit] = useState(false);
    const {id} = useParams();
    const [TheError, handleError, closeError] = useErrorHandler();



    useEffect(() => {

        axios.get(`http://localhost:3000/contacts/${id}`)
            .then(response => {
                setContacts(response.data)
            })
            .catch(error => {
                handleError(error);
            });
    }, [])

    if (!contacts) {
        return <div>Loading...</div>
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatePhone = {...contacts, number};

        axios.put(`http://localhost:3000/contacts/${id}`, updatePhone)
            .then(response => {
                setContacts(response.data);
                setEdit(false);
            })
            .catch(error => {
                handleError(error);
            })
    }

    return (
        <>
            {TheError && (<ContactError error={TheError.message} closeError={closeError}/>)}
            <div className="contactSingle">
                <h1 className="contactSingle__title">{contacts.name}</h1>
                <div className="contactSingle__info">
                    <span className="info__id">Mobile:</span>
                    <span className="info__number">{contacts.number}</span>
                </div>
                {edit ? (
                    <form onSubmit={handleSubmit} className="contactSingle__form">
                        <input
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            className="form__edit-input"
                            type="tel"/>
                        <button className="form__edit__acc" type="submit">
                            <FaCircleCheck
                                className="form__icon form__icon--green"/>
                        </button>
                        <FaCircleXmark
                            onClick={() => setEdit(false)}
                            className="form__icon form__icon--red"/>
                    </form>
                ) : (
                    <div className="contactSingle__btn">
                        <button
                            onClick={() => setEdit(true)}
                            className="btn__self btn__self--edit">Edit
                        </button>
                        <Link className="btn__self btn__self--back" to="/">Back</Link>
                    </div>
                )}
            </div>
        </>
    );
};

