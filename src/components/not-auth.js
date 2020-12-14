import React from 'react';
import upArrow from '../../img/up-arrow.png';

const notAuth = () => {
    return (
        <div className="container notauth">
            <img src={upArrow} className="notauth__arrow"/>
            <h2 className="notauth__header">Пожалуйста авторизуйтесь</h2>
        </div>
    );
}

export default notAuth;