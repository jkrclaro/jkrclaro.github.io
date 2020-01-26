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
                    I live in Dublin and I'm a software engineer 
                    primarily interested in web development and cloud computing.
                </p>
                <p>
                    I was born in the Philippines but grew up in Ireland and studied at WIT.
                </p>
                <p className='mb-3'>
                    My contacts are below if you want to get in touch:</p>
                <ul id='home'>
                    <li className='mb-1'>via <a href='mailto:jkrclaro@gmail.com'>email</a></li>
                    <li className='mb-1'>connect with me on <a href='https://www.linkedin.com/in/jkrclaro' target="_blank" rel="noopener noreferrer">linkedin</a></li>
                    <li className='mb-1'>reach out to me on <a href='https://www.twitter.com/jkrclaro' target="_blank" rel="noopener noreferrer">twitter</a></li>
                </ul>
            </div>
        )
    }
}

export default Home;