import React from 'react';


class Navbar extends React.Component {

    state = {
        pathname: new URL(window.location.href).pathname,
        notes: [
            '/reactjs'
        ]
    }

    render() {
        const { pathname, notes } = this.state;
        return (
            <div className='nav mt-3 mb-3'>
                <div className='mr-4'><a className={pathname === '/' ? 'link-active' : ''} href='/'>About</a></div>
                <div className='mr-4'><a className={pathname === '/notes' || notes.includes(pathname) ? 'link-active' : ''} href='/notes'>Notes</a></div>
            </div>
        )
    }
}

export default Navbar;