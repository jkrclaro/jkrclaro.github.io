import React from 'react';

import { Link } from 'react-router-dom';


class Essays extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to='/essay-1'>Essay 1</Link></li>
            </ul>
        )
    }
}

export default Essays;