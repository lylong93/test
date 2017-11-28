import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Find extends Component {
    render() {
        return (
            <div>
                <Link to='/Talk'>talk</Link>
                <Link to='/Find'>find</Link>
                <Link to='/User'>user</Link>
            </div>
        )
    }
}

export default Find