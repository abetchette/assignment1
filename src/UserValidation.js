const UserValudation = (formvalues) =>{
    let errors = {}
   //const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[!@#$%^]).{8,30}$/;
   
   // Validate User Code
   if(!formvalues.usercode){
        errors.usercode = 'User Code required'
    }
    else if(formvalues.usercode.length < 6){
        errors.usercode = 'User Code must be 6 or more characters long'
    }

    // Validate eMail

    // Validate Password
    if (formvalues.password !== formvalues.confpassword){
        errors.password = 'Passwords do not match'
    }
    if (formvalues.password.length < 8){
        errors.password = 'Passwords must be a minmum of 8 characters'
    }

   //console.log(formvalues);
   //console.log(formvalues.usercode);
   //console.log(formvalues.forename);
   //console.log(formvalues.surname);
   

    return errors;
}

export default UserValudation;