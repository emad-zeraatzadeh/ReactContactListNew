import React from 'react';
import {ContactForm} from "../components/ContactForm.jsx";

export const NewContact = () => {


    return (
        <div className="newContact">
            <h1 className="newContact__title">New Contact</h1>
            <ContactForm/>
        </div>
    );
};