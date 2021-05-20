import React from 'react'
import classes from './TodoItem.module.css'
const TodoItem:React.FC<{id:Date, title:string, onRemove:(id:Date)=>void}> = (props) =>{
    return(
        <li key={props.id.toISOString()} className={classes.item} onClick={()=>props.onRemove(props.id)}>{props.title}</li>
    )
}
export default TodoItem