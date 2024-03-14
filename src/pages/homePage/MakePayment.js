import axios from 'axios';
import React from 'react'

const MakePayment = ({ userBeif, setSelectedUser, setnavSelect }) => {
    console.log(userBeif);
    function MakePaymentTo(user) {
        console.log(user);
        setSelectedUser(user);
        axios.post('http://localhost:5000/transfer/getVerified', {
            sendTo: user
        }, { withCredentials: true }).then(result => {
            console.log(result);
            setnavSelect(4);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='Payment-box'>
            <div className="accountdetail-head">Pay to Benificiaries:</div>
            <div className='benificiary-list'>
                {
                    userBeif.map(user => (
                        <div className="pay-benificiary">
                            <p>Name: {user.userID.Name}</p>
                            <p>Account Number: {user.userID.accountID} </p>
                            <button onClick={() => MakePaymentTo(user)} >Pay</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MakePayment
