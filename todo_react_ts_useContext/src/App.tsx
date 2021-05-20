import { Fragment } from 'react'
import Todos from './components/Todos'
import NewTodoForm from './components/NewTodoForm'
const App =()=>{
  return(
    <Fragment>
      <NewTodoForm/>
      <Todos/>
    </Fragment>
  )
}
export default App;