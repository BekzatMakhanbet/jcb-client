import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import '../NavbarComp/Navbar.css';
import './index.css';
import Categories from '../Categories.js';
import Footer from '../Footer';
import MainForm from '../Form';
import Axios from 'axios';

// const url="http://localhost:5000/";
const url="http://89.219.32.105:5005/";


export class Catalog extends Component {
    state={
        fon: {id:1,filename:''}
    }
    componentDidMount(){
        Axios.get(url+"catalog_background").then(res=>{this.setState({fon:res.data.length>0 ? res.data[0]:{id:1,filename:''}}); console.log(this.state.fon);
        })
        window.scrollTo(0,0);
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
                        <div className="background-carousel" style={{backgroundImage:"url("+url+this.state.fon.filename+")"}}>
                            <MDBMask style={{width:'100%',height:'100%',position:'absolute',top:0}} overlay="black-light">
                                <MDBMask overlay="black-light" className=" flex-column text-white overlay-text">
                                <h2>Каталог товаров JCB</h2>
                                </MDBMask>
                            </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <MainForm/>
                <div className="info-section-history">
                    <div className="history-left">СТРОИТЕЛЬНАЯ ТЕХНИКА JCB</div>
                    <div className="history-text">
                        <p>В 1945 году Джозеф Сирил Бамфорд (г-н JCB) использовал свой изобретательский и конструкторский талант для создания принципиально нового строительного оборудования. С самого начала наши машины были блестящим примером инновационного мышления и такое стремление к инновациям означает, что мы всегда инвестировали в исследования и разработки, процессы производства и обслуживание клиентов.</p>
                        <p>Такой уникальный подход к конструированию техники помогает объяснить, почему мы продолжаем наращивать международный охват рынка. Хотя JCB является по-прежнему семейным бизнесом с головным офисом в графстве Стаффордшир, Великобритания, нашими машинами пользуются на всех шести континентах, а 22 завода JCB расположены в Великобритании, Бразилии, Германии, Китае, Северной Америке и Индии.</p>
                        <p>Мы постоянно модернизируем наш модельный ряд из более чем 300 моделей машин, чему служат строительство новой фабрики в Бразилии стоимостью 63 миллиона фунтов-стерлингов; инвестирование 40 миллионов фунтов-стерлингов в разработку 17 новых минипогрузчиков в США и 80 миллионов фунтов-стерлингов в двигатель Ecomax T4.</p>
                        <p>Неудивительно, что мы являемся мировым лидером в области строительного оборудования, в частности экскаваторов-погрузчиков и телескопических погрузчиков.</p>
                    </div>
                </div>
                <Categories/>
                <Footer/>
            </div>
        )
    }
}

export default Catalog;
