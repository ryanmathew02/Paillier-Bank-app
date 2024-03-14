import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router";


const AddBenificiary = ({ setrefresh, refresh }) => {
    const [accountNumber, setaccountNumber] = useState("");
    const navigate = useNavigate();

    async function AddBenifi() {
        console.log("AddBenifi");
        await axios.post('http://localhost:5000/benificiary/addBenificiary', {
            accountNumber: accountNumber
        }, { withCredentials: true }).then(result => {
            console.log(result);
            alert('Added Benificiary')
            setrefresh(!refresh)

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='benificiary-box'>
            <div className="accountdetail-head">Benificiary Details:</div>
            <div className="benificiary-details">
                <div className='benificiary-row'>
                    <div className="accountdetails-content">
                        <p>Benificiary Name:</p>
                        <input placeholder='ACCOUNT NUMBER' value={accountNumber} onChange={(e) => setaccountNumber(e.target.value)}></input>
                    </div>
                    <div className="accountdetails-content">
                        <p>Benificiary Account Number:</p>
                        <input placeholder='NAME'></input>
                    </div>
                    <div className="accountdetails-content">
                        <p>Branch:</p>
                        <input placeholder='BRANCH'></input>
                    </div>
                </div>
                <div className='benificiary-row add'>
                    <button onClick={AddBenifi}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddBenificiary
