import React from 'react';

import { Link } from 'react-router-dom';


class Articles extends React.Component {

    render() {
        return (
            <div id='articles'>
                <div><span className='bulletpoint mr-2'>&#8226;</span> <Link to='/hello-world'>Nullam nec neque sed nibh dapibus auctor a sed nulla. Morbi sit metus.</Link></div>
            </div>
        )
    }
}

export default Articles;