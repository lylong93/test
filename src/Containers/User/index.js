import React, { Component } from 'react';
import { Avatar, Button, Menu } from 'antd';

import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import './style.scss';
class User extends Component {
    render() {
        return (
            <div>
                <div className="avatar-wrapper">
                    <Avatar size="large">USER</Avatar>

                </div>
                <Menu theme="dark">
                    <Menu.Item>
                        我的收藏
                    </Menu.Item>
                    <Menu.Item>
                        我的创建
                    </Menu.Item>
                    <Menu.Item>
                        登录
                    </Menu.Item>
                </Menu>
                <ul>
                    <li>                 
                    <Button type="primary">
                        <Link to='/login'>登录</Link>
                    </Button>
                    </li>
                </ul>
                <Footer/>
            </div>
        )
    }
}

export default User