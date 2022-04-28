import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import CastawayList from "./CastawayList";
import Nav from "./Nav";

function App() {
  
  const [castaways, maroooning] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/castaways")
    .then(resp => resp.json())
    .then(data => maroooning(data))
  }, [])
  
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <CastawayList path="/castaways" castaways={castaways} />
        </Route>
      </Switch>
    </>
  );
}

export default App;