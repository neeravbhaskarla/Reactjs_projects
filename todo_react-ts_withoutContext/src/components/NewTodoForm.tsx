import React,{useRef} from 'react'
import classes from './NewTodoForm.module.css'

const NewTodoForm:React.FC<{addTodo: (text: string)=> void}> = (props) =>{
    const todoTextRef = useRef<HTMLInputElement>(null);
    const formSubmissionHandler=(event:React.FormEvent)=>{
        event.preventDefault()
        const inputValue = todoTextRef.current!.value
        if(inputValue.trim().length ===0){
            return
        }
        else{
            props.addTodo(inputValue)
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