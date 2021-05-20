import React, { Fragment } from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todos:React.FC<{items: Todo[],onRemove: (id:Date)=>void}>=(props)=>{
    return(
        <Fragment>
        <ul className={classes.todos}>
            {props.items.map(item=>(
                <TodoItem id={item.id} title={item.name} onRemove = {props.onRemove}/>
            ))}
        </ul>
        </Fragment>
    )
}
export default Todos