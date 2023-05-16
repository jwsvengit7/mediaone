import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBars, faCloudDownloadAlt, faImage, faMessage, faShare, faThumbsUp, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import girl from '../../image/girl.jpeg';
import jwsven7 from '../../image/jwsven7.jpeg';
import fynie from '../../image/fynie.jpeg';
import Reaction from "./Reaction";

interface getUserByID{
    username:string,
    email:string,
    password:string
}
interface datas {
    sends: getUserByID[]; 
    images:string
  } 


  //let emails:string;

  const Center = (props: datas)=>{
    let [name ,setName] = useState("");
    const holed:any = props.sends;
    const stories =[
        jwsven7,
        girl,
        fynie,
        props.images,
        jwsven7,
        girl,   
    ]
    const viewStory = (props:any)=>{
        alert(props)
        console.log(props);
        
    }
    useEffect(() => {
      
      setName(holed.username);
    //emails=holed.email;

        
        }, [props.sends]);
    return (
        <div className="center">
            <div className="wi-100  story">
                <div className="stories">
                  <div className="stories-b">
                    <div className="story-show">

                    {stories.map((values,index)=>{
                        return (
                            <label  key={index} className="cursor storybox" onClick={viewStory}>
                            <img  src= {values}  alt= {values[index]} />
                            <div className="white f12" style={{position:"relative",
                            top:"-30px",
                            left:"20px",
                            fontWeight:"bold",
                            
                            fontFamily:"sans-serif"
                        }}>{name}</div>
                        </label>
                        )
                    })}
                            </div>
                         </div>
                    </div>
             </div>
            <div className="rotate-post">
                <div className="wi-100 display  align-items">
                    <div className="boximage" ><img  className="boximageimg"src={props.images}  alt={props.images} /></div>
                        <textarea role="1" className="seaches"  style={{fontFamily:"sans-serif"}}></textarea>
                                <FontAwesomeIcon icon={faMessage} className="f25 blue"/>

                    </div>
                <div className=" wi-100 display justify-content" style={{marginTop:"15px"}}>
                      

                                <Reaction 
                                classNames ="row-like-comment wi-80 display justify-space-between "
                                text1 ="Add Story" icon ={faAdd}
                                text2 ="Image" icon2 ={faImage}
                                text3 ="Video" icon3 ={faVideo}
                                text4 ="Upload" icon4 ={faCloudDownloadAlt} />
                        </div>

            </div>
            <div className="allPost">
                <div className="row-post">
                <div className="row">
                    <div className="wi-100 display justify-content">
                    <div className="row-first display wi-70 justify-content align-items">
                        <div className="boximage">
                         <img  className="boximageimg" src={props.images}  alt={props.images} />
                        </div>
                        <div className="wi-90  beds ">
                            <div className="wi-100  display flex-direction ">
                            <span className="f17 white">@{name}</span>
                            <span className="f15 ccc" style={{lineHeight:"1.5"}}>Hr Manager At Decagon Hr Manager At DecagonHr Manager</span>
                            </div>
                            <div className="wi-10">
                                <FontAwesomeIcon icon={faBars} className="f14 ccc" />
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="row-second wi-100 display justify-content">
                            <div className="wi-60 imageShow">
                            <img  className="boximageimg" src="https://pbs.twimg.com/media/FujdkrOXwAABR52?format=jpg&name=900x900"  alt={props.images} />
                            </div>
                        </div>
                        <div className=" wi-100 display justify-content" style={{marginTop:"15px"}}>
    
                            <Reaction 
                            classNames ="row-like-comment wi-60 display justify-space-between " 
                            text1 ="Like" icon ={faThumbsUp} 
                            text2 ="Comment" icon2 ={faMessage} 
                            text3 ="Comment" icon3 ={faShare} 
                            text4 ="Upload" icon4 ={faCloudDownloadAlt}  />
                            
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}
export default Center;