import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import { isAuth } from '../components/auth';

import Header from '../components/header';
import Gallery from './gallery';
import Photo from './big-photo';
import Auth from '../components/auth';
import notAuth from '../components/not-auth';

const AppComponent = (props) => {

    const {user} = props;

    return(
        <BrowserRouter>
            <Header user={user} />
            {isAuth() ? ( <Route exact path="/" component={Gallery} /> )  : ( <Route exact path="/" component={notAuth} /> ) }
            <Route path="/auth" component={Auth} />
            <Route path="/photo" component={Gallery} />
            <Route path="/photo/:photoId" component={Photo} />
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    localStorage.setItem('store', JSON.stringify(state));
    return {
        user: state.user
    }
}

const App = connect(
    mapStateToProps
)(AppComponent);


export default App;