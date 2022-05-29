import React from "react";

function Castaway({castaway}) {
    const imgUrl = `https://www.truedorktimes.com/survivor/cast/images/${castaway.image}.jpg`
    return (
        <div className="castawayCard" key={castaway.id}>
            <h3>{castaway.name}</h3>
            <img alt={castaway.name} src={imgUrl} />
        </div>
    )
}

export default Castaway;

