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
                    <h1 className="header__info_h1">Фотогалерея</h1>
                    <p className="header__info_text">От случайных пользователей</p>
                </div>
                {/* { isAuth() ? ( <UserAuth user={user} /> ) : ( <Link to={{pathname: "/auth"}} className="header__info_auth">Авторизоваться</Link> ) } */}
                { isAuth() ? ( <UserAuth user={user} /> ) : ( <p class="header__info_notauth">Вы не авторизованы</p> ) }
            </div>
        </div>
    );
}

export default Header;