/**
 * Enda <endachao@gmail.com>
 */
import React from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import "../assets/css/navbar.css"
import {
    Link
} from "react-router-dom";

const {Header, Content, Footer} = Layout;

class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    redirectToUri(e) {
        console.log(e)
    }

    render() {
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white"}} theme="light">
                <div className="logo">
                    GoerHub
                </div>
                <Menu mode="horizontal" onClick={this.redirectToUri} defaultSelectedKeys={[this.props.selected]}>
                    <Menu.Item key="home">
                        <Link to="/">社区</Link>
                    </Menu.Item>
                    <Menu.Item key="3">课程</Menu.Item>
                    <Menu.Item key="4">wiki</Menu.Item>
                    <Menu.Item key="5">酷站</Menu.Item>

                    <Menu.Item key="register" className="bar-right register">
                        <Link to="/register">注册</Link>
                    </Menu.Item>
                    <Menu.Item key="login" className="bar-right">
                        <Link to="/login">登录</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }

}

export default NavBar
