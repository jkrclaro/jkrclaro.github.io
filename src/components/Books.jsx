import React from 'react';

import { Link } from 'react-router-dom';


class Books extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to='/benjamin-franklin'>Benjamin Franklin: An American Life</Link></li>
            </ul>
        )
    }
}

export default Books;