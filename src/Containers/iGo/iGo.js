import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import "./iGo.css"
import logo from "./logo.svg"
import { MainMenu } from "../MainMenu/MainMenu";
import Friends from "../Friends/Friends";
import Events from "../Events/Events";
import Notifications from "../Notifications/Notifications";

export default class iGo extends Component {
  render() {
    return(
      <Router>
        <div className={"iGo"}>
          <Switch>
            <Route exact path={"/"}>
              <Link to={"/Menu"}>
                <input
                  type={"image"}
                  alt={"logo"}
                  src={logo}
                  className={"App-logo"}
                />
                Test check mic 1 2 3 going overboard and it all stays inside this box!
              </Link>
            </Route>
            <Route path={"/igo"}>
              <h1>
                Press HOME to turn ON!
              </h1>
            </Route>
            <Route path={"/Menu"} component={MainMenu}/>
            <Route path={"/Friends"} component={Friends}/>
            <Route path={"/Events"} component={Events}/>
            <Route path={"/Notifications"} component={Notifications}/>
          </Switch>
        </div>
        <Route path={"/"} component={ButtonContainer}/>
      </Router>
    );
  }
}

export class ButtonContainer extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    if(this.props.location.pathname !== "/igo/" && this.props.location.pathname !== "/")
      this.props.history.goBack();
  }

  render() {
    console.debug("Button Container Props: ", this.props);

    return (
      <div className={"Button-container"}>
        <Link to={"/"}>
          <button>
            HOME
          </button>
        </Link>
        <button onClick={this.goBack}>
          BACK
        </button>
      </div>
    )
  }
}