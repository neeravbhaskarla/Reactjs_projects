import React, { Component } from 'react';

class Course extends Component {
    state={
        courseTitle:''
    }
    componentDidMount=()=>{
        this.fetchQueryParams()
    }
    componentDidUpdate=()=>{
        this.fetchQueryParams()
    }
    fetchQueryParams=()=>{
        const query = new URLSearchParams(this.props.location.search)
        for(let param of query.entries()){
            if(this.state.courseTitle!==param[1])
            {
                this.setState({courseTitle: param[1]})
            }
        }
    }
    render () {
        // console.log(this.props.match.params)
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }   
}

export default Course;