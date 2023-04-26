const express = require ("express");
const cors = require ("cors");
const path = require ("path");
const mysql = require ("mysql2");
const db = require ("../server/config/dbconnect.js");

const app = express();
const port = process.env.PORT || 3301;


app.use(cors());
app.use(express.json());




app.post("/writetodb", (req, res) => {
    //changed Business_Name to businessName
    const business_name = req.body.business_name;
    const contact_name = req.body.contact_name;
    const email = req.body.email;
    const phone = req.body.phone;
    const timestamp = req.body.timestamp;

    
    
    db.query(
        "INSERT INTO eoiForm (business_name, contact_name, email, phone, timestamp) VALUES (?,?,?,?,?)", 
        [business_name, contact_name, email, phone, timestamp],
        (error, result) => {
            if (error) {
            console.log(error + timestamp)
            }
            console.log(result);
    });
    
})

app.listen(port, () => {
    console.log("Server connected to port: " + port)
})
 