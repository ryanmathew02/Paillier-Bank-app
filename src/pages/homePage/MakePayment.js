import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';

const MakePayment = ({ userBeif, setSelectedUser }) => {
    console.log(userBeif);

    return (
        <div className='Payment-box'>
            <div className="accountdetail-head">Pay to Benificiaries:</div>
            <div className='benificiary-list'>
                {
                    userBeif.map(user => (
                        <div className="pay-benificiary">
                            <p>Name: {user.userID.Name}</p>
                            <p>Account Number: {user.userID.accountID} </p>
                            <button onClick={() => {
                                setSelectedUser(user);
                                Navigate()
                            }} >Pay</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MakePayment
