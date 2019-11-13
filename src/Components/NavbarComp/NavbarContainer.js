import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';

// const url="http://localhost:5000/";
const url="http://89.219.32.105:5005/";


export class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false,
          modal: false,
          contacts:[]
        };
        this.onClick = this.onClick.bind(this);
      }

      componentDidMount(){
        Axios.get(url+"contacts").then(res=>{this.setState({contacts:res.data})});
      }

      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      
    
      onClick() {
        this.setState({
          collapse: !this.state.collapse
        });
      }
    
    render() {
      let tel1=this.state.contacts[0];
      let tel2=this.state.contacts[1];
      let finance=this.state.contacts[8];

        return (
                <header>
                <MDBNavbar className="nav-container" expand="md"  fixed={this.state.collapse ? "top":false}>
                  <MDBNavbarBrand href="/">
                    <img className="logo-jcb" src={require('../../img/AUTODOM MACHINERY LANDSCAPE.png')} alt=""/>
                  </MDBNavbarBrand>
                  {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} ><MDBIcon icon="bars" /></MDBNavbarToggler>}
                  <MDBCollapse className="collapsable" isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left className="nav-nav">
                      <MDBNavItem>
                        <MDBNavLink className="links" to="/catalog">Каталог</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="links" to="/parts">Запчасти и сервис</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="links" to="/finance">{finance && finance.value}</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="links" to="/news">Акции и новости</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink className="links" to="/contacts">Контакты</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                   <div className="phones"><a style={{color:'#262626'}} href="tel:87273100001">{tel1 && tel1.value}</a> <br/><a  style={{color:'#262626'}} href="tel:87003100001">{tel2 && tel2.value}</a></div>
                </MDBNavbar>
            </header>
        )
    }
}

export default NavbarContainer
