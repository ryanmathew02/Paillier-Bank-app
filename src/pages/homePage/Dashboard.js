import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css';
import moneyTransfer from '../../images/money-transfer.png';
import historylogo from '../../images/user-history.png';
import Benificiary from '../../images/user-logo.jpg';


const Dashboard = () => {
    const [userDetails, setuserDetails] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/user/getDetails', {
            withCredentials: true,
        }).then(res => {
            if (res.data.status == "400") {
                navigate("/login");
            }
            setuserDetails(res.data.userDetails);
        })
    },)
    return (
        <div className='parent-register'>
            <div className="bankName">
                <p className='heading-page'>Pailliers bank</p>
                <button className='dashboard-logout'>LOGOUT</button>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-option">
                    <div className='dashboard-option-content'>
                        <div className="option-image">
                            <img src={moneyTransfer} alt="" className='option-image-style' />
                        </div>
                        <div className='option-name'>Make Payment</div>
                    </div>
                    <div className='dashboard-option-content'>
                        <div className="option-image">
                            <img src={Benificiary} alt="" className='option-image-style' />
                        </div>
                        <div className='option-name'>Add Benificiary</div>
                    </div>
                    <div className='dashboard-option-content'>
                        <div className="option-image">
                            <img src={historylogo} alt="" className='option-image-style' />
                        </div>
                        <div className='option-name'>Payment HIstory</div>
                    </div>
                </div>
                <div className="dashboard-content">
                    content
                </div>
            </div>

        </div>
    )
}

export default Dashboard
