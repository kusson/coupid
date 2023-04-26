import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utilities/firebase";
import EoiSuccess from "./eoiformsuccess";
import Axios from "axios";


function EoiForm() {

    const [bizName, setBizname] = useState("");
    const [contactName, setContactname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const timestamp = new Date();
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (bizName === "" || contactName === "" || email === "" || phone === "") {
            return (alert("Please complete all sections of the form."))
        }
        
        // Google Firebase write to db
        const vendorQ = collection(db, "Vendor Queries");
        addDoc(vendorQ, {
            bizName: bizName, 
            contactName: contactName, 
            email: email, 
            phone: phone, 
            timestamp: timestamp}
            ).then(response => {console.log(response)}).catch(error => {console.log(error.message)});
        
        
        //Writing to server db
        //When writing to local server, used http://localhost:3301/api/writetodb and with out "api". Both works, meaning this is not the cause. It will work as long as /writetobd
        //is present on server side. The issue seems to be server.js cannot use info from .env file.
        Axios.post("https://www.coupid.com.au/writetodb", {
            business_name: bizName,
            contact_name: contactName,
            email: email,
            phone: phone,
            timestamp: timestamp,
        })

        setSubmitted(true);
    };
    
    if (submitted) {
        return <EoiSuccess />
    };


    return (
        <form onSubmit={handleSubmit} method="POST" className="eoiField">
            <input id="biznameinput" type="text" name="businessName"  placeHolder="Business Name" value={bizName} onChange={e => setBizname(e.target.value)}/>
            <input id="contactnameinput" type="text" name="contactName"  placeHolder="Contact Name" value={contactName} onChange={e => setContactname(e.target.value)} />
            <input id="emailinput" type="email" name="email" placeHolder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
            <input id="phoneinput" type="text" name="phone" placeHolder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
            <button className="eoiButton" type="submit">Submit</button>
        </form> 
    )
}
export default EoiForm;

// // 1. Create an API on the server that can receive data from the form. This API will handle saving the data to the database.

// 2. In your React form, you'll use a fetch or axios request to send the form data to the API endpoint.

// 3. You'll need to ensure that the API endpoint is secure and properly validates any incoming data to prevent security vulnerabilities like SQL injection.

// 4. Once the API receives and saves the data, you may optionally return a response indicating success or failure to the client application.