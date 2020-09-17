import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '../components/NoMatch'
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Admin from "../components/Admin";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
