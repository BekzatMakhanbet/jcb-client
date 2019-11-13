import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:12,image:"./img/12/1.jpg",name:'Ударные гайковерты',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/2.jpg",name:'Роторно-ударный бур',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/3.jpg",name:'Гидравлическая дрель',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/4.jpg",name:'Алмазный цилиндрический бур',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/5.jpg",name:'Дисковые резаки',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/6.jpg",name:'Земляные буры',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/7.jpg",name:'Погружные насосы',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/8.jpg",name:'Насосы для удаления мусора',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/9.jpg",name:'Ручные отбойные молотки',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/10.jpg",name:'Гидравлические станции',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},
    {cat:12,image:"./img/12/11.jpg",name:'Осветительная мачта LT9',f_col:' ',s_col:' ',t_col:' ', first:' ',second:' ',third:' ',text:'Ручной гидравлический инструмент'},

];


export class Hands extends Component {
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
                    <div className="history-left">Ручной гидравлический инструмент</div>
                    <div className="history-text">
                       <p>Компания JCB точно знает, как создать идеальный экскаватор-погрузчик. Именно JCB впервые разработала концепцию такой машины в 1953 году и с тех пор сохраняет лидерство в этой отрасли. Сегодня это ведущий производитель экскаваторов-погрузчиков — почти половина существующих в мире машин такого типа произведена JCB.</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Ручной гидравлический инструмент</div>
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

export default Hands;
