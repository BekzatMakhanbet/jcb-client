import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom';
import NavbarContainer from '../NavbarComp/NavbarContainer';
import '../NavbarComp/Navbar.css';
import './index.css';
import Categories from '../Categories.js';
import Footer from '../Footer';
import MainForm from '../Form';


export class Parts extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div className="list-page">
                <NavbarContainer/>
                <MDBCarousel
                    activeItem={1}
                    length={1}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1 carousel"
                    style={{width:'100%'}}
                >
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <div className="background-carousel" style={{backgroundImage: 'url('+require('../../img/parts.jpg')+')'}}>
                            <MDBMask style={{width:'100%',height:'100%',position:'absolute',top:0}} overlay="black-light">
                                <MDBMask overlay="black-light" className=" flex-column text-white overlay-text">
                                <h2>Запасные части JCB и Сервис</h2>
                                </MDBMask>
                            </MDBMask>
                        </div>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <MainForm/>
                <div style={{marginBottom:'-7vh'}} className="info-section-history">
                    <div className="history-left">Запасные части</div>
                    <div className="history-text">
                        <p>Использование оригинальных запасных частей является важным фактором для продления срока службы техники. Своевременное обеспечение всеми необходимыми оригинальными запасными частями значительно сокращает время восстановления работоспособности оборудования. </p>
                        <p>Наша компания заботится о своих клиентах и заинтересована в исправности и бесперебойной работе, предоставляемой нами техники. Прямые поставки с завода изготовителя и правильная стратегия работы отдела запчастных частей позволяет нам обеспечивать на своих складах широкий ассортимент оригинальных запчастей для техники и оборудования, что позволяет нашим клиентам избегать вынужденных простоев.</p>
                        <p>Оригинальные запчасти, масла, расходные материалы и все основные компоненты имеются в наличии на складе. При необходимости поставляются под заказ. </p>
                        <p>Мы гарантируем своим клиентам сервисную поддержку на высочайшем уровне. Все специалисты сервисной службы регулярно проходят обучение и стажировку, обладают высокой квалификацией и большим опытом работы в области сервисного обслуживания. 
Круглосуточное обслуживание техники в режиме 24/7 обеспечивают выездные мобильные бригады высококвалифицированных сервис-инженеров.</p>
                    </div>
                </div>
                <div style={{marginBottom:'-7vh'}} className="info-section-history">
                    <div className="history-left">Руководство LiveLink</div>
                    <div className="history-text">
                        <p>JCB LiveLink — это программное обеспечение, которое позволяет службе сервиса, а также владельцам машин JCB контролировать и управлять своими машинами удаленно. Все, что Вам потребуется — это компьютер, подключенный к интернету. Терминал LiveLink встраивается в машину, контролирует данные о ней и отправляет информацию владельцу машины посредством технологии мобильной связи.</p>
                        <p>Система JCB LiveLink собирает ценные сведения о вашей машине JCB, которые помогают гарантировать следующее:</p>
                        <ul>
                            <li>Ваша машина защищена.</li>
                            <li>Ваша машина не требует дополнительного обслуживания и готова к работе.</li>
                            <li>Ваша машина обеспечивает максимальную производительность и эффективность.</li>
                            <li>Теперь система JCB LiveLink стандартно устанавливается на большинство машин JCB.</li>
                            <li>Выпущена в январе 2011 года в Великобритании.</li>
                            <li>Стандартно устанавливается более чем на 60 моделей оборудования JCB.</li>
                            <li>Бесплатно предоставляется владельцам среднегабаритных машин на 2 года.</li>
                            <li>Бесплатно предоставляется владельцам тяжелых машин на 3 года.</li>
                            <li>Получение данных о вашем оборудовании в реальном времени.</li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Parts;
