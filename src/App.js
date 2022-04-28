import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  
  const [castaways, maroooning] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/castaways")
    .then(resp => resp.json())
    .then(data => maroooning(data))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to... Survivor!
        </p>
        {castaways.map((castaway) => <div key={castaway.id}><h3>{castaway.name}</h3><img src={castaway.image} /></div>)}
      </header>
    </div>
  );
}

export default App;
