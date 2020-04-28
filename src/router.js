import React from 'react';
import App from './App';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import HomeContainer from "./Containers/HomeContainer";
import LoginContainer from "./Containers/LoginContainer";
import RegisterContainer from "./Containers/RegisterContainer";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/login">
                    <LoginContainer/>
                </Route>
                <Route path="/register">
                    <RegisterContainer/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter
