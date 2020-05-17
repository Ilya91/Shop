import React from 'react'
import { Route, Switch } from 'react-router'
import Index from '../components/Home/Index'
import NoMatch from '../components/NoMatch'
import Login from "../components/Login/Login";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
