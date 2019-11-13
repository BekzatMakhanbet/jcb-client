import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:4,image:"./img/4/1.jpg",name:'516-40',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'1600 кг',second:'4065 мм',third:'3421 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/2.jpg",name:'520-40',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'2000 кг',second:'4035 мм',third:'4400 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/3.jpg",name:'527-58',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'2700 кг',second:'5800 мм',third:'5900 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/4.jpg",name:'531-70',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'3170 кг',second:'7000 мм',third:'7060 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/5.jpg",name:'533-105',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'3300 кг',second:'10220 мм',third:'8850 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/6.jpg",name:'535-95',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'3500 кг',second:'9500 мм',third:'8215 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/7.jpg",name:'540-140',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4000 кг',second:'13800 мм',third:'11090 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/8.jpg",name:'540-170',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4000 кг',second:'16700 мм',third:'12060 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/9.jpg",name:'540-200',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4000 кг',second:'20000 мм',third:'12985 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/10.jpg",name:'541-70',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4100 кг',second:'7000 мм',third:'7850 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/11.jpg",name:'550-140',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4535 кг',second:'13500 мм',third:'1190 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/12.jpg",name:'550-170',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'4535 кг',second:'16700 мм',third:'12470 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
    {cat:4,image:"./img/4/13.jpg",name:'560-80',f_col:'Грузоподъемность',s_col:'Высота подъема',t_col:'Вес(без вил)', first:'6000 кг',second:'7900 мм',third:'10750 кг',text:'Высокая производительность. Компактная колесная база, большие углы ограничения поворота позволяют экономить время на передвижении погрузчика по объекту.'},
]


export class TeleskopExcavator extends Component {
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
                    <div className="history-left">ТЕЛЕСКОПИЧЕСКИЕ ПОГРУЗЧИКИ JCB</div>
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
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Телескопические погрузчики</div>
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

export default TeleskopExcavator;
