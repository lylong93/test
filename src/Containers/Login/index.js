import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import './style.scss'
class Login extends Component {
    render() {
        return (
            <div className='login-wrapper'>
                <br/>
                <Input
            placeholder="Enter your 用户"
            prefix={<Icon type="user" />}
            className='item'
            />
            <br/><br/>
                <Input
            placeholder="Enter your 密码"
            prefix={<Icon type="user" />}
            className='item'
            />
            <br/><br/>
             <Button type="primary">登录</Button>
            </div>
        )
    }
}

export default Login