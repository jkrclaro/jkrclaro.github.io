import React from 'react';


class Navbar extends React.Component {

    render() {
        const pathname = new URL(window.location.href).pathname;
        const articles = require('../articles.json')
        let articleUrls = [];
        for (const article of articles) {
            articleUrls.push(article.url)
        }
        return (
            <div className='nav mt-3 mb-3'>
                <div className='mr-4'><a className={pathname === '/' ? 'link-active' : ''} href='/'>About</a></div>
                <div className='mr-4'><a className={pathname === '/articles' || articleUrls.includes(pathname) ? 'link-active' : ''} href='/articles'>Articles</a></div>
            </div>
        )
    }
}

export default Navbar;