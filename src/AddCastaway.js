import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Castaway from "./Castaway";

function AddCastaway({castawayAdder}) {
    
    const [newCastObj, newCastChange] = useState({id: null, name: "First Last", image: "https://www.truedorktimes.com/survivor/cast/images/parvati-shallow.jpg"})
    
    function nameHandler(e) {
        const newObj = {...newCastObj, name: e.target.value}
        newCastChange(newObj)
    }

    function imageHandler (e) {
        const newObj = {...newCastObj, image: e.target.value}
        newCastChange(newObj)
    }

    function submitHandler (e) {
        e.preventDefault()

        const newObj = {...newCastObj, id: uuid()}
        fetch("http://localhost:3000/castaways", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
            })
            .then(resp => resp.json())
            .then(data => {
                castawayAdder(data)
                newCastChange({id: null, name: "First Last", image: "https://www.truedorktimes.com/survivor/cast/images/parvati-shallow.jpg"})
            })

    }

    function tryDefault() {
        // manipulate string to have dashes instead of spaces
        // append to https://www.truedorktimes.com/survivor/cast/images/
        // add .jpg
        // change URL in obj
    }

    return (
        <>
            <div className="newCastawayForm">
            <h2>Add Castaway to Database</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Jeff Probst" value={newCastObj.name} onChange={nameHandler}/>
                <input type="text" name="image" placeholder="https://www.truedorktimes.com/survivor/cast/images/parvati-shallow.jpg" value={newCastObj.image} onChange={imageHandler}/>
                <button type="submit">Add Castaway</button>
            </form>

            <button onClick={tryDefault}>Try Default Image URL</button>
            
            </div>

        
            <div className="preview">
                <h2>Preview New Castaway</h2>
                {<Castaway castaway={newCastObj} />}                
            </div>
        </>
    )
}

export default AddCastaway;