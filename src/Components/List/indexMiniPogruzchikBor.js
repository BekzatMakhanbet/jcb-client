import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:7,image:"./img/7/1.jpg",name:'Teleskid 3TS-8T',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'5722 кг',second:'3.80 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/2.jpg",name:'Teleskid 3TS-8TW',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'4472 кг',second:'3.70 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/3.jpg",name:'135',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'2791 кг',second:'2.26 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/4.jpg",name:'155',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'2955 кг',second:'2.26 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/5.jpg",name:'175',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'3093 кг',second:'2.26 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/6.jpg",name:'190',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'3104 кг',second:'2.26 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/7.jpg",name:'205',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'3165 кг',second:'2.26 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/8.jpg",name:'250',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'3692 кг',second:'2.30 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/9.jpg",name:'250T',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'4746 кг',second:'2.28 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/10.jpg",name:'270',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'3903 кг',second:'2.30 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/11.jpg",name:'270T',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'4959 кг',second:'2.28 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/12.jpg",name:'300',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'4044 кг',second:'2.30 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/13.jpg",name:'300T',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'5038 кг',second:'2.28 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},
    {cat:7,image:"./img/7/14.jpg",name:'330',f_col:'Масса',s_col:'Высота разгрузки',t_col:'no', first:'4203 кг',second:'2.46 м',third:'no',text:'Мини-погрузчик с бортовым поворотом'},

]


export class MiniPogruzchikBortovoi extends Component {
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
                    <div className="history-left">МИНИ-ПОГРУЗЧИКИ JCB</div>
                    <div className="history-text">
                      <p>В компании JCB использовали уникальный подход к конструированию мини-погрузчиков с бортовым поворотом. Вдохновившись модельным рядом своих телескопических погрузчиков LOADALL, которые являются лучшими в классе, инженеры компании разработали для мини-погрузчиков с бортовым поворотом совершенно новую конструкцию — с однобалочной стрелой и боковым входом в кабину. </p>
                      <p>Такой инновационный подход гарантирует, что мини-погрузчик с бортовым поворотом JCB:</p>
                      <p>является самым безопасным мини-погрузчиком с бортовым поворотом в мире;<br/>
обеспечивает обзорность 270o , что на 60% лучше, чем на машинах конкурентов;<br/>
обладает кабиной, в среднем на 46% более просторной, чем на машинах малой платформы, производимых конкурентами;<br/>
имеет рейтинг обслуживания по стандарту SAE для моделей крупной платформы выше в среднем на 24%, а малой платформы — на 21%, чем у машин других производителей;<br/>
является самым экономичным мини-погрузчиком с бортовым поворотом из представленных на рынке, расходуя до 16% меньше топлива, чем машины конкурентов. <br/>
Для получения дополнительных сведений о самом безопасном мини-погрузчике с бортовым поворотом в мире выберите нужную модель ниже.</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Мини-погрузчики с бортовым поворотом</div>
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

export default MiniPogruzchikBortovoi;
