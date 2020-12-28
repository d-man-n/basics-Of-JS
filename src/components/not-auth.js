import React from 'react';
import upArrow from '../../img/up-arrow.png';
import { Link } from 'react-router-dom';

const notAuth = () => {
    return (
        <div className="container notauth">
            {/* <img src={upArrow} className="notauth__arrow"/> */}
            {/* <h2 className="notauth__header">Пожалуйста авторизуйтесь</h2> */}
            <Link to={{pathname: "/auth"}} className="notauth__auth_btn">Авторизоваться</Link>
        </div>
    );
}

export default notAuth;