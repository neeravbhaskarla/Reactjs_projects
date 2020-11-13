import React from 'react'
import ToDo from'./todo'
import tododata from './/tododata'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            data:tododata
        }
        this.handlecheck=this.handlecheck.bind(this)
    }
    handlecheck(id){
        this.setState(prevState=>{
            const updatedlist= prevState.data.map(list=>{
                if(list.id===id){
                    return{
                        ...list,
                        checked:!list.checked
                    }
                }
                return(list)
            })
            return{
                data:updatedlist
            }
        })
    }
    render(){
        const todos=this.state.data.map(list=><ToDo key={list.id} list={list} handlecheck={this.handlecheck}/>)
        return(
            <div>
                {todos}
            </div>
        )
    }
}

export default App