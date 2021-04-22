import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent'

const asyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state={
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                
                <button onClick={()=>this.setState({auth: !this.state.auth})}>Show NewPosts</button>
                <Switch>
                    {this.state.auth?<Route path="/new-post" component={asyncNewPost}/>:null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    <Route render={()=><h1>Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;