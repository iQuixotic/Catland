import * as React from 'react';
import './main.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Cats,
  Main, 
  SinglePet,
  TestPage, 
  EditSinglePet
} from '../containers';
// import TestPage from '../containers/pgs/Test/Test';

class App extends React.Component {
 render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/cats" component={Cats} />
          <Route exact={true} path="/pet" component={SinglePet} />
          <Route exact={true} path="/test" component={TestPage} />
          <Route exact={true} path="/edit/pet" component={EditSinglePet} />
        </div>
      </Router>
    );
  }
}

export default App;
