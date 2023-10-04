const UserValudation = (values) =>{
    let errors = {}
   //const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[!@#$%^]).{8,30}$/;
   console.log('Debug1:'+ values.usecode);
   
   if(!values.usecode){
        errors.usercode = 'User Code required'
    }
    else if(values.usercode.length < 6){
        errors.usercode = 'User Code must be 6 or more characters long'
    }
    // Add All validation In Here!!
   console.log(values)

    return errors;
}

export default UserValudation;