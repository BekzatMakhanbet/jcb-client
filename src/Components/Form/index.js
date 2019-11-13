import React, { Component } from 'react';
import { MDBInput,MDBIcon } from 'mdbreact';
import './index.css';
import axios from 'axios';

// var back="http://localhost:5000/";
var back="http://89.219.32.105:5005/";


export class MainForm extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        catalog:'Экскаваторы-погрузчики',
        modal:false,
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
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <div onClick={this.toggle} className="ostavit-zayavku"><MDBIcon icon="pen" style={{marginRight:10,color:'#FCB026'}} />Оставить Заявку</div>
                {this.state.modal ? <div className="cover" onClick={()=>{this.setState({modal:false})}}></div>:null}
                <div className={this.state.modal ? "show form":"not-show form"}>
                    <div style={{display:'flex',justifyContent:'space-between'}}><h3>Форма заявки</h3><div onClick={()=>{this.setState({modal:false})}} className="close-modal"><MDBIcon icon="window-close" /></div></div>
                    <form onSumbit={this.onSumbit} className="fields">
                        <input onChange={this.onChange} placeholder="ФИО" type="text" value={this.state.name} name="name"/>
                        <input onChange={this.onChange} placeholder="E-mail" type="email" value={this.state.email} name="email"/>
                        <input onChange={this.onChange} placeholder="Телефон" type="phone" value={this.state.phone} name="phone"/>
                        <select onChange={this.onChange} name="catalog" id="">
                            <option value="Экскаваторы-погрузчики">Экскаваторы-погрузчики</option>
                            <option value="Гусеничные экскаваторы">Гусеничные экскаваторы</option>
                            <option value="Колесные экскаваторы">Колесные экскаваторы</option>
                            <option value="Телескопические погрузчики">Телескопические погрузчики</option>
                            <option value="Фронтальные погрузчики">Фронтальные погрузчики</option>
                            <option value="Мини экскаваторы">Мини экскаваторы</option>
                            <option value="Мини погрузчики с бортовым поворотом">Мини погрузчики с бортовым поворотом</option>
                            <option value="Вилочные погрузчики повышеной проходимост">Вилочные погрузчики повышеной проходимост</option>
                            <option value="Промышленные вилочные погрузчики">Промышленные вилочные погрузчики</option>
                            <option value="Уплотнительная техника">Уплотнительная техника</option>
                            <option value="Навесное оборудование ">Навесное оборудование </option>
                            <option value="Ручной гидравлический инструмент">Ручной гидравлический инструмент</option>
                            <option value="Запчасти и сервис">Запчасти и сервис</option>
                            <option value="Акции и новости">Акции и новости</option>
                            <option value="Акции и новости">Акции и новости</option>
                        </select>
                        <div><input type="checkbox" name="check"/> <span className="word">Я даю согласие на обработку моих данных</span></div>
                        <input onClick={this.onSumbit} type="submit" value="Отправить"/>
                        <p>Контакты:+7 (727)310-00-01  +7 (700)310-00-01</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default MainForm
