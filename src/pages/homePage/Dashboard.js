import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css';
import NavBar from './NavBar';
import MakePayment from './MakePayment';
import AddBenificiary from './AddBenificiary';
import History from './History';
import Home from './Home';
import PayPortal from './PayPortal';




const Dashboard = () => {
    const [userDetails, setuserDetails] = useState();
    const [userBeif, setuserBeif] = useState([]);
    const [navSelect, setnavSelect] = useState(0);
    const [refresh, setrefresh] = useState(true);
    const [selectedUser, setSelectedUser] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:5000/user/getDetails', {
            withCredentials: true,
        }).then(res => {
            if (res.data.status == "400") {
                navigate("/login");
            }
            console.log(res.data.accountDetails);
            setuserDetails(res.data.accountDetails);
            console.log(userDetails);
            axios.get('http://localhost:5000/benificiary/getBenificiary', { withCredentials: true })
                .then(result => {
                    console.log(result);
                    setuserBeif(result.data.list.list);
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }, [refresh])

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
                        <Home userDetails={userDetails} />
                    )}
                    {navSelect == 1 && (
                        <MakePayment setSelectedUser={setSelectedUser} setnavSelect={setnavSelect} userBeif={userBeif} />
                    )}
                    {navSelect == 2 && (
                        <AddBenificiary refresh={refresh} setrefresh={setrefresh} />
                    )}
                    {navSelect == 3 && (
                        <History />
                    )}
                    {navSelect == 4 && (
                        <PayPortal selectedUser={selectedUser} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
