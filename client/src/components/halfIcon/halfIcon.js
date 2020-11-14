import * as React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'

const HalfIcon = (props) => {
    return (
        <div className="half-icon">
            <FontAwesomeIcon className="blue" icon={faVolleyballBall} /> 
            <span className='color-block'></span>
        </div>
    );
}

export default HalfIcon;