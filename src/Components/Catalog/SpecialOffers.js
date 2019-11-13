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

export class Sale extends Component {
    state={
        offers:[],
        background:[]
    }

    componentDidMount(){
        window.scrollTo(0,0);
        axios.get(url+"special_offers").then(res=>{this.setState({offers:res.data})});
        axios.get(url+"news_background").then(res=>{this.setState({background:res.data})});

    }
    render() {
        const {background}=this.state;
        console.log(background);
        
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
                        <div className="background-carousel" style={{backgroundImage: 'url('+url+(background.length>0 ? background[0].filename:"")+')'}}>
                            <MDBMask style={{width:'100%',height:'100%',position:'absolute',top:0}} overlay="black-light">
                                <MDBMask overlay="black-light" className=" flex-column text-white overlay-text">
                                <h2>Акции, Новости и Специальные предложения</h2>
                                </MDBMask>
                            </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <MainForm/>
                <div className="grided_offers">
                {this.state.offers.map(offer=>{
                    return(
                                 <MDBCard  style={{ maxWidth: "22rem" }}>
                                    <MDBCardImage top src={url+offer.main_photo} overlay="white-slight"
                                        hover waves alt="MDBCard image cap" />
                                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                                        <MDBCardTitle>{offer.title.substring(0,25)}</MDBCardTitle>
                                        <hr className="hr-light" />
                                        <MDBCardText className="white-text">
                                            {offer.text.substring(0,50)}...
                                        </MDBCardText>
                                        <Link to={"/news/"+offer.id} className="black-text d-flex justify-content-end">
                                        <h5 className="white-text">
                                            Читать больше
                                            <MDBIcon icon="angle-double-right" />
                                        </h5>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                    )
                })}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Sale;
