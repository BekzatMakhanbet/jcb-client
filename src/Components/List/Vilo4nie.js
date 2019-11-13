import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:9,image:"./img/9/1.jpg",name:'Electric Teletruk',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'3000 кг',second:'4000 мм',third:'18 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:9,image:"./img/9/2.jpg",name:'TLT 25',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'2500 кг',second:'4000 мм',third:'20 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:9,image:"./img/9/3.jpg",name:'TLT 30',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'3000 кг',second:'4000 мм',third:'20 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:9,image:"./img/9/4.jpg",name:'TLT 30D 4x4',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'3000 кг',second:'4000 мм',third:'20 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:9,image:"./img/9/5.jpg",name:'TLT 35',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'3500 кг',second:'4400 мм',third:'20 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:9,image:"./img/9/6.jpg",name:'TLT 35D 4x4',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Скорость машины', first:'3500 кг',second:'4350 мм',third:'20 км/ч',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},

]


export class Vilo4nie extends Component {
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
                    <div className="history-left">Промышленные вилочные погрузчики</div>
                    <div className="history-text">
                        <p>Компания JCB активно внедряет инновационные технологии в производство телескопических погрузчиков с 1977 года. Модельный ряд бренда – это воплощение высокого уровня эффективности. Машины JCB были и остаются одними из самых популярных в мире. Погрузчики характеризуются экономичной эксплуатацией, качеством сборки мирового уровня, высокой остаточной стоимостью и универсальностью.</p>
                        <p style={{textAlign:'center'}}>Достоинства телескопических погрузчиков JCB</p>
                        <p>Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.

Эффективность. В новых телескопических погрузчиках предусмотрено 3 режима рулевого управления. Для движения с высокой скоростью по ровной дороге подключают два ведущих колеса. Управление полным приводом оптимально для работы в ограниченном пространстве. Для маневрирования между зданиями и рядом с препятствиями предусмотрен крабовый ход.

Повышенная прочность. Телескопические погрузчики имеют усиленную конструкцию стрелы, защиту гидравлических шлангов. Для максимальной коррозионной стойкости кабина оператора перед покраской проходит обработку методом электрофореза, создающим дополнительный защитный слой.</p>
                        <p style={{textAlign:'center'}}>Модельный ряд телескопических погрузчиков</p>
                        <p>В линейке JCB 14 моделей с различными характеристиками. Компания выпускает компактные колесные телескопические погрузчики, предназначенные для тесных строительных площадок. Специально для сложных условий эксплуатации представлены машины с грузоподъемностью до 6 тонн и высотой подъема до 20 м. Расширить функционал каждой модели можно с помощью навесного оборудования.</p>
                        <p>По вопросам приобретения техники JCB обращайтесь к официальным дилерам компании в Вашем регионе. Развитая дилерская сеть, современные сервисные центры гарантируют качественное обслуживание, полную техническую поддержку каждому клиенту. Обращайтесь за выгодным коммерческим предложением.</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Промышленные вилочные погрузчики</div>
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

export default Vilo4nie;
