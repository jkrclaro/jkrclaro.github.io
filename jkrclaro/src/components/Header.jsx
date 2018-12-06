import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;