import React from 'react'
import { Route, Switch } from 'react-router'
import ListArticles from '../components/ListArticles'
import NoMatch from '../components/NoMatch'

const routes = (
  <div>
    <Switch>
      <Route path="/" component={ListArticles} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
