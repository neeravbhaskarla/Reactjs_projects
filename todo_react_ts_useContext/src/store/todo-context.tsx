import React,{useState} from 'react'
import Todo from '../models/todo'

type TodoContextObj ={
        items: Todo[],
        onAdd:(text:string)=>void,
        onRemove:(id:Date)=>void
}

export const TodosContext = React.createContext<TodoContextObj>({
    items:[],
    onAdd:()=> {},
    onRemove:(id:Date)=>{}
})

export const TodoContextProvider:React.FC = (props)=>{
    const [items, setItems] = useState<Todo[]>([])

    const onAddHandler = (textValue:string)=>{
    const newTodo = new Todo(textValue)
    setItems(prevState=>(
      prevState.concat(newTodo)
    ))
    }

    const onRemoveHandler=(id: Date)=>{
        setItems(items.filter(item=>item.id!==id))
    }

    const contextValue:TodoContextObj ={
        items: items,
        onAdd: onAddHandler,
        onRemove: onRemoveHandler
    }
    return(
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}