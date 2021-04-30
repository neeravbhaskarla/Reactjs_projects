import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state={
    modalShow: false
  }
  modalOpen=()=>{
    this.setState({modalShow: true})
  }
  modelClose=()=>{
    this.setState({modalShow: false})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalShow} closed={this.modelClose}/>
        <Backdrop show={this.state.modalShow}/>
        <button className="Button" onClick={this.modalOpen}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
