import React, { useState } from 'react';
import './SignUp.css';

const SignUp =()=>{
  
    const [action, setAction] = useState('Register');
    
    return(
        <div className="container">
            <div className='header'>
				<div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
			<div>
				<div className='inputs'>
                    {action==='Forgotten User'?<div></div>:
					<div className='input'>
						<div className='field'>User Name</div>
						<input type="text" placeholder="Enter User Name" name="username" required />
					</div>}
                    {action!=='Register'?<div></div>:
					<div className='input'>
						<div className='field'>Forename</div>
						<input type="text" placeholder="Enter Forename" name="forename" required />
					</div>}
					{action!=='Register'?<div></div>:
                    <div className='input'>
						<div className='field'>Surname</div>
						<input type="text" placeholder="Enter Surname" name="surname" required />
					</div>}
					{action!=='Register'?<div></div>:<div className='input'>
						<div className='field'>Date Of Birth</div>
						<input type="date" name="dateofbirth" />
					</div>}
					{action!=='Register'?<div></div>:<div className='input'>
					<div className='field'>eMail Address</div>
						<input type="text" placeholder="Enter eMail Address" name="email" required />
						</div>}
					{action!=='Forgotten Password'?<div></div>:<div className='input'>
						<div className='field'>Security Code</div>
						<input type="text" placeholder="Enter Security Code" name="seccode" />
					</div>}
					{action==='Forgotten Password'?<div></div>:<div className='input'>
						<div className='field'>Password</div>
						<input type="password" placeholder="Enter Password" name="pwd" required />
					</div>}
					{action!=='Register'?<div></div>:<div className='input'>
						<div className='field'>Confirm Password</div>
						<input type="password" placeholder="Confirm Password" name="cnfpwd" />
					</div>}
					{action!=='Contact Us'?<div></div>:<div className='input'>
						<div className='field'>Subject</div>
						<select name="subject">
							<option value='account'>Account Issue</option>
							<option value='gym'>Gym Details</option>
							<option value='bug'>Report A Bug</option>
							<option value='other'>Other</option>
						</select>
						<div className='field'>Message</div>
						<textarea placeholder="Message" name="comment" />
					</div>}
				</div>
				<div className='submit-container'>
                    <div className='submit'>Submit</div>
                </div>
                <div className='actions'>
					<div className={action==='Register'?'chnge-action chnge-active':'chnge-action'} onClick={()=>{setAction('Register')}}>Register</div>
					<div className={action==='Login'?'chnge-action chnge-active':'chnge-action'} onClick={()=>{setAction('Login')}}>Login</div>
					<div className={action==='Forgotten User'?'chnge-action chnge-active':'chnge-action'}onClick={()=>{setAction('Forgotten User')}}>Forgotten User Code</div>
					<div className={action==='Forgotten Password'?'chnge-action chnge-active':'chnge-action'}onClick={()=>{setAction('Forgotten Password')}}>Forgotten Password</div>
					<div className={action==='Contact Us'?'chnge-action chnge-active':'chnge-action'}onClick={()=>{setAction('Contact Us')}}>Contact Us</div>
				</div>
			</div>
		</div>
    
    );
}

export default SignUp;
