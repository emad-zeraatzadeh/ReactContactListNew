import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {NewContact} from "./pages/NewContact.jsx";
import {ContactSingle} from "./pages/ContactSingle.jsx";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<ContactSingle/>}/>
                <Route path="/new-contact" element={<NewContact/>}/>
            </Routes>
        </div>
    );
};

export default App;