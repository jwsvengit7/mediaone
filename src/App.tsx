import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App()  {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleStatus = () => {
    setIsRegistered(true);
  
  };

  return (
    <div className="App">
      <Router>
        <Routes>
      
        <Route  path="/register"
            element ={<Register onRegisterMode={handleStatus} />} />
               <Route  path="/login"
            element ={<Login onRegisterMode={handleStatus} />} />
         <Route path="/dashboard" element={ 
              <Dashboard />} />
             
        
         <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      </div>
   
  );
};

export default App;
