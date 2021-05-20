import React,{useContext, useRef} from 'react'
import {TodosContext} from '../store/todo-context'
import classes from './NewTodoForm.module.css'

const NewTodoForm = () =>{
    const todoCtx = useContext(TodosContext)
    const todoTextRef = useRef<HTMLInputElement>(null);
    const formSubmissionHandler=(event:React.FormEvent)=>{
        event.preventDefault()
        const inputValue = todoTextRef.current!.value
        if(inputValue.trim().length ===0){
            return
        }
        else{
            todoCtx.onAdd(inputValue)
        }
    }
    return(
        <form onSubmit={formSubmissionHandler} className={classes.form}>
            <h1>Enter a new Todo Item</h1>
            <label htmlFor='text'>Todo</label>
            <input type='text' id='text' ref={todoTextRef}/>
            <button>ADD</button>
        </form>
    )
}
export default NewTodoForm