import "./card.scss";
import { MdOutlineDevices } from "react-icons/md";
import {GiFilmProjector} from "react-icons/gi";
export default function Quality(props) {

    let icon;

    if (props.compSciIcon) { 
        icon = <MdOutlineDevices size={100}/>;
    } else {      
        icon = <GiFilmProjector size={100}/>;    
    }

  return (
    <div className="CardContent">
      <div className="CardIcon">{icon}</div>
      <div className="title CardTitle">{props.title}</div>
      <div className="CardCol1">
        <div className="CardList">
          <div className="textBody noPad fs-logline">{props.oneOne}</div>
          <div className="textBody noPad fs-logline">{props.oneTwo}</div>
          <div className="textBody noPad fs-logline">{props.oneThree}</div>
        </div>
      </div>
      <div className="CardCol2">
        <div className="CardList">
          <div className="textBody noPad fs-logline">{props.twoOne}</div>
          <div className="textBody noPad fs-logline">{props.twoTwo}</div>
          <div className="textBody noPad fs-logline">{props.twoThree}</div>
        </div>
      </div>
    </div>
  );
}