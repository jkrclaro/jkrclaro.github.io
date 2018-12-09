import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className='container mt-3 mb-3'>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='mailto:support@jkrclaro.com?subject='>Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;