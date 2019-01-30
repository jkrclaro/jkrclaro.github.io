import React from 'react';

const me = require('../imgs/me.png');

const underlineStyle = {
    textDecoration: 'underline'
}

class Home extends React.Component {

    render() {
        return (
            <div className='row mt-5'>
                <div className='col-lg-10'>
                    <p>
                        My name is John Claro, I'm 24 years old and 
                        I'm a passionate developer interested in web development, 
                        software engineering and tons of other stuff. 
                    </p>
                    <p>
                        I graduated with Applied Computing in Waterford Institute of Technology from 2012-2016.
                    </p>
                    <p>
                        I live in Dublin, Ireland.
                    </p>
                    <p>
                        I worked for Ireland's leading online media company from 2016-2018 as a Python Software Developer.
                    </p>
                    <p>
                        If you want to contact me, you can reach me via one of the following communication channels:
                    </p>
                    <ul>
                        <li>via <a href='mailto:jkrclaro@gmail.com' style={underlineStyle}>email</a></li>
                        <li>send me a message on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>github</a></li>
                        <li>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>twitter</a></li>
                        <li>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer" style={underlineStyle}>linkedin</a></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                    <img src={me} className='img-fluid'/>
                </div>
            </div>
        )
    }
}

export default Home;