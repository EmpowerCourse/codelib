import logo from './assets/images/logo.svg';
import './assets/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { Container, Card, CardBody, Alert } from 'reactstrap';
import { AdLib, Admin, Home } from './pages';
import {api, helpers} from './utils';
import * as COMMON from './utils/constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 

  componentDidMount() {
    console.log('Appjs just loaded!');
   // setInterval(function() {alert("HAHAAHA, you've been stung by B33!!!!");}, 30000)
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Switch>
            <Route path="/adLib/:gameType?" component={AdLib} />
            <Route path="/adLib" component={AdLib} />
            <Route path="/admin/:tabName?" component={Admin} />
            <Route path="/admin" component={Admin} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    );
  }
}
