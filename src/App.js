import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home"
import CastawayList from "./CastawayList";
import Nav from "./Nav";
import AddCastaway from "./AddCastaway";

function App() {
  
  const [castaways, marooning] = useState([])

  function castawayAdder(castawayObj) {
    const newCastaways = [...castaways, castawayObj]
    marooning(newCastaways)
  }

  useEffect(()=> {
    fetch("http://localhost:3000/castaways")
    .then(resp => resp.json())
    .then(data => marooning(data))
  }, [])
  
  return (
    <>
      <div className="logo"><h1>Survivor Lister</h1></div>
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home castaways={castaways}/>
          </Route>
          <Route path="/castaways">
            <CastawayList castaways={castaways} />
          </Route>
          <Route path="/add">
            <AddCastaway castawayAdder={castawayAdder} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;