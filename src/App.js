import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import Catalog from './Components/Catalog';
import List1 from './Components/List';
import MiniPog from './Components/List/MiniPog';
import JS130 from './Components/Excavators/Excavators/1/JS130';
import JS145 from './Components/Excavators/Excavators/1/JS145';
import AboutUs from './Components/AboutUs/AboutUs';
import ExcavatorPogruzchik from './Components/List/indexExcavatorPogruzchic';
import WheelExcavator from './Components/List/WheelExcavator';
import TeleskopExcavator from './Components/List/TeleskopExcavator';
import FrontExcavator from './Components/List/FrontExcavator';
import MiniExcavator from './Components/List/MiniExcavator';
import MiniPogruzchikBortovoi from './Components/List/indexMiniPogruzchikBor';
import Vilo4nie from './Components/List/Vilo4nie';
import Uplotnitel from './Components/List/Uplotnitel';
import Navesnoe from './Components/List/Navesnoe';
import Hands from './Components/List/Hand';
import Parts from './Components/Catalog/Parts';
import Contacts from './Components/AboutUs/Contacts';
import Finance from './Components/Catalog/Phinans';
import Sale from './Components/Catalog/SpecialOffers';
import SalePage from './Components/Catalog/SalePage';
import SiteMap from './Components/Catalog/SiteMap';
import Chat from './Components/Chat';

class App extends React.Component{
  state={
    isLoading: true ,
  }
    
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2800); 
}
componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
}
  render(){
  
  return (
    this.state.isLoading ? ( <div id="image">
    <img src={require('../src/img/logo.png')} alt=""/>
</div>):(
    <Router>
      {/* <Chat/> */}
      <div className="App">
        <Switch>
          <Route exact path="/" component={NavbarComp}/>
          <Route exact path="/catalog" component={Catalog}/>
          <Route exact path="/parts" component={Parts}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/finance" component={Finance}/>
          <Route exact path="/news" component={Sale}/>
          <Route exact path="/news/:id" component={SalePage}/>
          <Route exact path="/offers" component={Finance}/>
          <Route exact path="/site-map" component={SiteMap}/>
          <Route exact path="/catalog/:index" component={List1}/>
          {/* <Route exact path="/catalog/excavator-loader" component={ExcavatorPogruzchik}/>
          <Route exact path="/catalog/excavator-wheel" component={WheelExcavator}/>
          <Route exact path="/catalog/excavator-teleskop" component={TeleskopExcavator}/>
          <Route exact path="/catalog/excavator-front" component={FrontExcavator}/>
          <Route exact path="/catalog/mini-loader" component={MiniPogruzchikBortovoi}/>
          <Route exact path="/catalog/forked-loader" component={Vilo4nie}/>
          <Route exact path="/catalog/uplotniteli" component={Uplotnitel}/>
          <Route exact path="/catalog/navesnoe" component={Navesnoe}/>
          <Route exact path="/catalog/hands" component={Hands}/>
          <Route exact path="/catalog/excavator-mini" component={MiniExcavator}/> */}
          <Route exact path="/catalog/:cat_index/:car_index" component={JS130}/>
          {/* <Route exact path="/catalog/1/2" component={JS145}/> */}
          {/* <Route exact path="/catalog/1/3" component={JS160}/>
          <Route exact path="/catalog/1/4" component={JS180}/>
          <Route exact path="/catalog/1/5" component={JS190}/>
          <Route exact path="/catalog/1/6" component={JS200}/>
          <Route exact path="/catalog/1/7" component={JS205}/>
          <Route exact path="/catalog/1/8" component={JS205NLC}/>
          <Route exact path="/catalog/1/9" component={JS220}/>
          <Route exact path="/catalog/1/10" component={JS240}/>
          <Route exact path="/catalog/1/11" component={JS260}/>
          <Route exact path="/catalog/1/12" component={JS300}/>
          <Route exact path="/catalog/1/13" component={JS330}/>
          <Route exact path="/catalog/1/14" component={JS370}/> */}

          <Route exact path="/catalog/mini-pogruzchik" component={MiniPog}/>
          <Route exact path="/about-us" component={AboutUs}/>
        </Switch>
      </div>
    </Router>
)
  );
  }
}

export default App;
