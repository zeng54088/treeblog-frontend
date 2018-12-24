/**
 * Created by Administrator on 2018/12/22.
 */
import React, { Component } from 'react';
import { Layout, Input ,Row, Col,Button } from 'antd';
import $ from "jquery";
const { Header, Content, Footer } = Layout;
class BackLogin extends Component {
    constructor(props){
        super(props);

    }
    login=()=>{
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        $.ajax({
            type:"GET",
            url:"http://127.0.0.1:81/api/test/hello", //访问的链接
            dataType:"json",  //数据格式设置为jsonp
            jsonp:"callback",  //Jquery生成验证参数的名称
            success:function (data){  //成功的回调函数
                console.log(data);
            },
            error: function (e) {
                console.log(e);
            }
        });
        if(username=='admin' && password=="password"){
            alert("登入成功");
        }else{
            alert("登入失败");
        }

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
                        <Col span={5}><Input ref="username" placeholder="用户名" /></Col>
                    </Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row>
                        <Col  offset={7} span={1}>密&nbsp;&nbsp;&nbsp;码:</Col>
                        <Col span={5}><Input ref="password" type="password" placeholder="密码" /></Col>
                    </Row>
                    <Row><Col span={12}>&nbsp; </Col></Row>
                    <Row>

                        <Col offset={7} span={5}><Button onClick={()=>{this.login()}}>登入</Button></Col>
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