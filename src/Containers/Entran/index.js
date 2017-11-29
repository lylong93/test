import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tabs, Icon, Button } from 'antd';

import Login from '../Login'
import Register from '../Register'
import LoginMid from '../LoginMid'

const TabPane = Tabs.TabPane;

class Entran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '1',
        }
    }
    render() {
        return (
            <div>
                <LoginMid></LoginMid>     
                <Tabs>
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                      <Login/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                      <Register/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Entran
