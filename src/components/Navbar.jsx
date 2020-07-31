  
import React from 'react';


class Navbar extends React.Component {

    state = {
        pathname: new URL(window.location.href).pathname,
    }

    render() {
        return (
            <div style={{paddingBottom: 10}}>
                <li style={{display: 'inline'}}>
                    <a href='/' style={{paddingRight: 15}}>About</a>
                    <a href='/notes'>Notes</a>
                </li>
            </div>
        )
    }
}

export default Navbar;