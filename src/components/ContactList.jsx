import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import {Contact} from "./Contact.jsx";

const CONTACT_API = "http://localhost:3000/contacts";
export const ContactList = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {

            try {
                const {data} = await axios.get(CONTACT_API);
                setContacts(data);
            } catch (e) {
                console.log(e)
            }
        }

        getContacts();

    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/contacts/${id}`)
            .then(response => {
                setContacts(contacts.filter((contact) => contact.id !== id));
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
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
    );
};

