import React from 'react';
import './ValidationComponent.css'
const ValidationComponent = (props) =>{
    if(props.name<=5)
        return <h2 className="condition">Text is too short</h2>
    else
        return <h2 className="condition">Text is long enough</h2>
}
export default ValidationComponent