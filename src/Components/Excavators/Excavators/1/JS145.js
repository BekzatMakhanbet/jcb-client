import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../../../NavbarComp/NavbarContainer';
import Categories from '../../../Categories.js';
import Footer from '../../../Footer';
import {Animated} from "react-animated-css";
import MainForm from '../../../Form';



export class Catalog extends Component {
    state={
        isVisible:false,
        isVisible2:false
    }
    controlPopup=()=>{
        this.setState(old=>({isVisible:!old.isVisible}));
        if (this.state.isVisible===true) {
            setTimeout(()=>{this.setState(old=>({isVisible2:!old.isVisible2}))},500);
        }
        else{
            this.setState(old=>({isVisible2:!old.isVisible2}));
        }
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
                        <div className="background-carousel" style={{backgroundImage: 'url('+require('./1.jpg')+')'}}>
                                <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                <h2>ГУСЕНИЧНЫЙ <br/> ЭКСКАВАТОР JS145</h2>
                                <Link className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link>
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <MainForm/>
                <div className="info-section-history">
                    <div className="history-left">JS145</div>
                    <div className="history-text">
                        <p>Гусеничные экскаваторы JS145 отличаются высокой эффективностью. Двигатель JCB Dieselmax обеспечивает высокую мощность, топливную экономичность и крутящий момент на 17 % выше, чем у предыдущих моделей, при этом работая на низких оборотах для экономии топлива.</p>
                        <p>Огромное усилие отрыва на ковше также способствует эффективной работе полноповоротных гусеничных экскаваторов JS145 JCB. Добавьте к этому длинные сервисные интервалы и прочные компоненты гусеничных экскаваторов JCB, и вы поймете, насколько эффективны эти машины.</p>
                        <p>Гусеничные экскаваторы JCB JS145 разрабатываются с расчетом на обеспечение исключительной прочности, производительности, эффективности, комфортабельности, безопасности и удобства обслуживания.</p>
                        <p>Коробчатая конструкция поворотной платформы обеспечивает повышение прочности и снижение нагрузки, а также делает эти экскаваторы исключительно устойчивыми к ударным повреждениям. При производстве машин используются надежные компоненты, отвечающие самым высоким отраслевым стандартам.</p>
                        <Animated duration={400} animationIn="bounceInLeft" animationOut="bounceOutLeft" isVisible={this.state.isVisible}>
                           <div className="dropdown" style={this.state.isVisible2 ? {height:'unset',width:'unset'}:{height:20,width:0}}>
                               <h5>Особенности</h5>
                               <div className="popup-text">
                                   <div className="popup-text-elem">
                                    <div> Длина стрелы 3,7м</div><div>Мощность двигателя 74 кВт при 2200 об/мин</div>
                                   </div>
                                   <div className="popup-text-elem">
                                    <div> Гидравлическая система 90л</div><div>Двигатель JCB EcoMAX , соответствует стандартам EU Stage II, EPA Tier 2 </div>
                                   </div>
                               </div>
                           </div>
                        </Animated>
                        <button onClick={this.controlPopup} className="popup-control">{this.state.isVisible2 ? ("Скрыть -"):("Подробнее +")}</button>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / <Link>Гусеничные экскаваторы</Link> / JS145</div>
                <div className="info-excavator-page">
                    <h3 className="h3-title">Характеристики</h3>     
                    <div className="info-excavator-elem-cover">
                        <div className="info-excavator-elem">
                            <p>Эксплуатационная масса</p>
                            <h3>до 14 261 кг</h3>
                        </div>
                        <div className="info-excavator-elem">
                            <p>Емкость ковша</p>
                            <h3>0,80 м3</h3>
                        </div>
                        <div className="info-excavator-elem">
                            <p>Максимальная глубина копания</p>
                            <h3>6020 мм</h3>
                        </div>
                    </div>
                </div>
                <div className="all-looks-like">
                <h6>Похожие модели</h6>
                <div className="looks-like">
                    <div className="first looks-elems">
                        <div className="top">
                            <img src={require('../../../../Components/List/img/1/130.jpg')} alt=""/>
                            <div className="looks-title">
                                <h2>JS130</h2>
                                <p>Гусеничный экскаватор JCB JS130. JS130 оснащен двигателем мощностью 74 кВт.</p>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="middle-elem">
                                <p>Эксплуатационная масса</p>
                                <h4>13 661 кг</h4>
                            </div>
                            <div className="middle-elem">
                                <p>Мощность</p>
                                <h4>74 кВт</h4>
                            </div>
                        </div>
                        <div className="bottom">
                        <Link to="/catalog/1/1">
                            <div className="looks-button">
                                Подробнее
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="second looks-elems">
                        <div className="top">
                            <img src={require('../../../../Components/List/img/1/160.jpg')} alt=""/>
                            <div className="looks-title">
                                <h2>JS160</h2>
                                <p>Гусеничный экскаватор JCB JS160. JS160 оснащен шестицилиндровым двигателем Cummins мощностью 97 кВт</p>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="middle-elem">
                                <p>Эксплуатационная масса</p>
                                <h4>17537 кг</h4>
                            </div>
                            <div className="middle-elem">
                                <p>Мощность</p>
                                <h4>97кВт</h4>
                            </div>
                        </div>
                        <div className="bottom">
                            <Link to="/catalog/1/3">
                            <div className="looks-button">
                                Подробнее
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
                

                <Footer/>
            </div>
        )
    }
}

export default Catalog;
