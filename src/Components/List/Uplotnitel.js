import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import './List.css';
import Footer from '../Footer';


var list=[
    {cat:10,image:"./img/10/1.jpg",name:'VM 75 D/PD',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'60 кВт',second:'7320/7660 кг',third:'1750 мм',text:'Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях.'},
    {cat:10,image:"./img/10/2.jpg",name:'116D',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'85 кВт',second:'11350 кг',third:'2100 мм',text:'Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях.'},
    {cat:10,image:"./img/10/3.jpg",name:'VM 132 D/PD',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'108 кВт',second:'11850/12710 кг',third:'2100 мм',text:'Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях.'},
    {cat:10,image:"./img/10/4.jpg",name:'VM 166 D/PD',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'129 кВт',second:'15530/16060 кг',third:'2100 мм',text:'Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях.'},
    {cat:10,image:"./img/10/5.jpg",name:'VM 200 D/PD',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'129 кВт',second:'18370/18530 кг',third:'2100 мм',text:'Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях.'},
    {cat:10,image:"./img/10/6.jpg",name:'VMT 160-80',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'14 кВт',second:'1840 кг',third:'800 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/7.jpg",name:'VMT 160-80 TSC',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'14 кВт',second:'1920 кг',third:'800 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/8.jpg",name:'VMT 160-90',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'14 кВт',second:'1900 кг',third:'900 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/9.jpg",name:'VMT 160-90 TSC',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'14 кВт',second:'1980 кг',third:'900 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/10.jpg",name:'VMT 160-100',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'14 кВт',second:'1970 кг',third:'1000 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/11.jpg",name:'VMT 260-100',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'23.5 кВт',second:'2670 кг',third:'1000 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/12.jpg",name:'VMT 260-120',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'23.5 кВт',second:'2940 кг',third:'1200 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/13.jpg",name:'VMT 380-430',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'33.6 кВт',second:'3750-4300 кг',third:'1300-1400 мм',text:'Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения...'},
    {cat:10,image:"./img/10/14.jpg",name:'VM 1500F',f_col:'Мощность двигателя',s_col:'Масса',t_col:'Ширина вальца', first:'16.80 кВт',second:'1500-1590 кг',third:'630-850 мм',text:'Траншейные. Компактные, проходимые, производительные машины с защитой от опрокидывания справятся ...'},
    
];


export class Uplotnitel extends Component {
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
                    <div className="history-left">Уплотнительная техника</div>
                    <div className="history-text">
                        <p>Вибрационная уплотнительная техника от компании JCB – это надежные и производительные машины для любых областей применения. Модельный ряд включает траншейные, грунтовые, одно- и двухвальцовые катки с широким диапазоном технических характеристик. Дорожные машины JCB произведены в соответствии с требованиями международных стандартов.

</p><p>Двухвальцовые вибрационные. Идеальная техника для дорожных работ в тесных условиях. Модели имеют эргономичную рукоять управления с виброизолирующей накладкой и устройством регулировки угла наклона. На новых дорожных катках установлен аварийный выключатель. Уровень шума и вибраций снижен для комфортной работы. Двухвальцовые вибрационные модели:</p>
<p>VMD70,<br/>
VMD100.
</p>
<p>Траншейные. Компактные, проходимые, производительные машины с защитой от опрокидывания справятся с работой там, куда закрыт доступ тяжелой технике, а работа ручными виброплитами неэффективна. Дорожные катки VM1500F/M оснащены гидростатическим приводом на все 4 сегмента вальца. Обеспечена оптимальная тяга и поворачивание на тесных площадках, а также во время строительных работ на сложной почве. На катке установлен тихий двигатель, двойные скребки на каждом вальце, подогреватель мотора, электрический стартер.</p>
<p>Вибрационные тандемные. Компактная конструкция и превосходная маневренность – идеальное сочетание для уплотнения различных площадок, от дворовых территорий до аэропортов. На тандемных дорожных катках установлен усиленный центральный шарнир. Он повышает надежность строительной машины и не нуждается в обслуживании. В базовой комплектации модели оснащены системой фильтрации воды под давлением, автоматическим управлением вибрацией с возможностью ручной блокировки, увеличенными топливными баками. Модельный ряд:</p>
<p>VMT 160-80/90/100,<br/>
VMT 260-100/120,<br/>
VMT 380-130/140,<br/> 
VMT 430-130/140.</p>
                    </div>
                </div>
                <div className="path"><Link>JCB</Link> / <Link>Каталог</Link> / Уплотнительная техника</div>
                <div className="excavator-list">
                    {list.map((excavator, index)=>(
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

export default Uplotnitel;
