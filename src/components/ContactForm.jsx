import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CONTACT_API = "http://localhost:3000/contacts";

export const ContactForm = () => {

    const [contact, setContact] = useState({name: "", number: ""})

    const {name, number} = contact;

    const navigate = useNavigate();

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

            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
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
                <button className="form__btn" type="submit">Add</button>
        </form>
    );
};

