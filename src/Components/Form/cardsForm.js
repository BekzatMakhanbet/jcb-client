import React, { Component } from 'react';
import { MDBInput, MDBIcon } from 'mdbreact';
import './index.css';

export class FormCards extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        serivce:'',
        modal:false,
    }
    onSumbit=(e)=>{
        e.preventDefault();
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <>
                <button onClick={this.toggle} className="service-button">Оставить заявку</button>
               
                
            </>
        )
    }
}

export default FormCards;
