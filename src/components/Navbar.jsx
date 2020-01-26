import React from 'react';


class Navbar extends React.Component {

    render() {
        const pathname = new URL(window.location.href).pathname;
        return (
            <div className='nav mt-3 mb-3'>
                <div className='mr-4'><a className={pathname === '/' ? 'link-active' : ''} href='/'>About</a></div>
                <div className='mr-4'><a className={pathname.includes('/articles') ? 'link-active' : ''} href='/articles'>Articles</a></div>
                <div className='mr-4'><a className={pathname.includes('/books') ? 'link-active' : ''} href='/books'>Books</a></div>
            </div>
        )
    }
}

export default Navbar;