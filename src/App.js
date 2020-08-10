import _ from "lodash";
import React, { Component, createRef } from "react";
import { Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Trainings from "./components/Trainings.js";
import client from "./graphql/client";
import { ApolloProvider } from "@apollo/react-hooks";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trainings" exact component={Trainings} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;

// Name
// Duration
// Fees
// ID
// Course Designed By
