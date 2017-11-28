import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tabs, Icon } from 'antd';

import Login from '../Login'
import Register from '../Register'
const TabPane = Tabs.TabPane;

class Entran extends Component {
    render() {
        function ok() {
            console.log('ok')
        }
        return (
            <div>         
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
