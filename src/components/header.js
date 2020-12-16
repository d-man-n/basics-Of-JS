import React from 'react';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

import { isAuth, UserAuth } from './auth';

const Header = (props) => {
    const {user} = props;
    return(
        <div className="header">
            <div className="container header-container">
                <img 
                    src={Logo} 
                    className="header__logo" 
                    alt="Лого"
                />
                <div className="header__info">
                    <h1 className="header__info_h1">Фотогалерея Unsplash</h1>
                    <p className="header__info_text">с использованием React + Redux</p>
                </div>
                { isAuth() ? ( <UserAuth user={user} /> ) : ( <Link to={{pathname: "/auth"}} className="header__info_auth">Авторизоваться</Link> ) }
            </div>
        </div>
    );
}

export default Header;