/* 
==================================================================================================================
Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)
==================================================================================================================
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
import "./assets/css/demo.css";

import Index from "./components/Index.jsx";
import Admin from "./components/Dashboards/Admin.jsx";
import Profesor from "./components/Dashboards/Profesor.jsx";
import Alumno from "./components/Dashboards/Alumno.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/inicio" render={props => <Index {...props} />} />
      <Route
        path="/profesores"
        render={props => <Profesor {...props} />}
      />
      <Route
        path="/alumnos"
        render={props => <Alumno {...props} />}
      />
      <Route
        path="/admin"
        render={props => <Admin {...props} />}
      />
      <Redirect from="/" to="/inicio" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
