import '../style.scss';

import React from 'react';

import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import YouTube from './youtube';
import Welcome from './welcome';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/youtube" exact>YouTube</NavLink></li>
      </ul>
    </nav>
  );
};
/*
const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
    </div>
  );
};
*/
const About = (props) => {
  return <div> All there is to know about me </div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
}; // the match prop is given to us by react router for every path

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
          <Route exact path="/youtube" component={YouTube} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
