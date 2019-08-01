import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router> 
      <div>
        <Nav />
        <switch>   
        
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route  component={NoMatch} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
