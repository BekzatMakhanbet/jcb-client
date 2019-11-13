import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:2,image:"./img/2/1.jpg",name:'1CXT',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'3080 мм',second:'4342 кг',third:'0.36 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов.'},
    {cat:2,image:"./img/2/2.jpg",name:'1CХ',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'3080 мм',second:'3228 кг',third:'0.31 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},
    {cat:2,image:"./img/2/3.jpg",name:'3CX',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'5460 мм',second:'8485 кг',third:'1 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},
    {cat:2,image:"./img/2/4.jpg",name:'3CX ECO',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'5460 мм',second:'8136 кг',third:'1 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},
    {cat:2,image:"./img/2/5.jpg",name:'3CX ECO Super',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'5580 мм',second:'8399 кг',third:'1.10 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},
    {cat:2,image:"./img/2/6.jpg",name:'4CX ECO',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'5530 мм',second:'8578 кг',third:'1.30 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},
    {cat:2,image:"./img/2/7.jpg",name:'5CX ECO',f_col:'Глубина копания',s_col:'Масса',t_col:'Объём ковша', first:'6510 мм',second:'9810 кг',third:'1.30 м3',text:'Модель JCB JS 130 - это 13-тонный гусеничный экскаватор, который был разработан, испытан и изготовлен без компромиссов. '},

]


export class ExcavatorPogruzchik extends Component {
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
                    <div className="history-left">ЭКСКАВАТОРЫ-ПОГРУЗЧИКИ JCB</div>
                    <div className="history-text">
                        <p>Компания JCB стала первым в мире разработчиком и производителем экскаваторов-погрузчиков. Концепция многофункциональной машины была создана еще в 1953 году. Сегодня экскаваторы-погрузчики JCB занимают более половины мирового рынка в своем сегменте и пользуются заслуженным доверием потребителей. Производитель представляет надежную строительную технику, соответствующую высоким стандартам качества, безопасности и эргономичности.

</p>
                        <p style={{textAlign:'center'}}>Техника JCB в России

</p>
                        <p>Чтобы узнать больше о новых экскаваторах-погрузчиках, обратитесь к официальному дилеру JCB в Вашем регионе. Вам предоставят полную информацию по каждой модели, помогут выбрать машины для решения конкретных задач. Сотрудничество с JCB – это выбор в пользу надежного производителя спецтехники непревзойденного качества и функциональности.

</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Экскаваторы-погрузчики</div>
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

export default ExcavatorPogruzchik;
