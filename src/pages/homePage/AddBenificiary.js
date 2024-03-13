import axios from 'axios';
import React, { useState } from 'react'

const AddBenificiary = () => {
    const [accountNumber, setaccountNumber] = useState("");

    async function AddBenifi() {
        console.log("AddBenifi");
        await axios.post('http://localhost:5000/benificiary/addBenificiary', {
            accountNumber: accountNumber
        }, { withCredentials: true }).then(result => {
            console.log(result);
            if (result.status(200)) {
                alert("Benificiary Added")
            } else {
                alert("Error ", result.data.message);
            }
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
