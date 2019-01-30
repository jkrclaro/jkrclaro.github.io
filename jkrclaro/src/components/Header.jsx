import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className='container mt-3'>
                <ul className="nav justify-content">
                    <li className="nav-item"><Link className='nav-link' to='/'>About</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/workout'>Workout</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;