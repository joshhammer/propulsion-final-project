import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import {store} from "./store";
import AppContainer from "./components/AppContainer/AppContainer";
import SignupCompany from "./components/SignupCompany/SignupCompany";
import SignupEmployee from "./components/SignupEmployee/SignupEmployee"

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={LandingPage}/>
                    <Route path="/company" component={AppContainer}/>
                    <Route path="/employee" component={AppContainer}/>
                    <Route path="/signup" component={SignupCompany}/>
                    <Route path="/signupemployee" component={SignupEmployee}/>

                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
