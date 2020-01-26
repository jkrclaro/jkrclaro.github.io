import React from 'react';

import { Link } from 'react-router-dom';


class Books extends React.Component {

    render() {
        return (
            <div id='books'>
                <div><span className='bulletpoint mr-2'>&#8226;</span> <Link to='/benjamin-franklin'>Benjamin Franklin: An American Life</Link></div>
            </div>
        )
    }
}

export default Books;