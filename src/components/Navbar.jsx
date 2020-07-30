  
import React from 'react';


class Navbar extends React.Component {

    state = {
        pathname: new URL(window.location.href).pathname,
    }

    render() {
        return (
            <div className='nav mt-3 mb-3'>
                <h6 style={{paddingRight: 20}}><a href='/'>About</a></h6>
                <h6><a href='/notes'>Notes</a></h6>
            </div>
        )
    }
}

export default Navbar;