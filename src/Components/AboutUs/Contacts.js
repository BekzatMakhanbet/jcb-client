import React, { Component } from 'react'
import NavbarContainer from '../NavbarComp/NavbarContainer';
import { MDBIcon } from 'mdbreact';
import Footer from '../Footer';
import MapContainer from '../Map';

export class Contacts extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <NavbarContainer/>
                <MapContainer/>
                <Footer/>
            </div>
        )
    }   
}

export default Contacts;
