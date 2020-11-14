import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import data from '../../../master/cats.json'
import './style.css';
import { HalfIcon } from "../../../components";

class SinglePet extends React.Component {
 
  
  render() {
      // map over multiple volleyballs that hold hover state
    return (
      <div className='single'>
        Name
        <FontAwesomeIcon className="hover-background" icon={faVolleyballBall} /> 
        <FontAwesomeIcon className="hover-background" icon={faVolleyballBall} /> 
        <HalfIcon iconName="faVolleyballBall"/>
      </div>
    )
  }
}

export default SinglePet;