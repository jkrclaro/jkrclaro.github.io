import React from 'react';

import { Link } from 'react-router-dom';


class Books extends React.Component {

    render() {
        return (
            <div className='col-lg-12'>
                <ul id='books'>
                    <li><Link to='/benjamin-franklin'>Benjamin Franklin: An American Life</Link></li>
                </ul>
            </div>
        )
    }
}

export default Books;