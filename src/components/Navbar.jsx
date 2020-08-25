  
import React from 'react';


class Navbar extends React.Component {

    render() {
        const pathname = new URL(window.location.href).pathname;
        return (
            <div style={{paddingBottom: 10}}>
                <li style={{display: 'inline'}}>
                    <a href='/' style={{paddingRight: 15}} className={pathname === '/' ? 'active' : ''}>About</a>
                    {/* <a href='/blog' className={pathname === '/blog' || pathname.includes('/blog/') ? 'active' : ''}>Blog</a> */}
                </li>
            </div>
        )
    }
}

export default Navbar;