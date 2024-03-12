import React, { useState } from 'react'
import '../register/style.css';
import CheckAcc from './CheckAcc';
import VerifyAcc from './VerifyAcc';
import SetPass from './SetPass';


const Register = () => {
    const [checkAccount, setcheckAccount] = useState(true);
    const [passCheck, setpassCheck] = useState(true)
    const [userDetails, setuserDetails] = useState()
    return (
        <div className='parent-register'>
            <div className="bankName"><p className='heading-page'>Pailliers bank</p></div>
            <div className="registerHead"><p className='registerHeadContent'>User Driven Registration - New User</p></div>
            <div className="registerForm">
                {checkAccount && passCheck ? (
                    <CheckAcc
                        setcheckAccount={setcheckAccount}
                        setuserDetails={setuserDetails} />
                ) : (
                    passCheck ? (
                        <VerifyAcc userDetails={userDetails} setpassCheck={setpassCheck} />
                    ) : (
                        <SetPass userDetails={userDetails} />
                    )
                )}
            </div>
        </div>
    )
}

export default Register