import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <ul className='nav mb-3'>
                <li className='nav-item nav-link'><Link to='/'>About</Link></li>
                {/* <li className='nav-item nav-link'><Link to='/essays'>Essays</Link></li> */}
                <li className='nav-item nav-link'><Link to='/books'>Books</Link></li>
            </ul>
        )
    }
}

export default Navbar;