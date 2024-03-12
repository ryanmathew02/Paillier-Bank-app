import axios from 'axios';
import React, { useState } from 'react'

const VerifyAcc = ({ userDetails, setpassCheck }) => {
    console.log(userDetails);
    const [code, setcode] = useState("")
    async function verifyAccount() {
        if (code == '') {
            alert('Enter the code')
            return;
        }
        await axios.post('http://localhost:5000/user/CodeVerify', {
            code: code,
            userDetails: userDetails
        }).then(res => {
            if (res.data.status == 200) {
                setpassCheck(false)
            } else {
                alert("Please Check the Security Code");
                return;
            }
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="register-block">
            <div className="input-field-register">
                <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
            </div>
            <div className="input-field-register">
                <p>Phone Number: {userDetails.accountNumber}</p>
            </div>
            <div className="input-field-register">
                <p>Account Number: {userDetails.phoneNumber}</p>
            </div>
            <div className="input-field-register">
                <p>Account ID: {userDetails.accountID}</p>
            </div>
            <div className="input-field-register">
                <p>Email: {userDetails.email}</p>
            </div>
            <div className="input-field-register">
                <input value={code} placeholder='Security Code' onChange={(e) => setcode(e.target.value)}></input>
                <button onClick={verifyAccount}>Verify</button>
            </div>
        </div>
    )
}

export default VerifyAcc
