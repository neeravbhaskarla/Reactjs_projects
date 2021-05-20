import { Fragment, useState } from 'react'
import Todos from './components/Todos'
import NewTodoForm from './components/NewTodoForm'
import Todo from './models/todo'
const App =()=>{
  const [items, setItems] = useState<Todo[]>([new Todo('name'), new Todo('person'), new Todo('camera'), new Todo('TV')])
  const addTodoHandler = (textValue:string)=>{
    const newTodo = new Todo(textValue)
    setItems(prevState=>(
      prevState.concat(newTodo)
    ))
  }
  const onRemoveHandler=(id: Date)=>{
    setItems(items.filter(item=>item.id!==id))
    
  }
  return(
    <Fragment>
      <NewTodoForm addTodo={addTodoHandler}/>
      <Todos items={items} onRemove={onRemoveHandler}/>
    </Fragment>
  )
}
export default App;