import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='col-lg-5'>
                <div className='row mb-4'>
                    <div className='col-sm-2'>
                        <img alt='me.png' src='/me.png' height='75' width='75' style={{ borderRadius: '50%'}}></img>
                    </div>
                </div>
                <p>
                    I live in Dublin and 
                    I'm a software engineer primarily interested in web development and cloud computing.
                    I was born in the Philippines but grew up in Ireland and studied at WIT.
                </p>
                <p>
                    If you want to contact me, you can reach me via one of the following communication channels:
                    <ul id='home'>
                        <li>via <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                        <li>see my projects on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></li>
                        <li>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                        <li>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default Home;