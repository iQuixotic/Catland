import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Cats,
  Main, 
  SinglePet
} from '../containers';

class App extends React.Component {
 render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/cats" component={Cats} />
          <Route exact={true} path="/pet" component={SinglePet} />
        </div>
      </Router>
    );
  }
}

export default App;
