import React from "react";

function Castaway({castaway}) {
    return (
        <div className="castawayCard" key={castaway.id}>
            <h3>{castaway.name}</h3>
            <img alt={castaway.name} src={castaway.image} />
        </div>
    )
}

export default Castaway;

