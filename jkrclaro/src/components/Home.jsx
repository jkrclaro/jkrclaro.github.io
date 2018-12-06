import React from 'react';

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
                        If you want to contact me, you can reach me via one of the following communication channels:
                    </p>
                    <ul>
                        <li>via <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                        <li>send me a message on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></li>
                        <li>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                        <li>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                    </ul>
                </div>
                <div className='col-sm-2'></div>
            </div>
        )
    }
}

export default Home;