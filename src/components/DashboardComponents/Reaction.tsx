import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface AllStyle {
    classNames : string,
    text1:string,
    text2:string,
    text3:string,
    icon:string,
    icon2:string,
    icon3:string,
    icon4:string
}
export default function Reaction(Propy:any){
    return (
        <div className={Propy.classNames}>
        <div className=" ic">
              
                <FontAwesomeIcon icon={Propy.icon} className="blue f15" />
                <span className="ccc ">&nbsp;&nbsp;{Propy.text1}</span>


            </div>
            <div className="ic">
                <FontAwesomeIcon icon={Propy.icon2} className="blue f15" />
                <span className="ccc ">&nbsp;&nbsp;{Propy.text2}</span>

            </div>
            <div className="ic">
                <FontAwesomeIcon icon={Propy.icon3} className="blue f15" />
                <span className="ccc ">&nbsp;&nbsp;{Propy.text3}</span>

            </div>
            <div className="ic">
                <FontAwesomeIcon icon={Propy.icon4} className="blue f15" />
                <span className="ccc ">&nbsp;&nbsp;{Propy.text4}</span>

            </div>
            </div>
    )
}