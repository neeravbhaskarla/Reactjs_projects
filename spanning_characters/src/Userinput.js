import React from 'react'
import './Userinput.css'
const Userinput = (props) =>{
        return(
        <div className="inp">
            <h2>Enter Username</h2>
            <input className="input_text" type="text" onChange={props.change} value={props.name} placeholder="Username"/>
        </div>
    );
}
export default Userinput;