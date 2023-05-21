import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios
import './css/jwsvenStyle.css';
import { Link } from 'react-router-dom';
import { faUser, faEnvelope, faLock, faLockOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './css/style.css';
import swal from 'sweetalert';
import Input from "./inputs/Input";
import SideImage from "./SideImage";

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/dashboard";
    }
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [referer, setReferers] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (username.length < 3) {
      swal('ALERT', 'Name is required', 'error');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      swal('ALERT', 'Invalid email format', 'error');
    } else if (password.length < 6) {
      swal('ALERT', 'Password must be at least 6 characters long', 'error');
    } else if (password !== cpassword) {
      swal('ALERT', 'Password does not match', 'error');
    } else {
      try {
        setLoading(true);

        const url: string = "http://localhost:8080/api/v1/user/create";
        const response = await axios.post(url, { username, email, password });

        setLoading(false);

        const result = response.data;
        const message = result.data.message;
        console.log(result)
        console.log(message)
        if (message === "SUCCESS") {
          swal('SUCCESS', 'Registration successful', 'success');
          setRegistrationError("")
        } else {
          throw new Error("Error",result.message)
        
        }
      } catch (err: any) {
        setLoading(false);
        console.log(err);
        swal('ALERT', "Error registering user", 'error');
        setRegistrationError("Error registering user. Please try again later.");
      }
    }
  };

  return (
    <div className="app_register display wi-100 align-items justify-content">
      {loading && (
        <div className="beforeLoader">
          <p>Loading.....</p>
        </div>
      )}
       
        <SideImage />
        <div className="wi-45 colum2 display flex-direction align-items justify-content ">
      <h1 className="blue"><span style={{fontFamily:"monospace"}}>Media</span><span style={{fontFamily:"fantasy"}}>*xOne</span></h1>
      {registrationError && <p>{registrationError}</p>}
      <div className="rowForm ">
      <form onSubmit={handleFormSubmit} className="display wi-100 flex-direction justify-content">
      
        <Input 
          icon={faUser}
          label="name"
          type="text"
          id="name"
          placeholder="Name"
          value={username}
          onChange={(event:any) => setUsername(event.target.value)}/>
     
        <Input
         icon={faEnvelope}
         label="email"
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
    
        <Input
         icon={faLock}
         label="password"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        
        <Input
         icon={faLockOpen}
         label="cpassword"
          type="password"
          placeholder="Confirm Password"
          id="cpassword"
          value={cpassword}
          onChange={(event) => setcPassword(event.target.value)}
        />
             
        <Input
          icon={faUserAlt}
          label="referer"
          type="text"
          placeholder="Referer Link"
          id="referer"
          value={referer}
          onChange={(event) => setReferers(event.target.value)}
        />
        <button type="submit">Register</button>
        <p> &nbsp; Already have an Account <Link to="/login" className="text-u-none" >Login</Link></p>
      </form>
      </div>
     
    </div>
    </div>
  );


};

export default Register;
