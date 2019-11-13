import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:5,image:"./img/5/1.jpg",name:'403',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'2115 кг',second:'838 кг',third:'0.30 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/2.jpg",name:'406',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'5082 кг',second:'1650 кг',third:'0.80 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/3.jpg",name:'422',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'11900 кг',second:'3300 кг',third:'1.70 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/4.jpg",name:'426',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'14450 кг',second:'4136 кг',third:'2.10 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/5.jpg",name:'436',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'16317 кг',second:'4718 кг',third:'2.70 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/6.jpg",name:'455',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'17880 кг',second:'5550 кг',third:'3.10 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/7.jpg",name:'456',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'21179 кг',second:'6184 кг',third:'3.50 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},
    {cat:5,image:"./img/5/8.jpg",name:'467',f_col:'Масса',s_col:'Грузоподъемность',t_col:'Объём ковша', first:'23800 кг',second:'7674 кг',third:'4 м3',text:'Фронтальные погрузчики имеют множество различных применений, поэтому мы ...'},

]


export class FrontExcavator extends Component {
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
                        <div className="background-carousel" style={{backgroundImage: 'url('+require('../../img/1.jpg')+')'}} >
                                <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                <h2>ФРОНТАЛЬНЫЕ КОЛЕСНЫЕ ПОГРУЗЧИКИ JCB</h2>
                                {/* <Link className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link> */}
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
                <div onClick={this.toggle} className="ostavit-zayavku"><MDBIcon icon="pen" style={{marginRight:10,color:'#FCB026'}} />Оставить Заявку</div>
                <div className="info-section-history">
                    <div className="history-left">ФРОНТАЛЬНЫЕ КОЛЕСНЫЕ ПОГРУЗЧИКИ JCB</div>
                    <div className="history-text">
                      <p>Пожелания заказчиков учитывались на каждом этапе разработки, поэтому модельный ряд колесных погрузчиков JCB отвечает требованиям покупателей. Это безопасность, эффективность, простота эксплуатации, простота технического обслуживания, производительность, мощность, надежность и комфорт.

</p><p>В результате все фронтальные погрузчики JCB, от компактных 2-тонных моделей с гидростатическим приводом до огромных 24-тонных моделей с трансмиссией Powershift, имеют общие черты.

</p>
<p>Каждый из наших колесных погрузчиков в первую очередь рассчитан на эффективную работу с непревзойденной надежностью, низкими требованиями к техническому обслуживанию и высочайшей универсальностью.</p>
                   <p>Фронтальные погрузчики имеют множество различных применений, поэтому мы предлагаем большое количество конфигураций, позволяющих идеально приспособить машину к требованиям заказчика. Не говоря уже про огромный выбор различного опционального и навесного оборудования.

</p><p>С точки зрения производительности, колесные погрузчики JCB отличаются большой мощностью, высоким крутящим моментом, большим коэффициентом соотношения мощности к массе, мощным усилием отрыва ковша и отличной тягой. В результате они превосходно делают свою работу.</p>
                   
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Фронтальные погрузчики </div>
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

export default FrontExcavator;
