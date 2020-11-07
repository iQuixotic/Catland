import * as React from "react";
// import { Acct, AcctMobile, Container, Div } from "../../../components";
// import { Account, Layout, MQ } from "../../../containers";
// import { API } from "../../../utils";

import './style.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     allCats: [{
        _id: 'NA',
        name: 'f',
        color: '0'
      }],
      loading: false,
    }
    this.componentWillMount = () => {
      this.getAllCats()
    }
  }



  render() {
    return (
      <div>Hello from main page</div>
    );
  }
}

export default Main;