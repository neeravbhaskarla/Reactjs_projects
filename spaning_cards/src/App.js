import React ,{Component} from 'react';
import Person from './Person/Person'
import './App.css'
class App extends Component{
    state={
        persons:[
            {id:"",name:"",age:"",details:"",imageUrl:""}
        ],
        inc:0
    }
    nameChangeHandler=(event)=>{
        const name ={id:this.state.inc,name:event.target.value,age:this.state.persons[this.state.inc].age,details:this.state.persons[this.state.inc].details,imageUrl:this.state.persons[this.state.inc].imageUrl}
        const persons = [...this.state.persons]
        persons[this.state.inc] = name;
        this.setState({persons: persons})
    }
    ageChangeHandler=(event)=>{
        const age ={id:this.state.inc,name:this.state.persons[this.state.inc].name,age:event.target.value,details:this.state.persons[this.state.inc].details,imageUrl:this.state.persons[this.state.inc].imageUrl}
        const persons = [...this.state.persons]
        persons[this.state.inc] = age;
        this.setState({persons: persons})
    }
    detailsChangeHandler=(event)=>{
        const details ={id:this.state.inc,name:this.state.persons[this.state.inc].name,age:this.state.persons[this.state.inc].age,details:event.target.value,imageUrl:this.state.persons[this.state.inc].imageUrl}
        const persons = [...this.state.persons]
        persons[this.state.inc] = details;
        this.setState({persons: persons})
    }
    urlChangeHandler=(event)=>{
        const url ={id:this.state.inc,name:this.state.persons[this.state.inc].name,age:this.state.persons[this.state.inc].age,details:this.state.persons[this.state.inc].details,imageUrl:event.target.value}
        const persons = [...this.state.persons]
        persons[this.state.inc] = url;
        this.setState({persons: persons})
    }
    addButtonHandler=()=>{
        const persons=[...this.state.persons]
        persons.push({id:"",name:"",age:"",details:"",imageUrl:""})
        const prevInc = this.state.inc
        this.setState({
            persons:persons,
            inc:prevInc+1
        })
    }
    deleteButtonHandler=(personId)=>{
        const persons = [...this.state.persons]
        persons.splice(personId,1)
        this.setState({persons:persons})
    }
    render(){
        let persons = null;
        persons = (
            <div>
                {this.state.persons.map((p,index)=>{
                    return(
                            <Person
                            name={p.name}
                            key={p.id}
                            age={p.age}
                            details={p.details}
                            imageUrl={p.imageUrl}
                            delete={()=>this.deleteButtonHandler(index)}
                            />
                    )})}
            </div>)
        return(
            <div>
                <div className="inputbox">
                    <h1>Enter Details</h1>
                    <div className="inputs">
                    <label>Name<br/><input type="text" onChange={(event)=>this.nameChangeHandler(event)}placeholder="Enter Name"/></label><br/><br/>
                    <label>Age<br/><input type="text" onChange={(event)=>this.ageChangeHandler(event)} placeholder="Enter Age"/></label><br/><br/>
                    <label>Details<br/><input type="text" onChange={(event)=>this.detailsChangeHandler(event)} placeholder="Enter Details"/></label><br/><br/>
                    <label>Image URL<br/><input type="text" onChange={(event)=>this.urlChangeHandler(event)} placeholder="Image URL"/></label><br/><br/>
                    <button className="button" onClick={this.addButtonHandler}>add</button>
                </div>
                </div>
                <div className="render">
                    {persons}
                </div>
            </div>
        )
    }
}
export default App