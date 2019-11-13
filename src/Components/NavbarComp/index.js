import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand,MDBCardImage,MDBCardText,MDBCardTitle, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBNavbarNav,MDBRow,MDBCol, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon,MDBCarousel,MDBCarouselItem, MDBCarouselInner,MDBSticky, MDBStickyContent,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import './Navbar.css';
import {Link} from 'react-router-dom';
import MainForm from '../Form';
import NavbarContainer from './NavbarContainer';
import Categories from '../Categories.js';
import Footer from '../Footer';
import axios from 'axios';
import '../Form/index.css';
import {Carousel} from "react-bootstrap";
import MapContainer from '../Map';
import  { FormCards } from '../Form/cardsForm';



// var back="http://localhost:5000/";
var back="http://89.219.32.105:5005/";




export class NavbarComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          isWideEnough: false,
          name:'',
          email:'',
          phone:'',
          catalog:'Запасные части',
          modal: false,
          sliders:[],
          youtube_video_path:'',
          live_link:[{title:'',text:'',link:''}],
        };
        this.onClick = this.onClick.bind(this);
      }
      onSumbit=(e)=>{
        e.preventDefault();
        const {name,email,phone,catalog}=this.state;
        axios.post(back+'test_drive',{name:name,email:email,phone_number:phone,car_model:catalog}).then(res=>{
            window.alert("Спасибо за заявку!");
            this.setState({modal:false});
        });
    }
        toggle = () => {
            this.setState({
              modal: !this.state.modal
            });
          }
          
        onChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }

    
    
      onClick() {
        this.setState({
          collapse: !this.state.collapse
        });
      }

      componentDidMount(){

        axios.get(back+"slider").then(res=>{
          this.setState({sliders:res.data});
          console.log("sliders",res.data);
          
        });
        axios.get(back+"youtube_link").then(res=>{
          this.setState({youtube_video_path:res.data});
          console.log(this.state.youtube_video_path);
        });
        axios.get(back+'live_link').then(res=>{
          this.setState({live_link:res.data})
        })

      }

    
      render() {
        return (
         
          <>
          <div className="all">    
          <NavbarContainer/>
                <Carousel
                    className="z-depth-1 carousel"
                    style={{width:'100%'}}
                >
                    {this.state.sliders.map((element,index)=>(
                      
                      <Carousel.Item interval={4000}>
                         <img
                            className="d-block w-100"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsHBgcHBwoRBwcHBhYHBgcHDw8ICQYWFREiIhURFRMYHCggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ0BQQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
                            alt="First slide"
                          />
                         <div className="background-carousel2" style={{backgroundImage: 'url('+(back+element.background)+')'}}>
                         <Link to={element.link}>
                                 <MDBMask overlay="black-strong" className=" flex-column text-white overlay-text">
                                 <h2>{element.title}</h2>
                                 <p className="text-little-slid">{element.text}</p>
                                 <Link to={element.link} className="just-links"><p>Узнать больше <MDBIcon style={{color:'#F9B101'}} icon="angle-right" /></p></Link>
                                 </MDBMask>
                                 </Link>
                         </div>
                     </Carousel.Item>
                    ))}
                </Carousel>
                <MainForm/>
    
            <main className="main">
                  <div className="info-section">
                    <div className="info-section-left">
                      <h1>«Autodom Machinery»</h1>
                        <h2>Эксклюзивный дилер дорожно-строительной спецтехники JCB (J. C. Bamford Excavators Ltd - Великобритания) на территории Республики Казахстан</h2>
                        <p className="bottom-text-info-section">JCB является одним из мировых производителей строительной техники.  Успех JCB основан на постоянной ориентации на клиента и инновациях во всем, что мы делаем.</p>
                        <Link to="/about-us"><button className="jcb-button">О Компании</button></Link>
                    </div>
                    
                    <div className="info-section-right">
                        <Link to="/catalog/2"><img src={require('../../img/трактор.png')} alt=""/></Link>
                        <Link to="/catalog/1"><img src={require('../../img/экставатор 2.png')} alt=""/></Link>
                        <Link to="/catalog/5"><img src={require('../../img/бульдозер.png')} alt=""/></Link>
                        <Link to="/catalog/3"><img  src={require('../../img/экскаватор.png')} alt=""/></Link>
                        <Link to="/catalog/2"><img src={require('../../img/с ковшом.png')} alt=""/></Link>
                        <Link to="/catalog/4"><img src={require('../../img/123.png')} alt=""/></Link>
                    </div>
                  </div>
                <Categories/>

                <div className="jcb-live-link">
                  <div className="jcb-link-left">
                    <h2>{this.state.live_link[0].title}</h2>
                    <p>{this.state.live_link[0].text}</p>
                    <Link onClick={()=>{window.open(this.state.live_link[0].link)}} className="more">Подробнее...</Link>
                  </div>
                  <div className="jcb-link-right">
                    <iframe className="youtube-video" src={this.state.youtube_video_path} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="services">
                  <div className="service">
                  <Link style={{color:'white'}} to="/parts">
                    <div>
                      <img src={require('../../img/maintenance (1).png')} alt="" className="service-icon"/>
                      <img src={require('../../img/maintenance.png')} alt="" className="service-icon2"/>
                    </div>
                    <h4>Запасные <br/> части</h4>
                    <p>Заказывайте оригинальные запасные части у официального дилера</p>
                  </Link>           
                    <button onClick={this.toggle} className="service-button">Оставить заявку</button>
                  </div>
                  <div className="service">
                    <Link style={{color:'white'}} to="/parts">
                    <div>
                      <img src={require('../../img/customer-service (1).png')} alt="" className="service-icon"/>
                      <img src={require('../../img/customer-service.png')} alt="" className="service-icon2"/>
                    </div>
                    <h4>Сервисное обслуживание</h4>
                    <p>Техническая поддержка 24/7, оформляйте заявку на ТО</p>
                    </Link>           
                    <button onClick={this.toggle} className="service-button">Оставить заявку</button>
                  </div>
                  <div className="service">
                  <Link style={{color:'white'}} to="/news">
                    <div>
                      <img src={require('../../img/newspaper (1).png')} alt="" className="service-icon"/>
                      <img src={require('../../img/newspaper.png')} alt="" className="service-icon2"/>
                    </div>
                    <h4>Акции и новости</h4>
                    <p>Подписывайтесь на акции и новости и будьте в курсе всех новостей первыми</p>
                    </Link>
                    <button onClick={this.toggle} className="service-button">Оставить заявку</button>
                  </div>
                </div>
              <MapContainer/>
            </main>
          <Footer/>
          </div>
           {this.state.modal ? <div className="cover" onClick={()=>{this.setState({modal:false})}}></div>:null}
           <div className={this.state.modal ? "show form":"not-show form"}>
               <div style={{display:'flex',justifyContent:'space-between'}}><h3>Форма заявки</h3><div onClick={()=>{this.setState({modal:false})}} className="close-modal"><MDBIcon icon="window-close" /></div></div>
               <form onSumbit={this.onSumbit} className="fields">
                   <input onChange={this.onChange} placeholder="ФИО" type="text" value={this.state.name} name="name"/>
                   <input onChange={this.onChange} placeholder="E-mail" type="email" value={this.state.email} name="email"/>
                   <input onChange={this.onChange} placeholder="Телефон" type="phone" value={this.state.phone} name="phone"/>
                   <select onChange={this.onChange} name="service" id="">
                       <option value="Запасные части">Запасные части</option>
                       <option value="Сервисное обслуживание">Сервисное обслуживание</option>
                       <option value="Акции и новости">Акции и новости</option>
                   </select>
                   <div><input type="checkbox" name="check"/> <span className="word">Я даю согласие на обработку  моих данных</span></div>
                   <input onClick={this.onSumbit} type="submit" value="Отправить"/>
                   <p>Контакты:+7 (727)310-00-01  +7 (700)310-00-01</p>
               </form>
           </div>
           </>
          )
      }
}

export default NavbarComp
