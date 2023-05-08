import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHome,faBell,faExplosion, faEnvelope, faMessage, faServer, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
interface getUserByID{
    username:string,
    email:string,
    password:string
}

interface datas {
    sends: getUserByID[];
    images:string
  }

  let nameofUser:string;
  let emails:string;
  let passwords:string;
  const Left = (props: datas)=>{

    const [name ,setName] = useState("");
    const [password ,setPassword] = useState("");
    const [email ,setEmail] = useState("");
   
    const holed:any = props.sends;

    useEffect(() => {
      
    setName(holed.username);
    setPassword(holed.password);
    setEmail(holed.email);
    nameofUser=holed.username;
    emails=holed.email;
    passwords=holed.password;

        
        }, [props.sends]);
   
  
    return (
        <div className="left pad-10">
                  <h1 className="blue"><span style={{fontFamily:"monospace"}}>&nbsp;&nbsp;Media</span><span style={{fontFamily:"fantasy"}}>*xOne</span></h1>
                  <div className="wi-100 display align-items justify-content">
                    <div  style={{width:"40px",
                height:"40px",
                borderRadius:"100px"}}><img  style={{width:"100%",
                height:"100%",
                borderRadius:"100px"}} src={props.images}  alt={props.images} /></div>
                    <h4 className="pad-10 ccc">@{nameofUser}</h4>
                  </div>

                  <aside>
                  <li className="mag-50">
                        <FontAwesomeIcon icon={faHome} className="f20 blue" /><span className="f17 pad-left-10 blue">Dashboard</span>
                    </li>
                    <li className="mag-50">
                        <FontAwesomeIcon icon={faBell} className="f20 blue" /><span className="f17 pad-left-10 blue">Notification</span>
                    </li>
                    <li className="mag-50">
                        <FontAwesomeIcon icon={faEnvelope} className="f20 blue" /><span className="f17 pad-left-10 blue">Messages</span>
                    </li>
                    <li className="mag-50">
                        <FontAwesomeIcon icon={faExplosion} className="f20 blue" /><span className="f17 pad-left-10 blue">Explore</span>
                    </li>
                    <li className="mag-50">
                        <FontAwesomeIcon icon={faMessage} className="f20 blue" /><span className="f17 pad-left-10 blue">Chat Blue</span>
                    </li>
                    <li className="mag-50">
                        <FontAwesomeIcon icon={faServer} className="f20 blue" /><span className="f17 pad-left-10 blue">Verrified</span>
                    </li>
                    <li className="mag-50 cursor" onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.href="/login"
                    }}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="f20 blue" /><span className="f17 pad-left-10 blue">Sign Out</span>
                    </li>
                  </aside>

        </div>
    )
}
export default Left;