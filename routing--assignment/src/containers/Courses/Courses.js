import React, { Component } from 'react';
import { Route } from 'react-router';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
    }
    courseClickHandler=(id,title)=>{
        this.props.history.push('/courses/course/'+id+'?title='+title)
    }
    render () {
        let courses = (this.state.courses.map( course => {
            return <article className="Course" key={course.id} onClick={()=>this.courseClickHandler(course.id,course.title)}>{course.title}</article>;
        }))
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                    <Route path={this.props.match.url + "/course/:id"} component={Course}/>
            </div>
        );
    }
}

export default Courses;