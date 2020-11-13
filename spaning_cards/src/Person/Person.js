import React from 'react';
import './Person.css'
const Person=(props)=>{
    return(
        <div className="card">
            <img className="image" src={props.imageUrl} alt="profile"/>
            <h2>{props.name}</h2>
            <br/>
            <h4>Age: {props.age}</h4>
            <p>{props.details}</p><br/>
            <button className="deleteButton" onClick={props.delete}>delete</button>
        </div>
    )
}
export default Person