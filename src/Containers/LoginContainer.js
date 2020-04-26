/**
 * Enda <endachao@gmail.com>
 */
import React from "react";
import NavBar from "../Components/NavBar";
import {Layout} from "antd";
import AppFooter from "../Components/Footer";

const {Content} = Layout;

class LoginContainer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar selected="login"/>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>

                </Content>

                <AppFooter/>
            </Layout>
        )
    }
}

export default LoginContainer
