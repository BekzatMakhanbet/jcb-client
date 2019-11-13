import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import '../NavbarComp/Navbar.css';
import './index.css';
import Categories from '../Categories.js';
import Footer from '../Footer';
import MainForm from '../Form';
import axios from 'axios';


const url="http://89.219.32.105:5005/";
// const url="http://localhost:5000/";


export class Finance extends Component {
    state={
        file:[],
        text:'',
        background:'',
        title_page:'',
        title_banner:'',
    }
    componentDidMount(){
        window.scrollTo(0,0);
        axios.get(url+"files_finance").then(res=>{
            this.setState({file:res.data});
        });
        axios.get(url+"finance_text").then(res=>{
            this.setState({text:res.data[0].text});
        });
        axios.get(url+"finance_properties").then(res=>{
            this.setState({background:res.data[0].value,title_page:res.data[1].value,title_banner:res.data[2].value});
        });
    }
    render() {
        return (
            <div className="list-page">
                <NavbarContainer/>
                <MDBCarousel
                    activeItem={1}
                    length={1}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1 carousel"
                    style={{width:'100%'}}
                >
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <div className="background-carousel" style={{backgroundImage: 'url('+url+this.state.background+')'}}>
                            <MDBMask style={{width:'100%',height:'100%',position:'absolute',top:0}} overlay="black-light">
                                <MDBMask overlay="black-light" className=" flex-column text-white overlay-text">
                                <h2>{this.state.title_banner}</h2>
                                </MDBMask>
                            </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <MainForm/>
                <div style={{marginBottom:'-7vh'}} className="info-section-history">
                    <div className="history-left">{this.state.title_page}</div>
                    <div className="history-text">
                        {this.state.text.split('\n').map((item, key) => {
                        return <p>{item}</p>
                        })}
                    </div>
                </div>
                <div style={{marginBottom:'-7vh'}} className="info-section-history">
                    <div className="history-left">Документы</div>
                    <div className="history-text">
                        {
                            this.state.file.map(elem=>(
                                <div className="file_link" onClick={()=>{window.open(url+elem.filename)}}><MDBIcon className="file_icon" icon="book" />{elem.title_of_file}</div>
                            ))
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Finance;
