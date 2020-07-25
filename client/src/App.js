import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import "./App.scss";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container px-5 py-5">
          <p className="title has-text-light is-4 mb-6 ">Launches</p>
          <Route path="/launches" component={Launches}></Route>
          <Route path="/launches/:flight_number" component={Launch}></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
