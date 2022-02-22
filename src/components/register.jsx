import React,{useState} from 'react'
import valid from '../valid';
import Success from './success';
const Register = () => {
    const initialState = {
        fullname:'',email:'',password:'',cf_password:'',hometown:'',phno:''
    };
    const [userData, setUserData] = useState(initialState);
    const{fullname, email, password, cf_password, hometown, phno} = userData;
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = e =>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value});
    }
    const [matchedPass, setMatchedPass] = useState(false)
    const handleSubmit = e =>{
        e.preventDefault();
        if(password !== cf_password){
            setMatchedPass(true)
        }
        else{
            setIsSuccess(true)
        }

    }

  return (
      <>
        {
           isSuccess ? <Success props={userData} />
           :<form onSubmit={handleSubmit}>
            <div className="input-div">
                <input type="text" name='fullname' required value={fullname} 
                 onChange={handleInputChange}/>
                <label>Full Name</label>
            </div>
            <div className="input-div">
                <input type="email" name='email' required value={email}
                onChange={handleInputChange}/>
                <label>Email</label>
            </div>
            <div className="input-div">
                <input type="password" name='password' required value={password}
                onChange={handleInputChange}/>
                <label>Password</label>
            </div>
            <div className="input-div">
                <input type="password" name='cf_password' required value={cf_password}
                onChange={handleInputChange}/>
                <label>Confirm Password</label>
                <small>{matchedPass ? 'Password not matched' : ''}</small>
            </div>
            <div className="input-div">
                <input type="text" required name='hometown' value={hometown}
                onChange={handleInputChange}/>
                <label>HomeTown</label>
            </div>
            <div className="input-div">
                <input type="tel" required name='phno' value={phno} pattern="[0-9]{10}"
                onChange={handleInputChange}/>
                <label>Mobile</label>
            </div>
            <button type='submit' className='login-button'>Sign Up</button>
        </form>
    }
    </>
  )
}

export default Register