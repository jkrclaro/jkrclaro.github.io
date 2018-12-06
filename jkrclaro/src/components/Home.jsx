import React from 'react';

const textUnderlineStyle = {
    textDecoration: 'underline'
}

class Home extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                    <h1>About Me</h1>
                    <p>
                        My name is John Claro, I'm 24 years old and 
                        I'm a passionate developer interested in web development, 
                        software engineering and tons of other stuff. 
                    </p>
                    <p>
                        I graduated with Applied Computing in Waterford Institute of Technology from 2012-2016.
                    </p>
                    <p>
                        I currently live in Dublin, Ireland.
                    </p>
                    <p>
                        <p>If you want to contact me, you can reach me via one of the following communication channels:</p>
                        <ul>
                            <li><p>via <a href='mailto:jkrclaro@gmail.com' style={textUnderlineStyle}>email</a></p></li>
                            <li><p>send me a message on <a href='https://www.github.com/jkrclaro' style={textUnderlineStyle} target="_blank">github</a></p></li>
                            <li><p>reach out to me on <a href='https://www.twitter.com/jkrclaro' style={textUnderlineStyle} target="_blank">twitter</a></p></li>
                            <li><p>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' style={textUnderlineStyle} target="_blank">linkedin</a></p></li>
                        </ul>
                    </p>
                </div>
                <div className='col-sm-2'></div>
            </div>
        )
    }
}

export default Home;