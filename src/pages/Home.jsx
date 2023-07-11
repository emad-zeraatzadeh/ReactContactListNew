import React from 'react';
import {ContactList} from "../components/ContactList.jsx";
import {useNavigate} from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/new-contact");
    }


    return (
        <div className="landing">
            <div className="landing__element">
                <h1 className="element__title">Contact List</h1>
                <span className="element__helper">Press the button down below to add contact</span>
                <button className="element__btn" onClick={handleClick}>Add Contact</button>
            </div>
            <div className="landing__contact">
                <h1 className="contact__title">Your Contacts</h1>
                <ContactList/>
            </div>
        </div>
    );
};