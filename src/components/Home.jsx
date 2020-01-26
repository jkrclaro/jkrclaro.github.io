import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-lg-5'>
                    <img className='mb-3' alt='me.png' src='/me.png' height='75' width='75' style={{ borderRadius: '50%'}}></img>
                    <p>I live in Dublin and I'm a software engineer primarily interested in web development and cloud computing.</p>
                    <p>I was born in the Philippines but grew up in Ireland and studied at WIT.</p>
                    <p className='mb-3'>You can find me or contact me at:</p>
                    <ul id='home'>
                        <li className='mb-1'>via <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                        <li className='mb-1'>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                        <li className='mb-1'>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                        <li>see my projects on <a href='https://www.github.com/jkrclaro' target="_blank" rel="noopener noreferrer">github</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;