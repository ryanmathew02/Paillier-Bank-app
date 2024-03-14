import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PayPortal = ({ selectedUser }) => {
    const navigate = useNavigate();

    const [Password, setPassword] = useState("");
    const [code, setcode] = useState("");
    const [ammount, setammount] = useState("");
    function Transaction() {
        axios.post('http://localhost:5000/transfer/makePayment', {
            ammount: ammount,
            password: Password,
            sendTo: selectedUser,
            code: code
        }, { withCredentials: true })
            .then(res => {
                console.log(res);
                navigate("/login")
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='Payment-Portal-box'>
            <div className="accountdetail-head"> Payment Portal : Verify</div>
            <div className="Payment-Portal-body">
                <div className="pay-portal-verify-details">
                    <p>Ammount:</p>
                    <input value={ammount} type="text" onChange={(e) => setammount(e.target.value)} />
                </div>
                <div className="pay-portal-verify-details">
                    <p>Transaction Password:</p>
                    <input value={Password} type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="pay-portal-verify-details">
                    <p>Verification Code:</p>
                    <input value={code} type="text" onChange={(e) => setcode(e.target.value)} />
                </div>
                <div className="send-button">
                    <button onClick={Transaction}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default PayPortal
