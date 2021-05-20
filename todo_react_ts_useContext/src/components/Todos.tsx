import React, { Fragment, useContext } from 'react'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import {TodosContext} from '../store/todo-context'
const Todos=()=>{
    const todoCtx = useContext(TodosContext)
    return(
        <Fragment>
        <ul className={classes.todos}>
            {todoCtx.items.map(item=>(
                <TodoItem id={item.id} title={item.name} onRemove = {todoCtx.onRemove}/>
            ))}
        </ul>
        </Fragment>
    )
}
export default Todos