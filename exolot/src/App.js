import React, { Component } from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import Page from "react-page-loading";
import history from './utils/history';
//Package CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template SCSS & CSS Style
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";

//Component Import
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <Page loader={"bubble-spin"} color={"#71c21b"} size={9}>
            <Router history={history}>
                <Switch >
                    <Route
                       exact path="/home-one"
                        component={HomeOne}
                    />/
                    
                    <Route
                       exact path="/home-two"
                        component={HomeTwo}
                    />
                    <Route
                       exact path="/"
                        component={HomeThree}
                    />
                     <Route
                       exact path="/medical"
                        component={HomeTwo}
                    />
                    <Route
                       exact path="/ayurveda"
                        component={HomeTwo}
                    />
                    <Route
                       exact path="/pharmacy"
                        component={HomeTwo}
                    />
                    <Route
                       exact path="/physiothrapy"
                        component={HomeTwo}
                    />
                    <Route
                       exact path="/enginering"
                        component={HomeTwo}
                    />
                    </Switch>
                </Router>
                </Page>
            </div>
      </div>
    );
  }
}
export default App;
