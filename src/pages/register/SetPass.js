import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SetPass = ({ userDetails }) => {
    const navigate = useNavigate();
    const [loginPassword, setloginPassword] = useState("")
    const [transactionPassword, settransactionPassword] = useState("")
    const [loginRepassword, setloginRepassword] = useState("")
    const [RetransactionPassword, setRetransactionPassword] = useState("")

    async function setPassword() {
        if (loginPassword == '' || transactionPassword == '' || loginRepassword == '' || RetransactionPassword == '') {
            alert("Please fill all the fields")
            return;
        }
        if (loginPassword != loginRepassword || transactionPassword != RetransactionPassword) {
            alert("Check the passwords")
            return;
        }
        await axios.post('http://localhost:5000/user/setpassword', {
            userDetails: userDetails,
            transactionPassword: transactionPassword,
            loginPassword: loginRepassword,
        }).then(res => {
            if (res.data.status == 200) {
                alert("SuccessFull Register. Please try logining in");
                navigate("/login")
            }
        })
    }
    return (
        <div className="register-block">
            <div className="input-field-register">
                <p>loginPassword</p>
                <input value={loginPassword} type="text" onChange={(e) => setloginPassword(e.target.value)} />
            </div>
            <div className="input-field-register">
                <p>Retype loginPassword</p>
                <input value={loginRepassword} type="text" onChange={(e) => setloginRepassword(e.target.value)} />
            </div>
            <div className="input-field-register">
                <p>transactionPassword</p>
                <input value={transactionPassword} type="text" onChange={(e) => settransactionPassword(e.target.value)} />
            </div>
            <div className="input-field-register">
                <p>Retype transactionPassword</p>
                <input value={RetransactionPassword} type="text" onChange={(e) => setRetransactionPassword(e.target.value)} />
            </div>
            <button onClick={setPassword}>Set Passwords</button>
        </div>
    )
}

export default SetPass
