import axios from 'axios';
import React, { useState } from 'react'

const CheckAcc = ({ setcheckAccount, setuserDetails }) => {
  const [AccountNumber, setAccountNumber] = useState("");
  const [AccountID, setAccountID] = useState("");
  const [email, setEmail] = useState("");

  async function checkAccount() {
    if (AccountNumber == "" || AccountID == "" || email == "") {
      alert("Please Enter all the fields")
    }
    axios.post(`http://localhost:5000/user/accountverify`, {
      accountID: AccountID,
      accountNumber: AccountNumber,
      email: email
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      console.log(res)
      if (res.data.status == 200) {
        setuserDetails(res.data.userDetails)
        setcheckAccount(false)
      }

    }).catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="register-block">
      <div className="input-field-register">
        <p>Account Number</p>
        <input value={AccountNumber} type="text" onChange={(e) => setAccountNumber(e.target.value)} />
      </div>
      <div className="input-field-register">
        <p>Account ID</p>
        <input value={AccountID} type="text" onChange={(e) => setAccountID(e.target.value)} />
      </div>
      <div className="input-field-register">
        <p>Email</p>
        <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className='register-button' onClick={checkAccount}>Register</button>
    </div>
  )
}

export default CheckAcc