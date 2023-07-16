import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {NewContact} from "./pages/NewContact.jsx";
import {ContactEdit} from "./pages/ContactEdit.jsx";
import {ContactDetail} from "./pages/ContactDetail.jsx";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/edit/:id" element={<ContactEdit/>}/>
                <Route path="/contact/:id" element={<ContactDetail/>}/>
                <Route path="/new-contact" element={<NewContact/>}/>
            </Routes>
        </div>
    );
};

export default App;