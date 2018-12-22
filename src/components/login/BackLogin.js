/**
 * Created by Administrator on 2018/12/22.
 */
import React, { Component } from 'react';
import { Layout, Input ,Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
class BackLogin extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <Layout className="layout">
            <Header>
                <div >
                    <h1 style={{color:'white'}}>树哥博客后台登入系统</h1>
                </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row>
                        <Col  offset={7} span={1}>用户名:</Col>
                        <Col span={5}><Input placeholder="用户名" /></Col>
                    </Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row>
                        <Col  offset={7} span={1}>密&nbsp;&nbsp;&nbsp;码:</Col>
                        <Col span={5}><Input type="password" placeholder="密码" /></Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                版权归@树哥所有
            </Footer>
        </Layout>

    }
}

export default BackLogin;