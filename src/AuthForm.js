import React, { useState } from 'react';
import UserValidation from './UserValidation';
import ClimbLogo from './logo.png';

function AuthForm(){

    const [action, setAction] = useState('Register');
    
    const [formvalues, setValues] = useState({
        usercode: '',
        forename:'',
        surname: '',
        dateofbirth: '',
        password: '',
        confpassword: ''
        })

    const [errors,setErrors] = useState({})

    function handleChange(e){
        setValues({...formvalues,[e.target.name]:e.target.value})
    }

    function handleSumbit(e){
        e.preventDefault();
        setErrors(UserValidation(formvalues));
    }

    return(
        <div className = 'wrapper'>
              <div className = 'user-area'>
                <h1>{action}</h1>
                <form onSubmit = {handleSumbit} className="user-form">
                    <div className="form-group">
                        <label for='usercode' name = 'usercode'>User Code</label>
                        <input type = 'text' name = 'usercode' placeholder = 'User Code' id='usercode' value = {formvalues.usercode} onChange={handleChange}/>
                        {errors.usercode && <p classname='form-error'>{errors.usercode}</p>}
                    </div>
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label for='forename' name = 'forname'>Forename</label>
                        <input type = 'text' name = 'forename' id='forename' placeholder = 'Forename' value = {formvalues.forename} onChange={handleChange}/>
                        {errors.forename && <p classname='form-error'>{errors.forename}</p>}
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label for='surname' name='surname'>Surname</label>
                        <input type = 'text' name = 'surname' id='surname' placeholder = 'Surname' value = {formvalues.surname} onChange={handleChange}/>
                        {errors.surname && <p classname='form-error'>{errors.surname}</p>}
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label for='dateofbirth' name='dateofbirth'>Date Of Birth</label>
                        <input type = 'date' name = 'datefbirth' id='dateofbirth' placeholder = 'D.o.B' value = {formvalues.dateofbirth} onChange={handleChange}/>
                        {errors.dateofbirth && <p classname='form-error'>{errors.dateofbirth}</p>}
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label for='email' name='email'>eMail</label>
                        <input type = 'email' name = 'email' id='email' placeholder = 'eMail' value = {formvalues.email} onChange={handleChange}/>
                        {errors.email && <p classname='form-error'>{errors.email}</p>}
                    </div>}
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                    <label for='socialise' name='socialise'>Socialise</label>
                        <select name="socialise" id='socialise'>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </div>}
                    <div className="form-group">
                        <label for='password' name='password'>Password</label>
                        <input type = 'password' name = 'password' id='password' placeholder = 'Password' value = {formvalues.password} onChange={handleChange}/>
                        {errors.password && <p classname='form-error'>{errors.password}</p>}
                    </div>
                    {action==='Login'?<div></div>:
                    <div className="form-group">
                        <label for='confpassword' name='confpassword'>Confirm Password</label>
                        <input type = 'password' name = 'confpassword' id='confpassword' placeholder = 'Confirm Password' value = {formvalues.confpassword} onChange={handleChange}/>
                    </div>}
                    <br/>
                    <input type = 'submit' name = 'submit'/>
                </form> 
                <br/>
                <div className={action==='Register'?"action-btn gray":"action-btn"} onClick={()=>{setAction('Register')}}>Register</div>
                <div className={action==='Login'?"action-btn gray":"action-btn"} onClick={()=>{setAction('Login')}}>Login</div>
                <div className="form-checkbox">
                    <label for='rememberMe' name='rememberMe'>Remember Me</label>
                    <input type = 'checkbox' name = 'rememberMe' id='rememberMe'/>
                </div>
            </div>
            {action==='Register'?<div></div>:<div><a className="forgotten" href="">Reset Password</a><a className="forgotten" href="">Forgotten User Code</a></div>}                   
            <br/>
        </div> //End Of Wrapper
                    
    );
}

export default AuthForm;
