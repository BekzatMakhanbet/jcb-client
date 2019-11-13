import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:6,image:"./img/6/1.jpg",name:'15C-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2271 мм',second:'1664 кг',third:'11.70 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/2.jpg",name:'16C-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2421 мм',second:'1749 кг',third:'11.70 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/3.jpg",name:'18Z-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2576 мм',second:'1749 кг',third:'11.70 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/4.jpg",name:'19C-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2576 мм',second:'1910 кг',third:'11.70 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/5.jpg",name:'48Z-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3432 мм',second:'4792 кг',third:'33.10 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/6.jpg",name:'51R-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3652 мм',second:'5112 кг',third:'33.10 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/7.jpg",name:'55Z-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3843 мм',second:'5112 кг',third:'35.70 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/8.jpg",name:'57C-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'4077 мм',second:'5483 кг',third:'33.10 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/9.jpg",name:'65R-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3011 мм',second:'6601 кг',third:'33.10 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/10.jpg",name:'85Z-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3715 мм',second:'8300 кг',third:'48 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/11.jpg",name:'86C-1',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'4531 мм',second:'8600 кг',third:'48 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/12.jpg",name:'8008 CTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'1690 мм',second:'950 кг',third:'9 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/13.jpg",name:'8010 CTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'1372 мм',second:'1110 кг',third:'13.80 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/14.jpg",name:'8025 ZTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2580 мм',second:'2096 кг',third:'20 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/15.jpg",name:'8026 CTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2740 мм',second:'2867 кг',third:'16.50 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/16.jpg",name:'8030 ZTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'2794 мм',second:'3217 кг',third:'20 кВт',text:'Мини-экскаватор'},
    {cat:6,image:"./img/6/17.jpg",name:'8035 ZTS',f_col:'Глубина копания',s_col:'Масса',t_col:'Мощность двигателя', first:'3179 мм',second:'3651 кг',third:'22.70 кВт',text:'Мини-экскаватор'},

]


export class MiniExcavator extends Component {
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
                    <div className="history-left">МИНИ-ЭКСКАВАТОРЫ JCB</div>
                    <div className="history-text">
                        <p>Компания JCB разработала модельный ряд мини-экскаваторов с учетом пяти основных характеристик качественной техники: комфорта, управляемости, производительности, надежности, удобства в обслуживании. Новые машины полностью соответствуют заявленным параметрам. Каждая модель экскаватора отличается точностью управления, исключительной комфортностью рабочего места оператора и непревзойденным удобством в техническом обслуживании. Компактные габариты машин позволяют легко перевозить их между площадками и использовать в ограниченном пространстве.

</p>
                        <p style={{textAlign:'center'}}>Техника JCB в России

</p><p>В производстве техники JCB используются новейшие инженерные решения и данные многолетней эксплуатации. Мы знаем, как сделать сложные работы еще более удобными, быстрыми и безопасными. За дополнительной информацией по модельному ряду обращайтесь к нашим специалистам. Официальные дилеры в регионах ответят на все возникшие вопросы, составят выгодное коммерческое предложение с учетом Ваших пожеланий.

</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Мини-экскаваторы</div>
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

export default MiniExcavator;
