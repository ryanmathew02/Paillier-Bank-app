import React from 'react'

const Home = ({ userDetails }) => {
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
            </div>
        </div>
    )
}

export default Home
