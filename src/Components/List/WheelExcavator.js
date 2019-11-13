import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:3,image:"./img/3/1.jpg",name:'Hydradig 110W',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'4410 мм',second:'11457 кг',third:'0.31 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},
    {cat:3,image:"./img/3/2.jpg",name:'JS145W',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'5600 мм',second:'14646 кг',third:'0.80м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},
    {cat:3,image:"./img/3/3.jpg",name:'JS160W',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'6400 мм',second:'17320 кг',third:'0.90 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},
    {cat:3,image:"./img/3/4.jpg",name:'JS175W',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'6400 мм',second:'17520 кг',third:'0.90 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},
    {cat:3,image:"./img/3/5.jpg",name:'JS200W',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'6400 мм',second:'22809 кг',third:'1.19 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},

]


export class WheelExcavator extends Component {
    render() {
        return (
            <div className="list-page">
                <NavbarContainer/>
                <MDBCarousel
                    activeItem={1}
                    length={1}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1 carousel"
                    style={{width:'100%'}}
                >
                    <MDBCarouselInner>
                 
                    <MDBCarouselItem itemId="1">
                        <div className="background-carousel" style={{backgroundImage: 'url('+require('../../img/3.jpg')+')'}} >
                                <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                <h2>КОЛЕСНЫЕ ЭКСКАВАТОРЫ Простое решение для тяжелых работ</h2>
                                {/* <Link className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link> */}
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
                <div onClick={this.toggle} className="ostavit-zayavku"><MDBIcon icon="pen" style={{marginRight:10,color:'#FCB026'}} />Оставить Заявку</div>
                <div className="info-section-history">
                    <div className="history-left">КОЛЕСНЫЕ ЭКСКАВАТОРЫ JCB</div>
                    <div className="history-text">
                        <p>Иногда при работе на экскаваторе требуется больше маневренности и универсальности, чем могут обеспечить гусеницы. В таких случаях вам поможет модельный ряд колесных экскаваторов JCB. Колесные экскаваторы JCB идеально подходят для выполнения любых задач: от подготовки и ремонта дорожного полотна до перегрузки материалов на сырьевых складах и тяжелых работ при сдаче машин в аренду. Экскаваторы JCB обладают высокой надежностью, производительностью, износостойкостью и, конечно, способностью самостоятельно передвигаться по дорогам.

</p>
                        <p >Машины модельного ряда колесных экскаваторов JCB способны развивать дорожную скорость до 30 км/ч и обеспечивать уровень производительности, сравнимый с некоторыми гусеничными экскаваторами, при этом меньше повреждая рабочую поверхность. Модельный ряд колесных экскаваторов JCB включает пять машин: JS145W и 160W оснащаются современными 4,4-литровыми двигателями JCB Dieselmax, а JS175W и JS200W — двигателями Isuzu. Эти двигатели известны во всем мире благодаря своей мощности, надежности, долговечности, топливной экономичности, а также низким уровням шума и выбросов.</p>
                        <p>Машины модельного ряда колесных экскаваторов JCB отличаются невероятной универсальностью. Огромное количество предлагаемых опций позволяет адаптировать эти машины для выполнения конкретных задач. Например, можно опционально установить на модель JS200W Wastemaster кабину с гидравлическим подъемом, а также выбрать из предлагаемого ассортимента стрелу для погрузки лома или другого материала.

</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Колесные экскаваторы</div>
                <div className="excavator-list">
                    {list.map((excavator,index)=>(
                        <div className="excavator animation">
                            <div className="list-image">
                                <img src={require(""+excavator.image)} alt=""/>
                            </div>
                            <div className="list-info">
                                <div className="list-white">
                                    <h2>{excavator.name}</h2>
                                    <p>{excavator.text}</p>
                                </div>
                                <div className="list-black">
                                    <div className="list-black-left">
                                        <div className="list-black-elem">
                                            <p>{excavator.f_col}</p>
                                            <h4>{excavator.first}</h4>
                                        </div>
                                        <div className="list-black-elem">
                                            <p>{excavator.s_col}</p>
                                            <h4>{excavator.second}</h4>
                                        </div>
                                        <div className="list-black-elem">
                                            <p>{excavator.t_col!=='no' ? (excavator.t_col):null}</p>
                                            <h4>{excavator.third!=='no' ? (excavator.third):null}</h4>
                                        </div>
                                    </div>
                                    <Link to={`/catalog/${excavator.cat}/${index+1}`} className="list-black-button"><div>Подробнее</div></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default WheelExcavator;
