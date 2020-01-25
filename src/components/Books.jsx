import React from 'react';

import { Link } from 'react-router-dom';


class Books extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to='/book-1'>Book 1</Link></li>
            </ul>
        )
    }
}

export default Books;