import React from 'react'

import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import CreateImagePage from '../pages/CreateImagePage/CreateImagePage'
import DetailImagePage from '../pages/DataiIImagePage/DetailImagePage'
import ErrorPage from '../pages/ErrorPage'
import {Route, Switch } from "react-router-dom"

function Router() {
  return (
    // <BrowserRouter>
    <Switch>
      
      <Route exact path="/">
        <FeedPage/>
      </Route>

      <Route exact path="/login">
        <LoginPage/>
      </Route>

      <Route exact path="/signup">
        <SignupPage/>
      </Route>

      <Route exact path="/create">
        <CreateImagePage/>
      </Route>

      <Route exact path="/detail/:id">
        <DetailImagePage/>
      </Route>

      <Route path="/error">
        <ErrorPage/>
      </Route>

    </Switch >
  // </BrowserRouter>
  

  );
}

export default Router;
