/**
 * Enda <endachao@gmail.com>
 */
import React from "react";
import NavBar from "../Components/NavBar";
import {Layout} from "antd";
import AppFooter from "../Components/Footer";

import {Row, Col, Card} from 'antd';
import {Form, Input, Button} from 'antd';
import '../assets/css/login.css'

const {Content} = Layout;

class RegisterContainer extends React.Component {
    render() {
        return (
            <Layout>
                <NavBar selected="register"/>
                <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <Row style={{marginTop: '50px'}}>
                        <Col lg={{span: 8, offset: 8}} xs={{span: 24}} sm={{span: 10, offset: 7}} className="loginPlan">
                            <Card title="注册" bordered={false}>
                                <Form
                                    wrapperCol={{lg: {span: 18, offset: 3}}}
                                    name="basic"
                                    style={{marginLeft: 10, marginRight: 10}}
                                >
                                    <Form.Item
                                        className="login-form-item"
                                    >
                                        <Form.Item name="email" noStyle
                                                   rules={[{required: true, message: '请输入邮箱地址'}]}
                                        >
                                            <Input placeholder="Email" className="form-item-input"/>
                                        </Form.Item>

                                        <span className="form-item-tips">会发送邮件进行验证</span>
                                    </Form.Item>

                                    <Form.Item
                                        className="login-form-item"
                                    >
                                        <Form.Item name="username" noStyle
                                                   rules={[{required: true, message: '请输入用户名'}]}
                                        >
                                            <Input placeholder="用户名" className="form-item-input"/>
                                        </Form.Item>

                                        <span className="form-item-tips">支持中/英文、大小写字母与数字</span>
                                    </Form.Item>

                                    <Form.Item
                                        className="login-form-item"
                                    >
                                        <Form.Item
                                            name="password"
                                            rules={[{required: true, message: '请输入密码'}]}
                                            noStyle
                                        >
                                            <Input.Password placeholder="密码" className="form-item-input"/>
                                        </Form.Item>
                                        <span className="form-item-tips">8位以上字符</span>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{offset: 6, span: 12}}>
                                        <Button type="primary" htmlType="login" block>
                                            注册
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <AppFooter/>
            </Layout>
        )
    }
}

export default RegisterContainer
