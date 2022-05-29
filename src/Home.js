import React from "react";

function Home({castaways}) { 
    
  const numberCastaways = castaways.length
  
  return (
      <>
        <h1>Welcome to... Survivor!</h1>  
        <p>There are currently {numberCastaways} castaways in the database.</p>
      </>
    )
}

export default Home;