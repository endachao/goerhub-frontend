/**
 * Enda <endachao@gmail.com>
 */
import React from "react";
import NavBar from "../Components/NavBar";
import {Layout} from 'antd';
import AppFooter from "../Components/Footer";

const {Content} = Layout;

class HomeContainer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar selected="home"/>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                        Content
                    </div>
                </Content>
                <AppFooter/>
            </Layout>
        )
    }
}

export default HomeContainer
