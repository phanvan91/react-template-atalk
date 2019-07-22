import React from 'react';

import './App.css';
import UserRoute from './Router/UserRoute'
import Home from './components/Home'
import Test from './components/users/Test'
import Template from './Template'
import {
    Switch,
    withRouter,
    Redirect
} from "react-router-dom";

import WindowWidth from "./WindowHeightWidth";



class App extends React.Component{
  render(){
      const {location} = this.props.location;
      // console.log(this.props,'dsadsa')
      return (
          <Switch>
              <UserRoute
                  location={location}
                  path="/"
                  layout={Template}
                  exact
                  component={Home}
              />
              <UserRoute
                  location={location}
                  path="/about"
                  layout={Template}
                  exact
                  component={Test}
              />
              <UserRoute
                  location={location}
                  path="/vkl"
                  layout={Template}
                  exact
                  component={Test}
              />
              <UserRoute
                  location={location}
                  path="/meomeo"
                  layout={Template}
                  exact
                  component={Test}
              />
          </Switch>
      );
  }

}

export default withRouter(App);
