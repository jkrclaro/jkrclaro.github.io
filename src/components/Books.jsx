import React from 'react';

import { Link } from 'react-router-dom';


class Books extends React.Component {

    render() {
        return (
            <div id='books'>
                <div><Link to='/benjamin-franklin'><span className='mr-2'>&#8226;</span> Benjamin Franklin: An American Life</Link></div>
            </div>
        )
    }
}

export default Books;