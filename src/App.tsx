
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import OTP from "./components/OTP";
import AddBank from "./components/AddBank";

function App()  {
  return (
    <div className="App">
      <Router>
        <Routes>
      
        <Route  path="/register"
            element ={<Register />} />
                 <Route  path="/bank"
            element ={<AddBank />} />
               <Route  path="/login"
            element ={<Login /> }/>
         <Route path="/dashboard" element={ 
              <Dashboard />} />
              <Route path ="/user/entryPoint" element = {
                  <OTP />
              } />
             
        
         <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      </div>
   
  );
};

export default App;
