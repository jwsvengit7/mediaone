import React, { useState,useEffect } from "react";
import axios from 'axios'; // Import axios
import './css/jwsvenStyle.css';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faLockOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './css/style.css';
import swal from 'sweetalert';

interface RegistrationFormProps {
  onRegisterMode: () => void,
 
}

const Register: React.FC<RegistrationFormProps> = ({ onRegisterMode }) => {
    const navigate = useNavigate(); 
    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate("/dashboard")
        }
    },[])
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [referer, setReferers] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (username.length < 3) {
      swal('ALERT', 'Name is required', 'error');
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      swal('ALERT', 'Invalid email format', 'error');
    }
    else if (password.length < 6) {
      swal('ALERT', 'Password must be at least 6 characters long', 'error');
    }
    else if (password !== cpassword) {
      swal('ALERT', 'Password does not match', 'error');
    }
    else {
      try {
        const url:string = "https://localhost:8080/api/v1/user/create";
        const res = await axios.post(url, { username, email, password });
        console.log(res);
        console.log(res.data.message);
        
     
        const data=res.data.message;
        console.log(data);
          if (data=== "Success") {
            window.location.href = "/login";
            onRegisterMode();
          } else {
            swal('ALERT', data, 'error');
          setRegistrationError("Registration failed. Please try again.");
        }
      } catch (err:any) {
        console.log("Error registering user:", err);
        if (err.response && err.response.data && err.response.data.message) {
            swal('ALERT', err.response.data.message, 'error');
          } else {
            swal('ALERT', "Error registering user. Please try again later.", 'error');
          }
       

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
        <label htmlFor="name" className="blue">
        <FontAwesomeIcon icon={faUser} className="f16 blue"/>
       
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        /></label>
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
         <label htmlFor="password" className="blue">
         <FontAwesomeIcon icon={faLockOpen} className="f16 blue"/>
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-input"
          id="cpassword"
          value={cpassword}
          onChange={(event) => setcPassword(event.target.value)}
        /></label>
                 <label htmlFor="password" className="blue">
         <FontAwesomeIcon icon={faUserAlt} className="f16 blue"/>
        <input
          type="text"
          className="form-input"
          placeholder="Referer Link"
          id="referer"
          value={referer}
          onChange={(event) => setReferers(event.target.value)}
        /></label>
        <button type="submit">Register</button>
        <p> &nbsp; Already have an Account <Link to="/login" className="text-u-none" >Login</Link></p>
      </form>
      </div>
     
    </div>
    </div>
  );


};

export default Register;
