import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css';
import NavBar from './NavBar';
import MakePayment from './MakePayment';
import AddBenificiary from './AddBenificiary';
import History from './History';
import Home from './Home';




const Dashboard = () => {
    const [userDetails, setuserDetails] = useState([]);
    const [navSelect, setnavSelect] = useState(0);
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

    function logout() {
        console.log("Logout function");
    }
    return (
        <div className='parent-register'>
            <div className="bankName">
                <p className='heading-page'>Pailliers bank</p>
                <div className="dashboard-logout-home">
                    <button className='dashboard-home' onClick={() => { setnavSelect(0) }}>HOME</button>
                    <button className='dashboard-logout' onClick={logout}>LOGOUT</button>
                </div>
            </div>
            <div className="dashboard-body">
                <NavBar setnavSelect={setnavSelect} />
                <div className="dashboard-content">
                    {navSelect == 0 && (
                        <Home />
                    )}
                    {navSelect == 1 && (
                        <MakePayment />
                    )}
                    {navSelect == 2 && (
                        <AddBenificiary />
                    )}
                    {navSelect == 3 && (
                        <History />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
