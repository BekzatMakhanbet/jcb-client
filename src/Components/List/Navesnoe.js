import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:11,image:"./img/11/1.jpg",name:'Щетка бункерная',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/2.jpg",name:'Щетка открытая',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/3.jpg",name:'Буровое оборудование',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/4.jpg",name:'Уплотнительное оборудование',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/5.jpg",name:'Вибропогружатели',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/6.jpg",name:'Фронтальные ковши с захватом',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/7.jpg",name:'Измельчитель пней',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/8.jpg",name:'Дорожная фреза',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/9.jpg",name:'Гидромолоты',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/10.jpg",name:'Гидравлические ножницы',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/11.jpg",name:'Бордюроукладчик',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/12.jpg",name:'Автосцепка',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/13.jpg",name:'Универсальная роторная головка',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/14.jpg",name:'Кусторез',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/15.jpg",name:'Экскаваторные ковши: усиленные-скальные',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/16.jpg",name:'Ковш 6 в 1',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/17.jpeg",name:'Экскаваторные ковши: общего назначения',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/18.jpg",name:'Снегоуборочный отвал',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/19.jpg",name:'Бульдозерный отвал',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/20.jpg",name:'Планировочные ковши',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/21.jpg",name:'Грабли',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/22.jpg",name:'Пересадчик деревьев',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/23.jpg",name:'Траншеекопатель',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/24.jpg",name:'Грейферный ковш',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/25.jpg",name:'Газонокосилка',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/26.jpg",name:'Снегороторы',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/27.jpg",name:'Захваты для брёвен',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/28.jpg",name:'Вилы для погрузки поддонов',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/29.jpg",name:'Вилы индустриальные',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/30.jpg",name:'Устройство для срезки свай',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/31.jpg",name:'Харвестерное оборудование',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/32.jpg",name:'Лепестковый захват',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/33.jpg",name:'Ковш для приготовления бетона',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/34.jpg",name:'Грейферный захват',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/35.jpg",name:'Измельчитель деревьев (мульчер)',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/36.jpg",name:'Тилтротаторы (рототилт)',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/37.jpg",name:'Захват',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/38.jpg",name:'Ковш для биг-бэгов',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/39.jpg",name:'Кантователь',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},
    {cat:11,image:"./img/11/40.jpg",name:'Бандаж кулачковый',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Навесное оборудование'},

];


export class Navesnoe extends Component {
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
                                <h2>Экскаватор Погрузчик Простое решение для тяжелых работ</h2>
                                {/* <Link className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link> */}
                                </MDBMask>
                        </div>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
                <div onClick={this.toggle} className="ostavit-zayavku"><MDBIcon icon="pen" style={{marginRight:10,color:'#FCB026'}} />Оставить Заявку</div>
                <div className="info-section-history">
                    <div className="history-left">Навесное оборудование</div>
                    <div className="history-text">
                       <p>Компания JCB точно знает, как создать идеальный экскаватор-погрузчик. Именно JCB впервые разработала концепцию такой машины в 1953 году и с тех пор сохраняет лидерство в этой отрасли. Сегодня это ведущий производитель экскаваторов-погрузчиков — почти половина существующих в мире машин такого типа произведена JCB.</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Навесное оборудование</div>
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

export default Navesnoe;
