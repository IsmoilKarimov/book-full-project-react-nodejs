import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

// images
import logo from '../../assets/img/logo.svg'
import menu from '../../assets/img/menu.svg'
import down from '../../assets/img/down.svg'
import search from '../../assets/img/search.svg'
import fav from '../../assets/img/fav.svg'
import cart from '../../assets/img/cart.svg'
import user from '../../assets/img/user.svg'

const Header = () => {
    return(
        <header className="header">
            <div className="container"> 
                <Link to='/' className="header__logo">
                    <img src={logo} alt='' />
                    <span className="header__logo--right">
                        <span className="header__logo--name">Pir.uz</span>
                        <span className="header__logo--slogan">Книжный интернет магазин</span>
                    </span>
                </Link>
                <div className="header__search">
                    <button className="header__menu btn">
                        <img src={menu} alt=''/>
                        <span>Катигории</span>
                        <img src={down} alt='' />
                    </button>
                    <input type='text' className="header__input" placeholder="Поиск" />
                    <button className="header__find btn">
                        <img src={search} alt='' />
                    </button>
                 </div>
                 <Link to='/' className="header__btn btn btn__outline">
                     <span className="header_btn--count">35</span>
                     <img src={fav} alt="" />
                 </Link>
                 <Link to='/' className="header__btn btn btn__outline">
                     <span className="header__btn--count">4</span> 
                     <img src={cart} alt="" />
                 </Link>
                 <button className="header__user btn btn__bg btn__shadow">
                     <img src={user} alt='' />
                     Вход
                 </button>
            </div>
        </header>
    )
}
export default Header