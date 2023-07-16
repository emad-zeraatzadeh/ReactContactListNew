import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {ContactError} from "./ContactError.jsx";
import useErrorHandler from "../Hooks/useErrorHandler.jsx";

const CONTACT_API = "http://localhost:3000/contacts";

export const ContactForm = () => {

    const [contact, setContact] = useState({name: "", number: ""})
    const {name, number} = contact;
    const navigate = useNavigate();
    const [TheError, handleError, closeError] = useErrorHandler();

    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name.trim() === "" || number.trim() === "") {
            alert("full all inputs")
        } else {
            try {
                await axios.post(CONTACT_API, contact);
                setContact({name: "", number: ""})
                navigate("/")

            } catch (error) {
                handleError(error)
            }
        }
    }

    return (
        <>
            {TheError && (<ContactError error={TheError.message} closeError={closeError}/>)}
            <form className="newContact__form" onSubmit={handleSubmit}>
                <div className="form__section">
                    <input className="section__input"
                           type="text"
                           placeholder="your name"
                           value={name}
                           name="name"
                           onChange={handleChange}/>
                </div>
                <div className="form__section">
                    <input className="section__input"
                           type="tel"
                           placeholder="your phone number"
                           value={number}
                           name="number"
                           onChange={handleChange}/>
                </div>
                <div className="form__btn">
                    <Link className="btn__add" to="/">Back to contacts</Link>
                    <button className="btn__add" type="submit">Add</button>
                </div>
            </form>
        </>
    );
};

