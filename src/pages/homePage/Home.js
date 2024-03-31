import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Home = ({ userDetails }) => {
    const [balancepassword, setbalancepassword] = useState("")
    const [balance, setbalance] = useState("")

    async function UserBalance() {
        axios.get('http://localhost:5000/transfer/balance', { withCredentials: true })
            .then(result => {
                console.log(result);
                setbalance(result.data.balance);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='Home-box'>
            <div className="accountdetail-head">ACCOUNT DETAILS:</div>
            <div className="accountdetails">
                <div className="accountdetails-content">
                    <p>Account Number:</p>
                    <p>askmcla</p>
                </div>
                <div className="accountdetails-content">
                    <p>Account Name:</p>
                    <p>ds dv</p>
                </div>
                <div className="accountdetails-content">
                    <p>Balance:</p>
                    <p></p>
                </div>
                <br />
                <div className="accountdetails-content">
                    <p>Check Balance:</p>
                    <input value={balancepassword} placeholder='Transaction Password' onChange={(e) => setbalancepassword(e.target.value)}></input>
                    <button onClick={UserBalance}>Check</button>
                    <p>{balance}</p>
                </div>
            </div>
        </div>
    )
}

export default Home
