  
import React from 'react';


class Navbar extends React.Component {

    state = {
        pathname: new URL(window.location.href).pathname,
    }

    render() {
        const { pathname } = this.state;
        return (
            <div className='nav mt-3 mb-3'>
                <h6 style={{paddingRight: 20}}><a className={pathname === '/' ? 'active' : ''} href='/'>About</a></h6>
                <h6><a className={pathname === '/books' ? 'active' : ''} href='/books'>Books</a></h6>
            </div>
        )
    }
}

export default Navbar;