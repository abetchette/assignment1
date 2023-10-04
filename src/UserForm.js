import React, { useState } from 'react';
import UserValudation from './UserValidation';

function UserForm(){
    const [action, setAction] = useState('Register');
    //const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[!@#$%^]).{8,30}$/;

    return(
        <div className = 'wrapper'>
            <div className = 'user-area'>
                <h1>{action}</h1>
                <div className="user-form">
                    <div className="form-group">
                        <label>User Code</label>
                        <input type = 'text' name = 'userCode' placeholder = 'User Code' />
                    </div>
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label>Forename</label>
                        <input type = 'text' name = 'foreName' placeholder = 'Forename' />
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label>Surname</label>
                        <input type = 'text' name = 'surName' placeholder = 'Surname' />
                    </div>}
                    {action==='Login'?<div></div>:<div className="form-group">
                        <label>Date Of Birth</label>
                        <input type = 'date' name = 'dob' placeholder = 'D.o.B' />
                    </div>}
                    {action==='Login'?<div></div>:<div className="form-group">
                        <label>Socialise</label>
                        <select name="socialise">
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label>eMail</label>
                        <input type = 'email' name = 'email' placeholder = 'eMail Address' />
                    </div>}
                    <div className="form-group">
                        <label>Password</label>
                        <input type = 'password' name = 'password' placeholder = 'Password' />
                    </div>
                    {action==='Login'?<div></div>:<div className="form-group">
                        <label>Confirm Password</label>
                        <input type = 'password' name = 'confPassword' placeholder = 'Confirm Password' />
                    </div>}
                </div>
                    <div className={action==='Register'?"submit-btn gray":"submit-btn"} onClick={()=>{setAction('Register')}}>Register</div>
                    <div className={action==='Login'?"submit-btn gray":"submit-btn"} onClick={()=>{setAction('Login')}}>Login</div>
                <div className="form-checkbox">
                    <label>Remember Me</label>
                    <input type = 'checkbox' name = 'rememberMe' />
                </div>
            </div>
            {action==='Register'?<div></div>:<div><a className="forgotten" href="">Reset Password</a><a className="forgotten" href="">Forgotten User Code</a></div>}                   
       <br></br>
       </div>
                    
    );
}

export default UserForm;
