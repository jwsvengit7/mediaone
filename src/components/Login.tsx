import {Link,useNavigate} from 'react-router-dom';
import React, { useState,useEffect } from "react";
import axios from 'axios';
import './css/jwsvenStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
import './css/style.css';
import swal from 'sweetalert';
import https from 'https';



interface RegistrationFormProps {
    onRegisterMode: () => void;
  }

  const Login: React.FC<RegistrationFormProps> = ({ onRegisterMode }) => {
    const navigate = useNavigate();
    useEffect(()=>{
    if(localStorage.getItem("token")){
        navigate("/dashboard")
    }
},[])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");


  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();      
    if (email==="") {
        swal('ALERT','Email is required','error');
    }
  
    else {
      try {
        const agent = new https.Agent({
          rejectUnauthorized: false
        });
        
        const config = {
          httpsAgent: agent,
          headers: {
            "Content-Type": "application/json",
          }
        };
        const url:string="https://localhost:8080/api/v1/user/authenticate";
        const res = await axios.post(url,{ email, password },config
          );
        console.log(res)  
        const data:string=res.data.message
        const sessionID:string=res.data.data
            console.log(data)
            if (data==="Success") {
              let x=0;
              setInterval(()=>{
                x++;
                if(x===2){
                  swal('ALERT',data, 'success');
                  console.log(data)
                 
                 localStorage.setItem("token",sessionID);
               
                      window.location.href="/dashboard";
                }

              },1000)
              
                
            } else {
              setRegistrationError("Registration failed. Please try again.");
            }
        
    
      } catch (err:any) {
        console.error("Error registering user:", err);
            swal('ALERT', err.response.data.message, 'error');
         
        setRegistrationError("Error registering user. Please try again later.");
      }
    }
  };
  return (
    <div className="app_register display wi-100 align-items justify-content">
        <div className="wi-50 colum1">
        </div>
        <div className="wi-40 colum2 display flex-direction align-items justify-content ">
      <h1 className="blue"><span style={{fontFamily:"monospace"}}>Media</span><span style={{fontFamily:"fantasy"}}>*xOne</span></h1>
      {registrationError && <p>{registrationError}</p>}
      <div className="rowForm ">
      <form onSubmit={handleFormSubmit} className="display wi-100 flex-direction justify-content">
      
        <label htmlFor="email" className="blue">
            <FontAwesomeIcon icon={faEnvelope} className="f16 blue"/>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </label>
        <label htmlFor="password" className="blue">
        <FontAwesomeIcon icon={faLock} className="f16 blue"/>
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /></label>
        
               
         
        <button type="submit">Register</button>
        <p> &nbsp; Dont have an Account <Link to="/register" className="text-u-none" >Register</Link></p>
      </form>
      </div>
     
    </div>
    </div>
  );


};

export default Login;