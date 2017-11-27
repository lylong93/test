import React, { Component } from 'react';
import { Button } from 'antd';

import { Link } from 'react-router-dom';

class User extends Component {
    render() {
        return (
            <div>
                <Button type="primary">
                    <Link to='/login'>登录</Link>
                </Button>
            </div>
        )
    }
}

export default User