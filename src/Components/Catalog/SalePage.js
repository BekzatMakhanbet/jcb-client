import React, { Component } from 'react';
import axios from 'axios';
import {Fragment} from 'react';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import Footer from '../Footer';



const url="http://89.219.32.105:5005/";
// const url="http://localhost:5000/";


export class SalePage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    state={
        info:''
    }
    refresh(){
        axios.get(url+'special_offers/'+this.props.match.params.id)
        .then(res=>{
            this.setState({info:res.data[0]});
        })
        .catch(err=>{})
    }
    componentDidUpdate(){
        this.refresh();
    }
    componentWillMount(){
        this.refresh();
        window.scrollTo(0,0);
    }

    render() {
      
        return (
            <>
            <NavbarContainer/>
            <div className="sale-body">
            <div className="sale-left">
                <h1 className="title_offer">{this.state.info.title} </h1>
                <p className="text_offer">{this.state.info.text && this.state.info.text.split('\n').map((item, key) => {
                return <Fragment key={key}>{item}<br/></Fragment>
                })}</p>
                <h6 className="date">{this.state.info.date}</h6>
            </div>
            <div className="card_offer">
                <img src={url+this.state.info.main_photo} alt=""/>
            </div>
            </div>
           
            <Footer/>
            </>
        )
    }
}

export default SalePage;
