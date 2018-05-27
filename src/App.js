import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    console.log(this.state.modalIsOpen);
    if(this.state.modalIsOpen){
      this.refs.modal.style.opacity='1';
      this.refs.modal.classList.add('after');
    }else{
      this.refs.modal.classList.remove('after');
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({modalIsOpen:!this.state.modalIsOpen}, ()=>{
      this.openModal();
    });
  }

  shouldModalHide = () => {
    console.log('done', this.state.modalIsOpen)
    if(!this.state.modalIsOpen){
      this.refs.modal.style.opacity='0';
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          TOGGLE
        </button>
      <div onTransitionEnd={this.shouldModalHide} ref="modal" className="modal before">
        <div className="modal-header">ALERT!</div>
        <div className="modal-body">This... <br/><br/> is a modal...</div>
      </div>
      </div>
    );
  }
}

export default App;
