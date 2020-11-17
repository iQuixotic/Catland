import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const NavBar = () => {
    return (
          <nav>
            <a className="nav-item" href="/">Cats</a>
            <a className="nav-item" href="/pet">Cat Stuff</a>
            <a className="nav-item" href="/edit/pet">Friends</a>
          </nav>
    )
}

export default NavBar;