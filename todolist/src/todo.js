import React from 'react'

const ToDo =(props)=>{
    return(
        <div>
        <label><input type="checkbox" onChange={()=>props.handlecheck(props.list.id)} checked={props.list.checked}/>{props.list.name}</label>
        </div>
    )
}
export default ToDo