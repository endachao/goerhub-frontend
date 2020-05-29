import React from 'react';
import App from './App';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducers'

import HomeContainer from "./Containers/HomeContainer";
import LoginContainer from "./Containers/LoginContainer";
import RegisterContainer from "./Containers/RegisterContainer";

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunkMiddleware)),
)

class AppRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        )
    }
}

export default AppRouter
