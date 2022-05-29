import React from "react";

function Castaway({castaway}) {
    return (
        <div key={castaway.id}>
            <h3>{castaway.name}</h3>
            <img alt={castaway.name} src={castaway.image} />
        </div>
    )
}

export default Castaway;

