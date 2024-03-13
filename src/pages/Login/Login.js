import React, { useState } from 'react'
import './Login.css';
import loginImg from '../../images/bank.jpg'
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [accountID, setaccountID] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const navigate = useNavigate();


  async function userlogin() {
    console.log("userlogin");
    if (accountID == '' || loginPassword == '') {
      alert("Please enter both the fields");
      return;
    }
    axios.post('http://localhost:5000/user/login', {
      accountID: accountID,
      password: loginPassword
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, withCredentials: true
    }).then(res => {
      console.log(res.cookie);
      if (res.status == 200) {
        navigate("/dashboard");
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="parent">
      <div className="loginPageimg">
        <img src={loginImg} alt="" />
      </div>
      <div className="loginPageform">
        <div className="bankName"><p className='heading-page'>Pailliers bank</p></div>
        <div className="userlogin">
          <div className='loginBox'>
            <div className="loginHead"> Account Login</div>
            <div className="loginDetails">
              <input value={accountID} className="input-field" placeholder='Account ID' onChange={(e) => setaccountID(e.target.value)} />
              <input type='password' value={loginPassword} className="input-field" placeholder='Login Password' onChange={(e) => setloginPassword(e.target.value)} />
              <button className='login-button' onClick={userlogin}>Login</button>
              <Link to="/register">New Registration</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login