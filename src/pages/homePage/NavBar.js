import React from 'react'
import moneyTransfer from '../../images/money-transfer.png';
import historylogo from '../../images/user-history.png';
import Benificiary from '../../images/user-logo.jpg';

const NavBar = ({ setnavSelect }) => {
    return (
        <div className="dashboard-option">
            <div className="dashboard-option-content profile">

            </div>
            <div className='dashboard-option-content' onClick={() => setnavSelect(1)}>
                <div className="option-image">
                    <img src={moneyTransfer} alt="" className='option-image-style' />
                </div>
                <div className='option-name' >Make Payment</div>
            </div>
            <div className='dashboard-option-content' onClick={() => setnavSelect(2)}>
                <div className="option-image">
                    <img src={Benificiary} alt="" className='option-image-style' />
                </div>
                <div className='option-name' >Add Benificiary</div>
            </div>
            <div className='dashboard-option-content' onClick={() => setnavSelect(3)}>
                <div className="option-image">
                    <img src={historylogo} alt="" className='option-image-style' />
                </div>
                <div className='option-name' >Payment HIstory</div>
            </div>
        </div>
    )
}

export default NavBar
