import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import data from '../../main/cats.json'
import { Cat4kGlasses } from '../../img';
import './style.css';

class Main extends React.Component {
 
  
  render() {
    return (
      <div className='main'>
          <nav>
            <div className="nav-item">Cats</div>
            <div className="nav-item">Cat Stuff</div>
            <div className="nav-item">Friends</div>
          </nav>
          <img src={Cat4kGlasses}/>
      </div>
    )
  }
}

export default Main;