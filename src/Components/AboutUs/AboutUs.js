import React, { Component, Fragment } from 'react'
import NavbarContainer from '../NavbarComp/NavbarContainer';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import Footer from '../Footer';
import Axios from 'axios';


const url="http://89.219.32.105:5005/";
// const url="http://localhost:5000/";


export class AboutUs extends Component {
    state={
        background:''
    }
    componentDidMount(){
        Axios.get(url+"aboutus_background").then(res=>{this.setState({background:res.data[0].filename})});
        Axios.get(url+"aboutus_text").then(res=>{this.setState({text:res.data[0].text})});
        window.scrollTo(0,0);
    }
    render() {
        let {text}=this.state;
        return (
            <div>
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
                                <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                <h2>Компания <br/> «AUTODOM MACHINERY»</h2>
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <div className="top-about-us">
                    <div className="top-about-text">
                        <h3>О Компании</h3>
                        <p>Компания «AUTODOM MACHINERY» - входящая в ГК &quot;Orbis Kazakhstan&quot; <a href="http://orbis-kz.com/">http://orbis-kz.com/</a>
                            и подразделение &quot;Orbis Auto&quot; (крупнейший авторитейлер в РК) <a href="https://orbis-auto.kz/">https://orbis-auto.kz/</a> -
                            является эксклюзивным, официальным дилером дорожно-строительной спецтехники JCB
                            (J. C. Bamford Excavators Ltd - Великобритания) на территории Республики Казахстан, в
                            направлении construction.</p> 
                            <p >
                            {text && text.split('\n').map((item, key) => {
                                console.log(text);
                                return <Fragment>{item}<br/></Fragment>
                            })}
                            </p>
                    </div>
                    <img className="about-us-image" src={require('../../img/Общее.JPG')} alt=""/>
                </div>
                <div className="middle-text">
                        <p>
                            JCB - один из крупнейших мировых производителей строительной и
                            сельскохозяйственной техники. На сегодняшний день инженерно-техническое
                            обеспечение JCB является одним из лучших в мире, компания производит более 300
                            моделей техники и хорошо известна непревзойденным уровнем обслуживания
                            заказчиков. JCB производит технику на 22 заводах на 4 континентах: в
                            Великобритании, Бразилии, Индии, США и Китае. На протяжении всей своей 70-летней
                            истории компания вкладывает большие средства в научно-исследовательские и
                            опытно-конструкторские разработки, благодаря чему постоянно внедряет инновации
                            и применяет самые современные технологии.</p>
                </div>
                <div className="four-info">
                    <div className="row">
                    <div className="info-elem">
                        <div className="info-elem-title">Миссия</div>
                        <p className="info-elem-text">Содействие успеху и стабильному росту доходов наших заказчиков, при использовании поставляемого нашей компанией продукта за счет нашей безупречной работы, выраженной в высоких стандартах качества предоставляемых услуг. Создание возможности для людей проявить свой талант.</p>
                    </div>
            
                    <div className="info-elem">
                        <div className="info-elem-title">Видение</div>
                        <p className="info-elem-text">Сохранение лидирующих позиций в индустрии за счет обеспечения высокой потребительской ценности продукции и высокого уровня удовлетворенности заказчиков. Общие ценности и единая культура компании.</p>
                    </div>
                    </div>

                    <div className="row">
                    <div className="info-elem">
                        <div className="info-elem-title">Стратегия</div>
                        <p className="info-elem-text">Люди (развитие и привлечение лучших), эффективная структура, устойчивый рост. Накопление интеллектуального капитала.</p>
                    </div>
        
                    <div className="info-elem">
                        <div className="info-elem-title">Мы предлагаем</div>
                        <p className="info-elem-text">Мы предлагаем заказчикам комплексное решение стоящих перед ними технических задач на основе применения современной строительной техники и технологий.</p>
                    </div>
                    </div>
                </div>
                <div className="bottom-info">
                    <h6>Мы предлагаем  услуги на уровне европейских стандартов:</h6>
                    <div className="bottom-list-cont">

                    <div className="bottom-list">
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />подбор техники и оборудования в соответствии с технологическими и техническими требованиями потребителя</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />прямые поставки с заводов изготовителей</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />таможенная очистка</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />лизинг</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />trade-in [продажа новой техники с зачетом стоимости старой]</p>
                    </div>
                    <div className="bottom-list">
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />предпродажная подготовка</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />гарантийный сервис</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />послегарантийное обслуживание</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />поставка расходных материалов и запчастей</p>
                        <p><MDBIcon className="bottom-icon-list" far icon="square" />диагностика и ремонт</p>
                    </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }   
}

export default AboutUs;
