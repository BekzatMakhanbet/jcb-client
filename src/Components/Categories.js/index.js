import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Categories extends Component {
    render() {
        return (
            <div className="categories">
            <h2>Выберите категорию</h2>
              <div className="category-list">
                <Link to="/catalog/2">
                <div className="category">
                  <img src={require('../../img/10.png')} alt=""/>
                  <div>Экскаваторы-погрузчики</div>
                </div>
                </Link>
                <Link to="/catalog/1">
                <div className="category">
                  <img src={require('../../img/1.png')} alt=""/>
                  <div>Гусеничные экскаваторы</div>
                </div>
                </Link>
                <Link to="/catalog/3">
                <div className="category">
                  <img src={require('../../img/2.png')} alt=""/>
                  <div>Колесные экскаваторы</div>
                </div>
                </Link>
               <Link to="/catalog/4">
               <div className="category">
                  <img src={require('../../img/7.png')} alt=""/>
                  <div>Телескопические погрузчики</div>
                </div>
               </Link>
               <Link to="/catalog/5" >
               <div className="category">
                  <img src={require('../../img/9.png')} alt=""/>
                  <div>Фронтальные колесные погрузчики</div>
                </div>
               </Link>  
               <Link to="/catalog/6">
               <div className="category">
                  <img src={require('../../img/5.png')} alt=""/>
                  <div>Мини-экскаваторы</div>
                </div>
               </Link>
                <Link to="/catalog/7">
                <div className="category">
                  <img src={require('../../img/4.png')} alt=""/>
                  <div>Мини-погрузчики с бортовым поворотом</div>
                </div>
                </Link>
               
                <Link to="/catalog/8">
                <div className="category">
                  <img src={require('../../img/3.png')} alt=""/>
                  <div>Вилочные погрузчики повышеной проходимости</div>
                </div>
                </Link>
                <Link to="/catalog/9">
                <div className="category">
                  <img src={require('../../img/6.png')} alt=""/>
                  <div>Промышленные вилочные погрузчики</div>
                </div>
                </Link>
                <Link to="/catalog/10">
                <div className="category">
                  <img src={require('../../img/8.png')} alt=""/>
                  <div>Уплотнительная техника</div>
                </div>
                </Link>
                <Link to="/catalog/11">
                <div className="category">
                  <img className="icon-image" src={require('../../img/что-то там_icon.png')} alt=""/>
                  <div>Навесное оборудование</div>
                </div>
                </Link>
                <Link to="/catalog/12">
                <div className="category">
                  <img className="icon-image" src={require('../../img/drill.png')} alt=""/>
                  <div>Ручные гидравлические инструменты</div>
                </div>
                </Link>
              
                
              </div>
            </div>
        )
    }
}

export default Categories
