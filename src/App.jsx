import {useState} from 'react'
import img1 from "./assets/img1.jpeg";
import logo from "./assets/logo.png";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(false)
  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="wrapper__leftside">
          <img src={img1} alt="" />
          <div className="leftside__details">
            <h5>Foolproof your company against fluctuation in demand</h5>
            <p>
              with a platform connecting companies to share full-time employees.
            </p>
          </div>
        </div>
        <div className="wrapper__rightside">
          <img src={logo} alt="" />
          {isLoginForm ? <Login/> : <Register/>}
          <p className="form-bottom">
            Already have an account? <span onClick={()=>setIsLoginForm(!isLoginForm)}>
              {
                isLoginForm ? 'Sign Up' : 'Sign IN'
              }
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
