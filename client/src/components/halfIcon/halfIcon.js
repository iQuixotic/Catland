import * as React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall, faPaw } from '@fortawesome/free-solid-svg-icons'

const HalfIcon = (props) => {
    return (
        <span className="half-icon">
            <FontAwesomeIcon className="blue" icon={faPaw} /> 
            <span className='color-block'></span>
        </span>
    );
}

export default HalfIcon;