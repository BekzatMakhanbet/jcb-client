import React, { Component } from 'react';
import {MDBIcon} from 'mdbreact';
import { Link } from 'react-router-dom';
import Axios from 'axios';



// var back="http://localhost:5005/";
var back="http://89.219.32.105:5005/";

export class Footer extends Component {
    state={
      contacts:'',
      tel1:'',
      tel2:'',
      email:'',
      time:'',
      resp:'',
      instagram_link:'',
      facebook_link:'',
      youtube_link:''
    }
    componentDidMount(){
      Axios.get(back+"contacts").then(res=>{this.setState({tel1:res.data[0].value,tel2:res.data[1].value,email:res.data[2].value,time:res.data[3].value,resp:res.data[4].value,instagram_link:res.data[5].value,facebook_link:res.data[6].value,youtube_link:res.data[7].value})
      })
    }
    render() {
    
        return (
            <div>
                  <footer>
              <div className="top-footer">
                <div className="footer-text">«Jamais Content (неугомонный) — это очень верно в отношении меня. Я никогда не останавливаюсь, все время ищу возможности совершенствования». Мистер JCB (Джозеф Сирил Бамфорд)</div>
              </div>
              <div className="bottom-footer">
                <div className="yellow-footer">
                  <div className="first-y">
                    <div>
                      <Link to="/catalog" className="yellow-link">Каталог</Link>
                      <Link to="/parts" className="yellow-link">Запчасти и сервис</Link>
                    </div>
                    <div>
                      <Link to="/finance" className="yellow-link">Финансирование</Link>
                      <Link to="/news" className="yellow-link">Акции и Новости</Link>
                    </div>
                  </div>
                  <div className="second-y">
                    <div className="second-y-first">
                      <div>
                        <a href="tel:87273100001"><div style={{color:'white'}} className="yellow-phone"><MDBIcon icon="phone"/> {this.state.tel1}</div></a>
                        <a href="tel:87003100001"><div  style={{color:'white'}}className="yellow-phone"><MDBIcon icon="phone"/> {this.state.tel2}</div></a>
                      </div>
                      <div>
                        <div className="yellow-email"><MDBIcon icon="envelope"/> {this.state.email}</div>
                        <div className="yellow-time"><MDBIcon icon="clock"/> {this.state.time}</div>
                      </div>
                    </div>
                    <div className="second-y-second">
                      <div>
                        <div className="yellow-city">г.Алматы</div>
                        <div className="yellow-address">Республика Казахстан<br/></div>
                      </div>
                      <div>
                        <img onClick={()=>{window.open(this.state.instagram_link)}} src={require('../../img/instagram.png')} alt=""/>
                        <img onClick={()=>{window.open(this.state.facebook_link)}} src={require('../../img/facebook.png')} alt=""/>
                        <img onClick={()=>{window.open(this.state.youtube_link)}} src={require('../../img/youtube (1).png')} alt=""/>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="black-footer">
                 <Link to="/about-us"><div>О нас</div></Link>
                 <Link to="/"><div>Юридическая информация</div></Link>
                 <Link to="/"><div>Политика конфеденциальности</div></Link>
                 <Link to="/site-map"><div>Карта сайта</div></Link>
                 <Link to="/contacts"><div>Как нас найти</div></Link>
               </div>
              </div>
            </footer>
            </div>
        )
    }
}

export default Footer
