import React from 'react';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';

import { userFetchData, itemsFetchData } from '../actions';


export const isAuth = () => {
    let isAuth = false;
    if (localStorage.getItem('Token') !== null) {isAuth = true;}
    return isAuth;
}

export const unsplash = new Unsplash({
    accessKey: 'wfvCgezqZ0wr6la7DW2nXYIYKjuThmjCivyfdTZOQyo',
    secret: "NXmDiowfrT50mY2Da_03L1nPwNW8ru5OKxXfwqyDvnI",
    callbackUrl: "http://basejs.dmann.ru/auth"
});

export const UserAuth = ({user}) => {
    return (
        <div className="auth__user">
            <a href={user.userUrl} className="auth__user_link" target="_blank">
                <img src={user.userImage} className="auth__user_img"/>
                <br/>
                {user.userName}
            </a>
        </div>
    );
}

let Auth = (props) => {

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);

    if (isAuth()) {
        // if (props.page>0 && props.user.id) {
        if (props.user.id) {
            location.assign(unsplash._callbackUrl.split('auth')[0]);
        }
    }
    else {
        const code = location.search.split('code=')[1];
        if (!code) {
            location.assign(authenticationUrl);   
        }
        else {
            unsplash.auth.userAuthentication(code)
            .then(res =>
                res.json())
                .then(json =>
                {
                unsplash.auth.setBearerToken(json.access_token);
                localStorage.setItem('Token', JSON.stringify(json));
                props.userFetchData();
                // props.itemsFetchData(1);
                }
            );
        }
    }
    return (
        <div className="container auth">
            <h2 className="auth__header">Loading...</h2>
        </div>
        );
}

const mapStateToProps = (state) => {
    localStorage.setItem('store', JSON.stringify(state));
    return {
        user: state.user,
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userFetchData: () => dispatch(userFetchData()),
        itemsFetchData: (page) => dispatch(itemsFetchData(page)),
    }
}

Auth = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default Auth;