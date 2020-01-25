import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <ul className='nav mt-3 mb-3'>
                <li className='nav-item nav-link'><Link to='/'>About</Link></li>
                <li className='nav-item nav-link'><Link to='/books'>Books</Link></li>
                <li className='nav-item nav-link'><a href='https://www.github.com/jkrclaro' target='_blank' rel='noopener noreferrer'>Projects</a></li>
            </ul>
        )
    }
}

export default Navbar;