import React, { Component } from 'react';
import axios from 'axios';

class LoginMid extends Component {
    componentDidMount() {
        axios.get('/user')
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>LoginMid
                
            </div>
        )
    }
}

export default LoginMid