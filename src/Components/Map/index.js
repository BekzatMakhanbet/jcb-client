import React, { Component } from 'react';
import { YMaps, Map, Placemark,FullscreenControl,GeolocationControl,ZoomControl } from "react-yandex-maps";
import ImageMapper from 'react-image-mapper';
import Axios from 'axios';


const mapData = {
    center: [43.300242, 77.004406],
    zoom: 15,
    controls: [],
    city:2
  };
  
  
  const coordinates = [
    [43.328485, 77.034615],
    [50.310997, 57.101753],
    [42.352292, 69.532205],
    [47.109261, 51.925163],
    [43.710844, 51.221256],
    [50.335312, 71.119595],
    [49.981540, 82.579131]
  ];
  
  var dataCity=
  [
    {id:1,name:'Астана',adress:"Туран 76",coord:[51.073555, 71.391597],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:2,name:'Алматы',adress:"Кульджинский тракт 26/2",coord:[43.328485, 77.034615],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:13,name:'Шымкент',adress:"Тамерлановское шоссе 90А",coord:[42.352292, 69.532205],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:6,name:'Атырау',adress:"Северная зона 33А",coord:[47.109261, 51.925163],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:12,name:'Актау',adress:"Индустриальная зона 9/39",coord:[43.710844, 51.221256],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:4,name:'Актобе',adress:"Промзона уч.638",coord:[50.310997, 57.101753],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
    {id:16,name:'Усть-Каменогорск',adress:"пр.Нурсултан Назарбаев 127",coord:[49.981540, 82.579131],phone:'+ 7 (727) 355 25 00',email:'info@jcb-kz.com'},
  ]

    // const url="http://localhost:5000/";
    const url="http://89.219.32.105:5005/";

export class MapContainer extends Component {
   
    state={
        map:'Алматы.png',
        city:2,
        list:[],
        tel1:'',
        tel2:'',
        resp:'',
        email:'',
    }

    componentDidMount(){
        Axios.get(url+"map").then(res=>{this.setState({list:res.data});console.log(this.state.list);});
        Axios.get(url+"contacts").then(res=>{this.setState({tel1:res.data[0].value,tel2:res.data[1].value,email:res.data[2].value,resp:res.data[4].value}); });

    }
    onChangeMap=(index)=>{
        switch (index){
                case 2: 
                this.setState({map:'Алматы.png'});
                break;

                case 1: 
                this.setState({map:'Нур-Султан.png'});
                break;
                
                case 9: 
                this.setState({map:'Караганда.png'});
                break;

                case 14: 
                this.setState({map:'Павлодар.png'});
                break;

                case 11: 
                this.setState({map:'Кызылорда.png'});
                break;

                case 12: 
                this.setState({map:'Актау.png'});
                break;

                case 4: 
                this.setState({map:'Актобе.png'});
                break;
                
                case 6: 
                this.setState({map:'Атырау.png'});
                break;

                case 7: 
                this.setState({map:'Уральск.png'});
                break;

                case 8: 
                this.setState({map:'Тараз.png'});
                break;

                case 10: 
                this.setState({map:'Костанай.png'});
                break;

                case 15: 
                this.setState({map:'Петропавловск.png'});
                break;
                
                case 13: 
                this.setState({map:'Шым.png'});
                break;

                case 16: 
                this.setState({map:'Оскемен.png'});
                break;

                 default: 
                this.setState({map:'Алматы.png'});
        }
    }
    onClickMap=(index)=>{
       this.setState({city:index});
    }
    render() {
        let gg=this.state.list.find( city => city.city_id===this.state.city);
        console.log("gg");
        console.log(gg);

        return (
            <div>
                 <div className="map-container">
                  <div className="title">Как нас найти?</div>
                  <div className="first-map-wrap">
                      <div className="first-map">
                          <img src={require('../../img/'+this.state.map)} alt=""/>
                          <div className="grid">
                              <div onMouseEnter={()=>{this.onChangeMap(2);}} onClick={()=>{this.setState({city:2})}} className="almaty">

                              </div>
                              <div onMouseEnter={()=>{this.onChangeMap(1);}} onClick={()=>{this.setState({city:1})}} className="astana">

                              </div>
                              <div onMouseEnter={()=>{this.onChangeMap(9);}} onClick={()=>{this.setState({city:1})}} className="karaganda">

                              </div>
                              <div onMouseEnter={()=>{this.onChangeMap(8);}} onClick={()=>{this.setState({city:13})}} className="zhambyl">

                                </div>
                                <div onMouseEnter={()=>{this.onChangeMap(4);}} onClick={()=>{this.setState({city:4})}}  className="aktobe"></div>

                                <div onMouseEnter={()=>{this.onChangeMap(11);}} onClick={()=>{this.setState({city:13})}} className="kyzylorda"></div>
                                 <div onMouseEnter={()=>{this.onChangeMap(12);}} onClick={()=>{this.setState({city:12})}}  className="mangystau">

                                </div> <div onMouseEnter={()=>{this.onChangeMap(6);}} onClick={()=>{this.setState({city:6})}}  className="atyrau">

                                </div>
                                 <div onMouseEnter={()=>{this.onChangeMap(7)}} onClick={()=>{this.setState({city:4})}}  className="zko">

                                </div> 
                                <div onMouseEnter={()=>{this.onChangeMap(14);}} onClick={()=>{this.setState({city:1})}} className="pvl">

                                </div>
                                <div onMouseEnter={()=>{this.onChangeMap(10);}} onClick={()=>{this.setState({city:1})}} className="kostanai">

                                </div>
                                <div onMouseEnter={()=>{this.onChangeMap(15);}} onClick={()=>{this.setState({city:1})}} className="sko">

                                </div>
                                <div onMouseEnter={()=>{this.onChangeMap(16);}} onClick={()=>{this.setState({city:16})}} className="vko">

                                </div>
                                <div onMouseEnter={()=>{this.onChangeMap(13);}} onClick={()=>{this.setState({city:13})}}  className="uko">

                                </div>
                          </div>
                      </div>
                      <div className="texts-map">

                      <div className="map-text">
                          {/* <h5>Алматы</h5> */}
                          <p>Головной офис: г. Алматы</p>
                          <p>{gg && this.state.list.find(city=> city.city_id===2).address}</p>
                          <div className="contacts">
                              <p><a href="tel:87273552500">{ this.state.resp}</a></p>
                              <br/>
                              <p>Отдел продаж по РК:</p><br/>
                              <p>E-mail: <a href="">{ this.state.email}</a></p>
                              <a href="tel:87273100001"><p>{ this.state.tel1}</p></a>
                              <a href="tel:87003100001"><p>{ this.state.tel2}</p></a>
                          </div>
                      </div>
                      {
                    
                       <div className="map-text">
                        <h5>{gg && gg.city_name}</h5>
                        <p>{gg && gg.address}</p>
                        </div>
                      }
                   
                      </div>

                  </div>
                  <YMaps  >
                    <Map className="map" zoom={false} state={{center: [gg && gg.x_coord,gg && gg.y_coord],zoom: 15,controls: [],city:2}}>
                        {this.state.list.map(coordinate => <Placemark geometry={[coordinate.x_coord,coordinate.y_coord]} />)}
                    <FullscreenControl /> 
                    <GeolocationControl options={{ float: 'left',scrollZoom:false }} />
                    <ZoomControl zoom={false} scrollZoom={false} options={{ float: 'right',scrollZoom:false }} />
                  </Map>
                  </YMaps>
                </div>
            </div>
        )
    }
}

export default MapContainer
