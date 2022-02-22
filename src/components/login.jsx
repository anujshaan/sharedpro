import React,{useState} from 'react'

const Login = () => {
  const initialState = {
    email:'',password:''
};
const [userData, setUserData] = useState(initialState);
const{email, password,} = userData;

const handleInputChange = e =>{
    const {name,value} = e.target;
    setUserData({...userData,[name]:value});
}
  return (
        <form action="">
            <div className="input-div">
                <input type="email" required name='email' value={email}
                onChange={handleInputChange}/>
                <label htmlFor="">Email</label>
            </div>
            <div className="input-div">
                <input type="password" required name='password' value={password}
                onChange={handleInputChange}/>
                <label htmlFor="">Password</label>
            </div>
            <button className='login-button'>Sign IN</button>
        </form>
  )
}

export default Login