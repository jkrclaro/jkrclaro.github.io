import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><a href='/'>About</a></li>
                    <li><a href='portfolio'>Portfolio</a></li>
                    <li><a href='blog'>Blog</a></li>
                    <li><a href='library'>Library</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;