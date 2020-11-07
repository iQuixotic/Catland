import * as React from "react";
import data from '../main/cats.json'
// import { Acct, AcctMobile, Container, Div } from "../../../components";
// import { Account, Layout, MQ } from "../../../containers";
// import { API } from "../../../utils";

import './style.css';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     allCats: [{
        _id: 'NA',
        name: 'f',
        color: '0'
      }],
    }
    this.componentWillMount = () => {
      this.getAllCats()
    }
  }

  getAllCats = () => {
    console.log('helo')
    this.setState({
        allCats: data
    })
  }



  render() {
    const map = this.state.allCats.map(el => (
        <div>
            <h1>_id: {el.id}</h1>
            <h1>_id: {el.name}</h1>
            <h1>_id: {el.color}</h1>
        </div>
      ))
    return (
        
      <div>{map}</div>
    );
  }
}

export default Cats;