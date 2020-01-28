import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import BrowserRouter from "react-router-dom/modules/BrowserRouter";
import {Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import {store} from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={LandingPage}/>
                    <Route exact={true} path="/" component={Signup}/>
                    <Sidebar>
                        <Route exact={true} path="/" component={Signup}/>
                        <Route exact={true} path="/" component={Signup}/>
                        <Route exact={true} path="/" component={Signup}/>
                        <Route exact={true} path="/" component={Signup}/>
                        <Route exact={true} path="/" component={Signup}/>
                    </Sidebar>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
