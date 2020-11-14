import React from 'react';
import './CharComponent.css'
const CharComponent = (props)=>{
    return(
        <div className="char">
            <h1>{props.char}</h1>
            <button onClick={props.delete}>delete</button>
        </div>
    )
}
export default CharComponent;