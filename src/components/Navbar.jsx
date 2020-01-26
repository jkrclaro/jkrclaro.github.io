import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (
            <div className='nav mt-3 mb-3'>
                <div className='mr-4'><Link to='/'>About</Link></div>
                <div className='mr-4'><Link to='/articles'>Articles</Link></div>
                <div className='mr-4'><Link to='/books'>Books</Link></div>
                <div><a href='https://www.github.com/jkrclaro' target='_blank' rel='noopener noreferrer'>Projects</a></div>
            </div>
        )
    }
}

export default Navbar;