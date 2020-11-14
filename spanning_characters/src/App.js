import React,{Component} from 'react';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'
class App extends Component{
    state={
        name:"",
        nameLength:0,
        chars:[]
    }
    nameChangeHandler=(event)=>{
        const name = event.target.value;
        const chars = event.target.value.split("");
        const nameLength = name.length;
        this.setState({
            name: name,
            nameLength: nameLength,
            chars: chars
        })
    }
    deleteButtonHandler=(charId)=>{
        const chars = this.state.chars
        const namedup = this.state.name
        const name = namedup.replace(namedup[charId],'')
        chars.splice(charId,1);
        const nameLength = name.length
        this.setState({
            name:name,
            nameLength:nameLength,
            chars:chars
        })
    }
    render(){
        let charcom = (
            <div>
                {this.state.chars.map((p,index)=>{
                    return <CharComponent 
                    key={index}
                    char={p} 
                    delete={()=>this.deleteButtonHandler(index)}/>
                })}
            </div>
        )
        return(
            <div>
                <label>Enter String <input type="text" onChange={(event)=>this.nameChangeHandler(event)} value={this.state.name}/></label><br/><br/>
                <label>Length: {this.state.nameLength}</label>
                <br/><br/>
                <ValidationComponent name={this.state.nameLength}/>
                <div>
                {charcom}
                </div>
            </div>
        )
    }
}
export default App;