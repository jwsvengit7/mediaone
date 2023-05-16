import { useEffect,useState } from "react";
import './css/style.css';
import './css/jwsvenStyle.css';
import Center from './DashboardComponents/Center';
import Left from './DashboardComponents/Left';
import Right from './DashboardComponents/Right';
import axios from "axios";
import image from '../image/jwsven.jpeg';

const Dashboard: React.FC = (): JSX.Element  => {
    const [data, setData] = useState([]);
  
  useEffect(() => {
   // const token = localStorage.getItem("token");
    // if (!token) {
    //     window.location.replace("/login")
    // }
  }, []);
  const id: string | null = localStorage.getItem("token");
  const url:string = "http://localhost:8080/mediaone/get/";
    axios.get(url+id)
    .then(response => {
        setData(response.data.data);
      })
  return (
    <div className="app-dashboard wi-100">
    <div className="wi-100 display">
       <Left sends = {data} images={image}/>
       <Center sends = {data} images={image} />
       <Right />
    </div>
    </div>
  )
};

export default Dashboard;
