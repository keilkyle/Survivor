import React from "react";

function CastawayList({castaways}) {
    return (
        <div>
            {castaways.map((castaway) => <div key={castaway.id}><h3>{castaway.name}</h3><img src={castaway.image} /></div>)}
        </div>
    )
}

export default CastawayList;