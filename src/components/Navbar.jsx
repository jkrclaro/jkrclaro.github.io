import React from 'react';


class Navbar extends React.Component {

    render() {
        const pathname = new URL(window.location.href).pathname;
        const books = [
            '/benjamin-franklin'
        ]
        const articles = [
            '/hello-world'
        ]
        return (
            <div className='nav mt-3 mb-3'>
                <div className='mr-4'><a className={pathname === '/' ? 'link-active' : ''} href='/'>About</a></div>
                <div className='mr-4'><a className={pathname === '/articles' || articles.includes(pathname) ? 'link-active' : ''} href='/articles'>Articles</a></div>
                <div className='mr-4'><a className={pathname === '/books' || books.includes(pathname) ? 'link-active' : ''} href='/books'>Books</a></div>
            </div>
        )
    }
}

export default Navbar;