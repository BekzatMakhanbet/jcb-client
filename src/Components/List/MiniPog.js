import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:8,image:'./img/8/1.jpg',name:'300T',f_col:'Грузоподъемность',s_col:'Масса',t_col:'Мощность двигателя', first:'1361 кг',second:'4836 кг',third:'68.6 кВт',text:'Мини погрузчик'},
]

export class MiniPog extends Component {
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
                        <div className="background-carousel" style={{backgroundImage: 'url('+require('../../img/2.jpg')+')'}} >
                                <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                <h2>Гусеничный экскаватор Простое решение для тяжелых работ</h2>
                                <Link className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link>
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
                <div onClick={this.toggle} className="ostavit-zayavku"><MDBIcon icon="pen" style={{marginRight:10,color:'#FCB026'}} />Оставить Заявку</div>
                <div className="info-section-history">
                    <div className="history-left">ГУСЕНИЧНЫЙ МИНИ-ПОГРУЗЧИК JCB 300T</div>
                    <div className="history-text">
                       <p>Модель большой платформы JCB 300T с номинальной рабочей грузоподъемностью 1361 кг и вертикальным подъемом отличается уникальным боковой входом в кабину и однобалочной стрелой. Для достижения комфорта, безопасности, продуктивности и прочности JCB 300T была разработана и произведена в США, на родине мини-погрузчиков JCB. Устанавливаемый на модели JCB 300T двигатель JCB EcoMAX мощностью 55 кВт (74 л. с.) успешно справился со всеми испытаниями и зарекомендовал себя как надежный и эффективный двигатель.</p>
                        <p>Обзорность в кабинах машин модели 300Т в среднем на 60 % шире, а сами кабины — на 33 % просторнее, чем у конкурирующих производителей компактных мини-погрузчиков с бортовым поворотом. Кроме того, эти машины обладают целым рядом других преимуществ, например, эргономичными рычагами управления, необычайно прочной и мощной стрелой и низкой стоимостью владения.</p>
                        <p>Благодаря всему вышеперечисленному, наши компактные мини-погрузчики большой платформы на 21 % продуктивнее, чем машины конкурентов (доступ в кабину и запуск машины осуществляются быстрее).</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Мини погрузчик</div>
                <div className="excavator-list">
                    {list.map((excavator,index)=>(
                        <div className="excavator">
                            <div className="list-image">
                                <img src={require('../../img/42804.jpg')} alt=""/>
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

export default MiniPog
