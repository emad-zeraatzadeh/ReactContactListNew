import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import {Contact} from "./Contact.jsx";
import useErrorHandler from "../Hooks/useErrorHandler.jsx";
import {ContactError} from "./ContactError.jsx";

const CONTACT_API = "http://localhost:3000/contacts";
export const ContactList = () => {

    const [contacts, setContacts] = useState([]);
    const [TheError, handleError, closeError] = useErrorHandler();

    useEffect(() => {
        const getContacts = async () => {

            try {
                const {data} = await axios.get(CONTACT_API);
                setContacts(data);
            } catch (error) {
                handleError(error);
            }
        }

        getContacts();

    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/conasdasdtacts/${id}`)
            .then(response => {
                setContacts(contacts.filter((contact) => contact.id !== id));
            })
            .catch(error => {
                handleError(error);
            })
    }


    return (
        <>
            {TheError && (<ContactError error={TheError.message} closeError={closeError}/>)}
            <div className="contactList">
                {contacts.map(({id, name, number}) =>
                    <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDelete={() => handleDelete(id)}
                    />
                )}
            </div>
        </>
    );
};

