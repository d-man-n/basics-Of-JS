import React from 'react';
import { Link } from 'react-router-dom';

const notAuth = () => {
    return (
        <div className="container notauth">
            <Link to={{pathname: "/auth"}} className="notauth__auth_btn">Авторизоваться</Link>
        </div>
    );
}

export default notAuth;