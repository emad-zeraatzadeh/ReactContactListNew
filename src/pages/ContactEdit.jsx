import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FaCircleCheck, FaCircleXmark} from "react-icons/fa6";
import {ContactError} from "../components/ContactError.jsx";
import useErrorHandler from "../Hooks/useErrorHandler.jsx";

export const ContactEdit = () => {

    const [contacts, setContacts] = useState(null);
    // const [number, setNumber] = useState("");
    // const [name, setName] = useState("");
    const [edit, setEdit] = useState(false);
    const {id} = useParams();
    const [TheError, handleError, closeError] = useErrorHandler();
    const navigate = useNavigate();


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

        axios.put(`http://localhost:3000/contacts/${id}`, contacts)
            .then(response => {
                setContacts(response.data);
                setEdit(false);
            })
            .catch(error => {
                handleError(error);
            })
        navigate("/");
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
                            onChange={(e) => setContacts({...contacts, name: e.target.value})}
                            value={contacts.name}
                            className="form__edit-input"
                            type="text"
                        />
                        <input
                            onChange={(e) => setContacts({...contacts, number: e.target.value})}
                            value={contacts.number}
                            className="form__edit-input"
                            type="tel"
                        />
                        <div className="form__buttons">
                            <button className="form__edit__acc" type="submit">
                                <FaCircleCheck
                                    className="form__icon form__icon--green"/>
                            </button>
                            <FaCircleXmark
                                onClick={() => setEdit(false)}
                                className="form__icon form__icon--red"/>
                        </div>
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

