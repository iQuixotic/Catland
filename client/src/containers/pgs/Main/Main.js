import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import data from '../../../master/cats.json'
import { Cat4kGlasses } from '../../../img';
import './style.css';
import { Navbar } from "../../../components";

class Main extends React.Component {
 
  
  render() {
    return (
      <div className='main'>
          <Navbar/>
          <img src={Cat4kGlasses}/>
      </div>
    )
  }
}

export default Main;