import React from "react";
import Castaway from "./Castaway";

function CastawayList({castaways}) {
    return (
        <div>
            {castaways.map((castaway) => <Castaway key={castaway.id} castaway={castaway} />)}
        </div>
    )
}

export default CastawayList;