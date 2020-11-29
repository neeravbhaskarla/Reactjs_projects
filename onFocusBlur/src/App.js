import React from 'react'
class App extends React.Component{
    constructor(){
        super();
        this.state={
            isOpen: true,
            name:"enabledButton"
        }
    }
    onfocus(){
          this.timeOut = setTimeout(()=>{
              this.setState({isOpen:false,name:"disabledButton"})
          })
    }
    onblur(){
        clearInterval(this.timeOut)
        this.setState({isOpen:true,name:"enabledButton"})
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <input onFocus={this.onfocus.bind(this)} onBlur={this.onblur.bind(this)}/>
        <button disabled={!this.state.isOpen}>{this.state.name}</button>
            </div>
        )
    }
}
export default App;